import { StyleSheet, View, Text, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { BallPositionType } from "./GamePlayground";

type TargetProps = {
  ballPosition: BallPositionType;
  targetPositionFromTop: number;
  targetPositionFromLeft: number;
};
const Target = ({
  ballPosition,
  targetPositionFromTop,
  targetPositionFromLeft,
}: TargetProps) => {
  const [isReached, setIsReached] = useState(false);

  useEffect(() => {
    checkIsBallReachedDestination();
  }, [ballPosition]);

  const checkIsBallReachedDestination = () => {
    if (
      ballPosition.top >= targetPositionFromTop &&
      ballPosition.top <= targetPositionFromTop + 50 &&
      ballPosition.left >= targetPositionFromLeft &&
      ballPosition.left <= targetPositionFromLeft + 50
    ) {
      setIsReached(true);
      Alert.alert("Hurrrrraaaayyy");
    }
  };
  return (
    <View style={{ position: "relative", width: "100%", height: "100%" }}>
      <View
        style={[
          styles.container,
          {
            top: targetPositionFromTop,
            left: targetPositionFromLeft,
            backgroundColor: isReached ? "red" : "",
          },
        ]}
      ></View>
    </View>
  );
};

export default Target;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 50,
    width: 50,
    borderColor: "blue",
    borderStyle: "dashed",
    margin: 4,
    borderWidth: 2,
  },
});
