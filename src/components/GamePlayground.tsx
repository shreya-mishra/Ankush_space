import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Circle from "./Circle";
import Target from "./Target";
import Controllers from "./Controllers";

export type BallPositionType = {
  id: number;
  top: number;
  left: number;
};
type GamePlayGroundProps = {
  moveBallToParticularPos: (position: string) => void;
  bgColor: string;
  controllerHide: boolean;
  ballPosition: BallPositionType;
  ballColor: string;
  targetShow?: boolean;
  disabledGoalButton: boolean;
  border: boolean;
};

const GamePlayGround = ({
  moveBallToParticularPos,
  bgColor,
  controllerHide,
  ballPosition,
  ballColor,
  targetShow,
  disabledGoalButton,
  border,
}: GamePlayGroundProps) => {
  const { height, width } = Dimensions.get("window");
  const [statusOfButton, setStatusOfButton] = useState("");
  let interval = useRef<any>(null);

  useEffect(() => {
    calculatePositionOfParticularBallWhetherReachButton();
  }, [ballPosition]);

  const calculatePositionOfParticularBallWhetherReachButton = () => {
    if (ballPosition) {
      if (
        ballPosition.left >= width / 2 - 40 &&
        ballPosition.left <= width / 2 &&
        ballPosition.top >= height * 0.23 - 110 &&
        ballPosition.top <= height * 0.23 - 90
      ) {
        interval && clearInterval(interval.current);
        setStatusOfButton("top");
        startBallMovement("top");
        return;
      }
      if (
        ballPosition.left >= width / 2 - 90 &&
        ballPosition.left <= width / 2 - 30 &&
        ballPosition.top >= height * 0.23 - 90 &&
        ballPosition.top <= height * 0.23 - 50
      ) {
        interval && clearInterval(interval.current);
        setStatusOfButton("left");
        startBallMovement("left");
        return;
      }
      if (
        ballPosition.left >= width / 2 + 10 &&
        ballPosition.left <= width / 2 + 40 &&
        ballPosition.top >= height * 0.23 - 90 &&
        ballPosition.top <= height * 0.23 - 50
      ) {
        interval && clearInterval(interval.current);
        setStatusOfButton("right");
        startBallMovement("right");
        return;
      }
      console.log("ballPosition.top", ballPosition.top, height * 0.23 - 40);
      if (
        ballPosition.left >= width / 2 - 40 &&
        ballPosition.left <= width / 2 &&
        ballPosition.top >= height * 0.23 - 40 &&
        ballPosition.top <= height * 0.23 - 30
      ) {
        interval && clearInterval(interval.current);
        setStatusOfButton("bottom");
        startBallMovement("bottom");
        return;
      }
      interval && clearInterval(interval.current);
      setStatusOfButton("");
    }
  };

  const startBallMovement = (ballPosisiton: string) => {
    interval.current = setInterval(() => {
      moveBallToParticularPos(ballPosisiton);
    }, 1000);
  };

  return (
    <View
      style={[
        styles.gameContainer,
        {
          backgroundColor: bgColor,
          height: height * 0.23,
          borderWidth: border ? 4 : 0,
        },
      ]}
    >
      {targetShow && (
        <Target
          targetPositionFromLeft={100}
          targetPositionFromTop={50}
          ballPosition={ballPosition}
        />
      )}
      {!controllerHide && (
        <View
          style={{
            position: "absolute",
            bottom: 60,
          }}
        >
          <Controllers
            key={statusOfButton}
            statusOfButton={statusOfButton}
            disabledGoalButton={disabledGoalButton}
            moveCircle={moveBallToParticularPos}
          />
        </View>
      )}
      {ballPosition && (
        <Circle ballPosition={ballPosition} ballColor={ballColor} />
      )}
    </View>
  );
};

export default GamePlayGround;

const styles = StyleSheet.create({
  gameContainer: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "grey",
    margin: 2,
    position: "relative",
  },
});
