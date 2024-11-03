import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Fonts from "./src/config/Fonts";
import { NavigationContainer } from "@react-navigation/native";
import ChatNav from "./src/Navigation/ChatNav";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts(Fonts);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <ChatNav />
    </NavigationContainer>
  );
}
