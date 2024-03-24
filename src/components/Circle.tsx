import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Circle = ({ position }) => {
  // useEffect(() => {
  //   const randomBottom = Math.floor(Math.random() * (500 - 25)) + 25;
  //   const randomLeft = Math.floor(Math.random() * (300 - 25)) + 25;

  //   // setPosition({ bottom: randomBottom, left: randomLeft });
  // }, []);

  return <View style={[styles.circle, position]}></View>;
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    height: 25,
    width: 25,
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 100,
  },
});
