import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { screenHt } from "../utils/helpers";

const Controllers = ({ moveCircle }) => {
  return (
    <View style={styles.container}>
      {/* Top Control */}
      <TouchableOpacity
        style={styles.bottomControl}
        onPress={() => moveCircle("bottom")}
      >
        <Text>Top</Text>
      </TouchableOpacity>

      {/* Left Control */}
      <TouchableOpacity
        style={styles.leftControl}
        onPress={() => moveCircle("left")}
      >
        <Text>Left</Text>
      </TouchableOpacity>

      {/* Right Control */}
      <TouchableOpacity
        style={styles.rightControl}
        onPress={() => moveCircle("right")}
      >
        <Text>Right</Text>
      </TouchableOpacity>

      {/* Bottom Control */}
      <TouchableOpacity
        style={styles.topControl}
        onPress={() => moveCircle("top")}
      >
        <Text>Bottom</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Controllers;

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // flex: 1,
    // justifyContent: "center",
    // marginTop: 80,
    // height: "100%",
    // width: "100%",
    alignItems: "center",
  },
  topControl: {
    position: "absolute",
    top: 30,
    borderWidth: 2,
    borderColor: "blue",
    height: 20,
    width: 55,
    display: "flex",
    alignItems: "center",
  },
  rightControl: {
    position: "absolute",
    left: 10,
    borderWidth: 2,
    borderColor: "blue",
    height: 20,
    width: 55,
    display: "flex",
    alignItems: "center",
  },

  leftControl: {
    position: "absolute",
    right: 10,
    borderWidth: 2,
    borderColor: "blue",
    height: 20,
    width: 55,
    display: "flex",
    alignItems: "center",
  },
  bottomControl: {
    position: "absolute",
    bottom: 10,
    borderWidth: 2,
    borderColor: "blue",
    height: 20,
    width: 55,
    display: "flex",
    alignItems: "center",
  },
});
