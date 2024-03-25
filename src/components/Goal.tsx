import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { screenHt, screenWidth } from "../utils/helpers";

const Target = ({ targetReached }) => {
  // console.log("🚀 ~ Target ~ targetReached:", targetReached);
  // if (targetReached) {
  //   Alert.alert("Reached!!!");
  // }
  return <View style={styles.container}></View>;
};

export default Target;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: 0,
    // top: 150,
    // left: 0,
    height: 50,
    width: 50,
    borderColor: "green",
    margin: 4,
    borderWidth: 2,
  },
});
