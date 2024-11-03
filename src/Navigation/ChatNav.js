import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Chat/Home";
import SocialMedia from "../screens/Chat/SocialMedia";
import Chat from "../screens/Chat/Chat";
const Stack = createNativeStackNavigator();
export default ChatNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="messages" component={Home} />
      <Stack.Screen name="socialMedia" component={SocialMedia} />
      <Stack.Screen name="chat" component={Chat} />
    </Stack.Navigator>
  );
};
