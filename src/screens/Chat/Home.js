import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppAvatar from "../../components/Chat/AppAvatar";
import Screen from "../../components/Screen";
import { ChatMsgList } from "../../components/Chat/ChatMsg";
import { Ionicons } from "@expo/vector-icons";
const Home = () => {
  return (
    <Screen>
      <View className="flex-row justify-between py-2 items-center">
        <View />
        <Text className="font-popSemiBold text-black text-xl">Inbox</Text>
        <Ionicons name="settings-outline" color={"#000"} size={25} />
      </View>
      <View className="bg-[#F5F4F4] rounded-xl p-2 mb-31 ">
        <TextInput
          placeholder="Search"
          placeholderTextColor={"#000"}
          style={{ fontFamily: "Poppins-bold", color: "#000" }}
        />
      </View>
      <AppAvatar />

      <ChatMsgList />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
