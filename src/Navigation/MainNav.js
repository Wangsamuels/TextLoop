import { useAuth } from "../Providers/AuthProvider";
import { ActivityIndicator, View } from "react-native";
import AppNav from "../Navigation/AppNav";
import AuthNav from "../Navigation/AuthNav";

export const MainNav = () => {
  const { session, loading } = useAuth();
  if (loading)
    return (
      <View className="flex flex-1 items-center justify-center">
        <ActivityIndicator color={"#910a51"} size={"large"} />
      </View>
    );

  return <>{session ? <AppNav /> : <AuthNav />}</>;
};
