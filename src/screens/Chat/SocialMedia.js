import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import Screen from "../../components/Screen";
import ChatMsg from "../../components/Chat/ChatMsg";
import { Ionicons, FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
const SocialMedia = ({ route }) => {
  const { platform } = route.params;
  const msgData = [
    {
      id: 1,
      name: "Brook Lewis",
      img: "https://muftimenk.com/wp-content/uploads/cropped-mufti-menk-300x300.jpg",
      unread: 3,
    },
    {
      id: 2,
      name: "Sam Altman",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      unread: 13,
    },
    {
      id: 3,
      name: "Jane Smith",
      img: "https://images.pexels.com/photos/683833/pexels-photo-683833.jpeg?auto=compress&cs=tinysrgb&w=600",
      unread: 15,
    },
    {
      id: 4,
      name: "Elon Musk",
      img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600",
      unread: 30,
    },
  ];
  const platformData = [
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
    <Screen>
      <View className="flex-row justify-between py-2 items-center">
        <TouchableHighlight underlayColor={"#f5f4f4"}>
          <Ionicons name="chevron-back-outline" size={26} />
        </TouchableHighlight>
        <Text className="font-popSemiBold text-black text-xl">{platform}</Text>
        <View className="flex-row gap-x-2 ">
          {/* { platformData.filter( plat = ) } */}
          <FontAwesome6
            style={{ backgroundColor: "#000", borderRadius: 40, padding: 6 }}
            name="x-twitter"
            size={16}
            color={"#fff"}
          />
          <FontAwesome6 name="instagram" size={30} color={"#f43f5e"} />
        </View>
      </View>
      <View className="bg-[#F5F4F4] rounded-xl   flex-row justify-center items-center p-2 mb-31 ">
        <Ionicons name="search-outline" size={22} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={"#000"}
          style={{
            fontFamily: "Poppins-bold",
            paddingLeft: 20,
            color: "#000",
            width: "90%",
          }}
        />
      </View>

      <FlatList
        ListFooterComponent={() => <View className="h-10 rounded-b-full" />}
        ListHeaderComponent={() => (
          <Text className="text-xl font-popSemiBold pl-1 pt-8 pb-3 ">
            All Messages
          </Text>
        )}
        ItemSeparatorComponent={() => <View className="h-8 w-full" />}
        data={msgData}
        renderItem={({ item }) => <ChatMsg data={{ ...item, src: platform }} />}
      />
    </Screen>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({});
