import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { screenHt } from "../utils/helpers";

const Controllers = ({ moveCircle }) => {
  return (
    <View style={styles.container}>
      {/* Top Control */}
      <TouchableOpacity
        style={styles.topControl}
        onPress={() => moveCircle("top")}
      >
        <Text>Top Control</Text>
      </TouchableOpacity>

      {/* Left Control */}
      <TouchableOpacity
        style={styles.leftControl}
        onPress={() => moveCircle("left")}
      >
        <Text>Left Control</Text>
      </TouchableOpacity>

      {/* Right Control */}
      <TouchableOpacity
        style={styles.rightControl}
        onPress={() => moveCircle("right")}
      >
        <Text>Right Control</Text>
      </TouchableOpacity>

      {/* Bottom Control */}
      <TouchableOpacity
        style={styles.bottomControl}
        onPress={() => moveCircle("bottom")}
      >
        <Text>Bottom Control</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Controllers;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    marginTop: 80,
  },
  topControl: {
    position: "absolute",
    top: 10,
    alignSelf: "center",
  },
  leftControl: {
    position: "absolute",
    left: 10,
    alignSelf: "center",
  },
  rightControl: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
  bottomControl: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
  centerButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: 10, // Adjusted bottom value
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
});
