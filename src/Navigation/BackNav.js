import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const BackNav = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} />
      </TouchableOpacity>
      <Text className="font-popSemiBold text-xl">{title}</Text>
      <View />
    </View>
  );
};

export default BackNav;
