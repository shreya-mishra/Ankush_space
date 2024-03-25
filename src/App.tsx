import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Controllers from "./components/Controllers";
import Target from "./components/Goal";
import Circle from "./components/Circle";

export default function App() {
  const [circlePositions, setCirclePositions] = useState([
    { top: 0, left: 0 },
    { top: 0, left: 0 },
    { top: 0, left: 0 },
  ]);
  const [targetReached, setTargetReached] = useState(false);

  const moveCircle = (index, direction) => {
    console.log("circlePositions>>>>>>", circlePositions);
    const newPositions = [...circlePositions];
    let newPosition = newPositions[index];

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

    // Update the corresponding circle position
    newPositions[index] = newPosition;

    // left = 0 ------ 30;
    // top = 40;
    //index  ========> index , top button press

    // left = -40 to - 10 and top === 70 . button press LEFT

    // left = 0 ----30 and top === 100 button pressBOTTOM

    // right = 40 ----- 60 and top === 70 button press RIGHT

    // if (newPosition.top >= 0 && newPosition.top <= 10) {
    //   //TODO: container : index , buttonIndex : 0,1,2,3
    //   console.log("LOGSSS", direction, index);
    //   onTopReached(index);
    // }

    if (
      newPosition.top === 40 &&
      newPosition.left >= 0 &&
      newPosition.left <= 30
    ) {
      setCirclePositions([
        { top: newPosition.top, left: newPosition.left },
        { top: 0, left: 0 },
        { top: 0, left: 0 },
      ]);
      setInterval(() => {
        moveCircle(index + 1, "top");
      }, 5000);
    } else if (
      newPosition.top === 100 &&
      newPosition.left >= 0 &&
      newPosition.left <= 30
    ) {
      setCirclePositions([
        { top: newPosition.top, left: newPosition.left },
        { top: 0, left: 0 },
        { top: 0, left: 0 },
      ]);
      moveCircle(index + 1, "bottom");
    } else if (
      newPosition.top === 70 &&
      newPosition.left >= -40 &&
      newPosition.left <= -10
    ) {
      moveCircle(index + 1, "left");
    } else if (
      newPosition.top === 70 &&
      newPosition.left >= 40 &&
      newPosition.left <= 60
    ) {
      moveCircle(index + 1, "right");
    } else {
      console.log("outside the box");
    }
    newPositions[index] = newPosition;

    // setTargetReached(targetReached); // TODO:
    setCirclePositions(newPositions);
  };
  // const moveCircle = (index, direction) => {
  //   const newPositions = [...circlePositions];
  //   // let newPosition = { ...newPositions[index] };
  //   let targetBox = {
  //     bottom: 20,
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     width: "100%",
  //   };

  //   switch (direction) {
  //     case "top":
  //       newPosition.top += 10;
  //       break;
  //     case "left":
  //       newPosition.left -= 10;
  //       break;
  //     case "right":
  //       newPosition.left += 10;
  //       break;
  //     case "bottom":
  //       newPosition.top -= 10;
  //       break;
  //   }

  //   newPositions[index] = newPosition;

  //   if (
  //     newPosition.left >= targetBox.left &&
  //     newPosition.left <= targetBox.width + targetBox.left &&
  //     newPosition.top >= targetBox.top &&
  //     newPosition.top <= targetBox.width * targetBox.top

  //     // newPosition.left === targetBox.right &&
  //     // newPosition.bottom === targetBox.bottom
  //   ) {
  //     console.log("target Reached >>>>>>>>>>>>>", newPosition);
  //     setTargetReached(true);
  //   } else {
  //     console.log("Target not reached. newPosition:", newPosition);
  //     console.log("targetBox:", targetBox);
  //   }

  //   setCirclePosition(newPosition);
  // };

  return (
    <>
      <Text>Strike the Target</Text>
      <View style={styles.container}>
        <View style={styles.gameContainer}>
          <View style={styles.playground}>
            <Target targetReached={targetReached} />
            <Circle position={circlePositions[2]} />
          </View>
        </View>

        <View style={styles.gameContainer}>
          <View style={styles.playground}>
            {/* <Target targetReached={targetReached} /> */}
            <Circle position={circlePositions[1]} />
          </View>

          <View style={styles.controller}>
            <Controllers moveCircle={(direction) => moveCircle(2, direction)} />
          </View>
        </View>

        <View style={styles.gameContainer}>
          <View style={styles.playground}>
            {/* <Target targetReached={targetReached} /> */}
            <Circle position={circlePositions[0]} />
          </View>

          <View style={styles.controller}>
            <Controllers
              moveCircle={(direction) => {
                moveCircle(1, direction);
              }}
            />
          </View>
        </View>

        <View style={styles.controller}>
          <Controllers
            moveCircle={(direction) => {
              moveCircle(0, direction);
            }}
          />
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
    // backgroundColor: "yellow",
  },
  gameContainer: {
    height: "25%",

    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    margin: 2,
  },
  controller: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    height: 100,
    // width: 100,
    // borderColor: "blue",
    // backgroundColor: "red",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
