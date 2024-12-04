import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Auth/Welcome";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
const Stack = createNativeStackNavigator();
export default AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};
