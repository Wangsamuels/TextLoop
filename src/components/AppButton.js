import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../config/Colors";
function AppButton({ title, handlePress, btnStyle }) {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer,...btnStyle}}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    backgroundColor:Colors.primary
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default AppButton;