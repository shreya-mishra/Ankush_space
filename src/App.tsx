import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Controllers from "./components/Controllers";
import Target from "./components/Goal";
import Circle from "./components/Circle";

export default function App() {
  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });
  const [targetReached, setTargetReached] = useState(false);

  const moveCircle = (direction) => {
    let newPosition = { ...circlePosition };
    let targetBox = {
      bottom: 0,
      top: 150,
      left: 0,
      width: 150,
    };

    switch (direction) {
      case "top":
        newPosition.top += 10;
        break;
      case "left":
        newPosition.left -= 10;
        break;
      case "right":
        newPosition.left += 10;
        break;
      case "bottom":
        newPosition.top -= 10;
        break;
    }

    if (
      newPosition.left >= targetBox.left &&
      newPosition.left <= targetBox.width + targetBox.left &&
      newPosition.top >= targetBox.top &&
      newPosition.top <= targetBox.width * targetBox.top

      // newPosition.left === targetBox.right &&
      // newPosition.bottom === targetBox.bottom
    ) {
      console.log("target Reached >>>>>>>>>>>>>", newPosition);
      setTargetReached(true);
    } else {
      console.log("Target not reached. newPosition:", newPosition);
      console.log("targetBox:", targetBox);
    }

    setCirclePosition(newPosition);
  };

  return (
    <>
      <Text>Strike the Target</Text>
      <View style={styles.container}>
        <View style={styles.playground}>
          <Target targetReached={targetReached} />
          <Circle position={circlePosition} />
        </View>

        <View style={styles.controller}>
          <Controllers moveCircle={moveCircle} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playground: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    height: "80%",
  },
  controller: {
    backgroundColor: "pink",
    alignItems: "center",
    height: "20%",
  },
});
