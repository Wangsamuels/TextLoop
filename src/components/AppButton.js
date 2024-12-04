import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
function AppButton({ title, handlePress, btnStyle }) {
  return (
    <LinearGradient
      colors={["#941500", "#FA2300"]}
      style={{ ...styles.buttonContainer, ...btnStyle }}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={{ width: "100%", alignItems: "center" }}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 51,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "Poppins-bold",
  },
});
export default AppButton;
