import { Text, View } from "react-native";
import React from "react";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <View>
      <Text className="font-popRegular text-red-400 pb-1 text-base ">
        {error}
      </Text>
    </View>
  );
}
