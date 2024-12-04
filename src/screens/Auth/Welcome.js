import { View, Text, Image } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Screen style={{ backgroundColor: "#F2F2F2" }}>
      <View className="flex flex-1 items-center justify-evenly">
        <View className="bg-white w-[88px] shadow-2xl shadow-gray-500  h-[88px] rounded-full items-center ">
          <Image source={require("../../../assets/textloop.png")} />
        </View>
        <View className="gap-y-3">
          <Text className="font-popSemiBold text-2xl text-center">
            The Center of your Media
          </Text>
          <Text className="font-popLight text-center text-base">
            We are at the center of your online Presence serving as a link to
            all your social media Platforms.
          </Text>
          <View className="">
            <AppButton
              handlePress={() => navigation.navigate("login")}
              title={"Let's Begin"}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Welcome;
