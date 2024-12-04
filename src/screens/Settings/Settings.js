import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import BackNav from "../../Navigation/BackNav";
import { supabase } from "../../../Supabase/Supabase";
const Settings = () => {
  const settingsTool = [
    {
      title: "My Profile",
      icon: <Ionicons name="person-outline" size={25} />,
    },
    {
      title: "Connected Accounts",
      icon: <Ionicons name="mail-outline" size={25} />,
    },
    {
      title: "Theme & Display",
      icon: <Ionicons name="person-outline" size={25} />,
    },
    {
      title: "Privacy & Security",
      icon: <Ionicons name="lock-open-outline" size={25} />,
    },
    {
      title: "About Us",
      icon: <Ionicons name="information-circle-outline" size={25} />,
    },
    {
      title: "FAQs & Help",
      icon: <AntDesign name="infocirlceo" size={25} />,
    },
  ];
  return (
    <Screen>
      <BackNav title={"Settings"} />
      <View className="flex flex-1">
        <View className="flex-row border-b-2 py-4 border-zinc-200 items-center  gap-x-3 ">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          />
          <View>
            <Text className="font-popSemiBold text-2xl">Gabriel Houston</Text>

            <Text className="font-popSemiBold text-zinc-400 text-base">
              +234 81 149 927 50
            </Text>
          </View>
        </View>
        <View className="py-12">
          <FlatList
            ItemSeparatorComponent={() => <View className="h-8" />}
            data={settingsTool}
            renderItem={({ item }) => (
              <View className="flex-row gap-x-5 items-center">
                {item.icon}
                <Text className="font-popSemiBold text-xl">{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => supabase.auth.signOut()}
        className="flex-row gap-x-5 items-center py-6"
      >
        <AntDesign name="logout" color={"red"} size={30} />
        <Text className="font-popSemiBold text-xl">Logout</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default Settings;
