import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BallPositionType } from "./GamePlayground";

type CircleProps = {
  ballPosition: BallPositionType;
  ballColor: string;
};
const Circle = ({ ballPosition, ballColor }: CircleProps) => {
  const circleSize = 50;
  const circleOffset = 30;

  return (
    <View
      style={{
        position: "absolute",
        top: ballPosition.top,
        left: ballPosition.left,
      }}
    >
      <View
        style={[
          styles.circle,
          // position,
          { backgroundColor: ballColor },
        ]}
      ></View>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    height: 25,
    width: 25,
    // position: "absolute",
    borderRadius: 100,
  },
});
