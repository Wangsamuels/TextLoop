import { Text, Image, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ChatMsg = ({ data }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("chat")}
        className="flex-row  items-center justify-center "
      >
        <View className="flex-row items-center self-end gap-4 rounded-b-xl w-[96%] ">
          <View>
            <Image
              source={{
                uri: data.img,
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                borderWidth: 1,
                borderColor:
                  data.src === "whatsapp"
                    ? "#04B521"
                    : data.src === "telegram"
                    ? "#04B5AB"
                    : data.src === "x"
                    ? "#000"
                    : null,
              }}
            />
            {data.src === "whatsapp" && (
              <View className="absolute bg-white rounded-full -bottom-1 -right-1 ">
                <Ionicons name="logo-whatsapp" size={20} color={"#04B521"} />
              </View>
            )}
            {data.src === "x" && (
              <View className="absolute bg-black rounded-full p-[2px] -bottom-1 -right-1 ">
                <FontAwesome6 name="x-twitter" size={16} color={"#fff"} />
              </View>
            )}

            {data.src === "telegram" && (
              <View className="absolute bg-white p-[1px] items-center justify-center rounded-full bottom-0 -right-1 ">
                <FontAwesome5
                  name="telegram-plane"
                  size={16}
                  color={"#38bdf8"}
                />
              </View>
            )}
            {data.src === "instagram" && (
              <View className="absolute bg-white p-[1px] items-center justify-center rounded-full bottom-0 -right-1 ">
                <FontAwesome6 name="instagram" size={16} color={"#000bbb"} />
              </View>
            )}
          </View>
          <View className="flex flex-row items-center justify-between w-[70%] ">
            <View className="gap-y-1 justify-center ">
              <Text className="text-xl font-popSemiBold">{data.name}</Text>
              <Text className="text-lg text-zinc-500 font-popRegular">
                Hi dear
              </Text>
            </View>
          </View>
        </View>
        <View className="items-center justify-center gap-2 ">
          <Text className="text-black text-center text-sm rounded-xl pt-[2px] font-popSemiBold ">
            13:06
          </Text>
          <Text className="bg-red-500 w-5 h-5 text-white text-center rounded-xl pt-[2px] font-popRegular ">
            {data.unread}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChatMsg;

export const ChatMsgList = () => {
  const data = [
    {
      id: 1,
      name: "Brook Lewis",
      img: "https://muftimenk.com/wp-content/uploads/cropped-mufti-menk-300x300.jpg",
      unread: 3,
      src: "whatsapp",
    },
    {
      id: 2,
      name: "Sam Altman",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      unread: 13,
      src: "x",
    },
    {
      id: 3,
      name: "Jane Smith",
      img: "https://images.pexels.com/photos/683833/pexels-photo-683833.jpeg?auto=compress&cs=tinysrgb&w=600",
      unread: 15,
      src: "whatsapp",
    },
    {
      id: 4,
      name: "Elon Musk",
      img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600",
      unread: 30,
      src: "telegram",
    },
  ];
  return (
    <FlatList
      ListHeaderComponent={() => (
        <Text className="text-xl font-popSemiBold pl-1 pb-3 ">Priority</Text>
      )}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className="h-8 w-full" />}
      data={data}
      renderItem={({ item }) => <ChatMsg data={item} />}
      ListFooterComponent={() => (
        <FlatList
          ListFooterComponent={() => <View className="h-10 rounded-b-full" />}
          ListHeaderComponent={() => (
            <Text className="text-xl font-popSemiBold pl-1 pt-8 pb-3 ">
              All Messages
            </Text>
          )}
          ItemSeparatorComponent={() => <View className="h-8 w-full" />}
          data={data}
          renderItem={({ item }) => <ChatMsg data={item} />}
        />
      )}
    />
  );
};
