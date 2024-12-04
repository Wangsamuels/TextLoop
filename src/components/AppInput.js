import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function AppInput({
  style,
  iconName,
  placeholder,
  ...otherProps
}) {
  return (
    <>
      <View style={[styles.container, style]}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            style={styles.icon}
            color={Colors.medium}
          />
        )}
        <TextInput
          placeholder={placeholder}
          {...otherProps}
          style={styles.TextInput}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#f5f4f4",
    borderRadius: 10,
    borderColor: "#f5f4f4",
    flexDirection: "row",
    padding: 8,
    height: 52,
    marginVertical: 10,
  },
  icon: {
    marginTop: 4,
  },
  TextInput: {
    flex: 1,
    color: "#595959",
    fontSize: 16,
    fontFamily: "Poppins-semiBold",
    paddingLeft: 6,
  },
});
