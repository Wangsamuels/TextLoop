import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../screens/Settings/Settings";
import ConnectedAccounts from "../screens/Settings/ConnectedAccounts";
const Stack = createNativeStackNavigator();

export default SettingsNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="settingsHome" component={Settings} />
      <Stack.Screen name="connectedAccounts" component={ConnectedAccounts} />
    </Stack.Navigator>
  );
};
