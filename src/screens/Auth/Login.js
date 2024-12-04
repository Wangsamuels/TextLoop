import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitBtn";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../../Supabase/Supabase";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  email: Yup.string().email("Email is required").required(),
});

const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);

    async function signInWithEmail() {
      setLoading(true);
      const { error, data } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) Alert.alert(error.message);
      console.log(data, "data");
      setLoading(false);
    }
    signInWithEmail();
  };
  if (loading)
    return (
      <View className="flex flex-1 items-center justify-center">
        <ActivityIndicator color={"#910a51"} size={"large"} />
      </View>
    );

  return (
    <Screen>
      <View className="flex  flex-1 items-center w-full">
        <Image
          source={require("../../../assets/textLoopBg.png")}
          style={{ height: 190 }}
        />
        <View>
          <Text className="font-popSemiBold leading- text-lg text-center">
            Welcome to TextLoop
          </Text>
        </View>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <>
            <View className="w-full  py-6">
              <AppFormField
                name={"email"}
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <AppFormField name={"password"} placeholder="Password" />
              <View className="self-end">
                <Text className="font-popSemiBold text-lg">
                  Forget Password?
                </Text>
              </View>
            </View>
            <SubmitButton title={"Log in"} />
          </>
        </Formik>
        <View className="flex-row items-center justify-center gap-x-2 mt-5 rounded-lg border-gray-800 border-[1px] w-[342px] self-center py-3">
          <Image source={require("../../../assets/googleIcon.png")} />
          <Text className="font-popRegular text-lg">Log in with Google</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("register")}
          className="flex-row self-center py-2 gap-x-2 "
        >
          <Text className="font-popRegular text-lg">
            Don't have an account?
          </Text>
          <Text className="font-popRegular text-lg text-[#FA2300] ">
            Sign Up Today
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Login;
