import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type ControllersProps = {
  moveCircle: (postion: string) => void;
  disabledGoalButton: boolean;
  statusOfButton: string;
};
const Controllers = ({
  moveCircle,
  disabledGoalButton,
  statusOfButton,
}: ControllersProps) => {
  return (
    <View style={styles.container}>
      {/* Top Control */}

      <TouchableOpacity
        style={[
          styles.topControl,
          {
            backgroundColor: statusOfButton === "top" ? "#FFF786" : "#CECDCE",
            borderColor: statusOfButton === "top" ? "#EFC187" : "",
          },
        ]}
        onPress={() => !disabledGoalButton && moveCircle("top")}
      >
        <Text>⬆️</Text>
      </TouchableOpacity>
      {/* Left Control */}
      <TouchableOpacity
        style={[
          styles.leftControl,
          {
            backgroundColor: statusOfButton === "left" ? "#FFF786" : "#CECDCE",
            borderColor: statusOfButton === "left" ? "#EFC187" : "",
          },
        ]}
        onPress={() => !disabledGoalButton && moveCircle("left")}
      >
        <Text>⬅️</Text>
      </TouchableOpacity>

      {/* Right Control */}
      <TouchableOpacity
        style={[
          styles.rightControl,
          {
            backgroundColor: statusOfButton === "right" ? "#FFF786" : "#CECDCE",
            borderColor: statusOfButton === "right" ? "#EFC187" : "",
          },
        ]}
        onPress={() => !disabledGoalButton && moveCircle("right")}
      >
        <Text>➡️</Text>
      </TouchableOpacity>

      {/* Bottom Control */}
      <TouchableOpacity
        style={[
          styles.bottomControl,
          {
            backgroundColor:
              statusOfButton === "bottom" ? "#FFF786" : "#CECDCE",
            borderColor: statusOfButton === "bottom" ? "#EFC187" : "",
          },
        ]}
        onPress={() => !disabledGoalButton && moveCircle("bottom")}
      >
        <Text>⬇️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Controllers;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  bottomControl: {
    position: "absolute",
    top: 30,
    borderWidth: 2,
    borderColor: "black",
    height: 25,
    width: 55,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
  rightControl: {
    position: "absolute",
    left: 10,
    borderWidth: 2,
    borderColor: "black",
    height: 25,
    width: 55,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },

  leftControl: {
    position: "absolute",
    right: 10,
    borderWidth: 2,
    borderColor: "black",
    height: 25,
    width: 55,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
  topControl: {
    position: "absolute",
    bottom: 10,
    borderWidth: 2,
    borderColor: "black",
    height: 25,
    width: 55,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CECDCE",
  },
});
