import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Screen from "../../components/Screen";

const Chat = () => {
  const Messages = [
    {
      id: 1,
      text: "Hi dave",
    },
    {
      id: 2,
      text: "Welcoe to textLoop we're happy to have you here",
    },
    {
      id: 3,
      text: "Let me put you through how to configure your apps to recieve and send messages in textLoop",
    },
  ];
  return (
    <>
      <Screen>
        <View className="flex-row  items-center justify-center ">
          <View className="flex-row items-center self-end gap-4 rounded-b-xl w-[96%] ">
            <View>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1531844734254-51193b49c604?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  borderWidth: 1,
                }}
              />
            </View>
            <View className="flex flex-row items-center justify-between w-[70%] ">
              <View className=" justify-center ">
                <Text className="text-xl font-popSemiBold">John Doe</Text>
                <Text className="text-sm text-zinc-500 font-popRegular">
                  Last seen 13:06 am
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center justify-center gap-2 "></View>
        </View>
        <FlatList
          data={Messages}
          inverted
          renderItem={({ item }) => (
            <View className="bg-zinc-200 rounded-t-lg w-3/4 self-end p-4 m-1 rounded-br-xl ">
              <Text className="text-base font-popRegular"> {item.text} </Text>
            </View>
          )}
        />
      </Screen>
      <View className="bg-zinc-200 self-center w-[95%]  h-12 mb-2  rounded-full">
        <TextInput />
      </View>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({});
