import { View, Text, Image } from "react-native";
import React from "react";
import BackNav from "../../Navigation/BackNav";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
const ConnectedAccounts = () => {
  return (
    <Screen>
      <BackNav title={"Connected Accounts"} />
      <View className="pt-4">
        <Image
          source={require("../../../assets/conacc.png")}
          style={{ resizeMode: "contain", alignSelf: "center" }}
        />
        <View className="px-6 py-3 ">
          <AppButton title={"Link a new Account"} />
        </View>
      </View>
      <View className="pt-8">
        <Text className="font-popBold text-lg py-4 ">Connected accounts</Text>
        <View className="bg-[#F5F4F4] py-3 px-3 flex-row mb-3 items-center rounded-xl justify-between">
          <View className=" gap-x-2  flex-row items-center">
            <Ionicons name="logo-whatsapp" size={30} color={"#04B521"} />
            <Text className=" font-popRegulars text-lg leading-5">
              Whatsapp
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={30} />
        </View>
        <View className="bg-[#F5F4F4] py-3 px-3 flex-row items-center mb-3 rounded-xl justify-between">
          <View className=" gap-x-2  flex-row items-center">
            <FontAwesome6
              style={{ backgroundColor: "#000", borderRadius: 40, padding: 6 }}
              name="x-twitter"
              size={25}
              color={"#fff"}
            />
            <Text className=" font-popRegulars text-lg leading-5">X</Text>
          </View>
          <Ionicons name="chevron-forward" size={30} />
        </View>
      </View>
    </Screen>
  );
};

export default ConnectedAccounts;
