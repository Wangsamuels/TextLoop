import {
  MaterialCommunityIcons,
  Feather,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatNav from "./ChatNav";
import SettingsNav from "./SettingsNav";

const Tab = createBottomTabNavigator();

export default function MainNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { fontSize: 0 },
        tabBarStyle: {
          height: 60,
          borderWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ChatNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Done"
        component={ChatNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="tooltip-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
