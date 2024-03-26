import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Dimensions, Text } from "react-native";
import GamePlayGround from "./components/GamePlayground";

export default function App() {
  const { width, height } = Dimensions.get("window");
  console.log("width", width - 40);
  const maxHeight = height * 0.23;
  const [initialBallsPosition, setInitialBallPosition] = useState([
    {
      id: 1,
      top: 0,
      left: 0,
    },
    {
      id: 2,
      top: 0,
      left: 0,
    },
    {
      id: 3,
      top: 0,
      left: 0,
    },
  ]);

  const moveBallToParticularPos = (
    position: string,
    playgroundBallId: number
  ) => {
    const findParticularItem = initialBallsPosition.find(
      (item) => item.id === playgroundBallId
    );
    if (position === "left") {
      if (findParticularItem?.left === 0) {
        return;
      }
      setInitialBallPosition((prev) =>
        prev.map((item) =>
          item.id === playgroundBallId
            ? {
                ...item,
                left: item.left - 10,
              }
            : item
        )
      );
      return;
    }
    if (position === "right") {
      if (findParticularItem.left >= width - 40) {
        return;
      }
      setInitialBallPosition((prev) =>
        prev.map((item) =>
          item.id === playgroundBallId
            ? {
                ...item,
                left: item.left + 10,
              }
            : item
        )
      );
      return;
    }
    if (position === "top") {
      if (findParticularItem?.top === 0) {
        return;
      }
      setInitialBallPosition((prev) =>
        prev.map((item) =>
          item.id === playgroundBallId
            ? {
                ...item,
                top: item.top - 10,
              }
            : item
        )
      );
      return;
    }
    if (position === "bottom") {
      if (findParticularItem.top >= maxHeight - 40) {
        return;
      }
      setInitialBallPosition((prev) =>
        prev.map((item) =>
          item.id === playgroundBallId
            ? {
                ...item,
                top: item.top + 10,
              }
            : item
        )
      );
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <GamePlayGround
          targetShow
          controllerHide={true}
          bgColor={"white"}
          ballColor={"green"}
          ballPosition={initialBallsPosition[0]}
          border={true}
        />
        <GamePlayGround
          disabledGoalButton={true}
          moveBallToParticularPos={(position) =>
            moveBallToParticularPos(position, initialBallsPosition[0].id)
          }
          bgColor={"white"}
          ballColor={"green"}
          ballPosition={initialBallsPosition[1]}
          border={true}
        />
        <GamePlayGround
          disabledGoalButton={true}
          moveBallToParticularPos={(position) =>
            moveBallToParticularPos(position, initialBallsPosition[1].id)
          }
          bgColor={"white"}
          ballColor={"green"}
          ballPosition={initialBallsPosition[2]}
          border={true}
        />
        <GamePlayGround
          moveBallToParticularPos={(position) =>
            moveBallToParticularPos(position, initialBallsPosition[2].id)
          }
          bgColor={"white"}
          border={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
