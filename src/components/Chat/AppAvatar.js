import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome6,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppAvatar = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: "Whatsapp",
      icon: <Ionicons name="logo-whatsapp" size={30} color={"#04B521"} />,
      unread: 3,
    },

    {
      id: 3,
      name: "telegram",
      icon: <FontAwesome5 name="telegram-plane" size={30} color={"#38bdf8"} />,
      unread: 15,
    },
    {
      id: 4,
      name: "instagram",
      icon: <FontAwesome6 name="instagram" size={30} color={"#f43f5e"} />,
      unread: 30,
    },
    {
      id: 2,
      name: "x",
      icon: (
        <FontAwesome6
          style={{ backgroundColor: "#000", borderRadius: 40, padding: 6 }}
          name="x-twitter"
          size={25}
          color={"#fff"}
        />
      ),
      unread: 13,
    },
  ];
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
        }}
        ListHeaderComponent={() => (
          <View className="items-center justify-center self-center ">
            <View className="bg-[#941500] w-10 h-10 items-center justify-center rounded-full ">
              <AntDesign name="plus" size={23} color={"#fff"} />
            </View>
            <Text className="font-popSemiBold pt-1 "> Add New</Text>
          </View>
        )}
        ListFooterComponent={() => <View className="w-10" />}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("socialMedia", { platform: item.name })
            }
            className="items-center justify-center gap-y-2"
          >
            <View className=" flex items-center justify-between gap-y-3 ">
              {item.icon}
              <Text className="bg-red-500 text-white pt-[2px] w-5 items-center justify-center text-center  h-5 rounded-xl absolute -top-1 -right-3">
                {item.unread}
              </Text>
            </View>
            <Text className="font-popSemiBold"> {item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AppAvatar;
