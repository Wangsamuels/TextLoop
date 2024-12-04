import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import Screen from "../../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField";
import SubmitButton from "../../components/SubmitBtn";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { supabase } from "../../../Supabase/Supabase";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  phone: Yup.string().required("Mobile number is required"),
  password: Yup.string().min(6).required("Password is required"),
  email: Yup.string().email("Email is required").required(),
});

const Register = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    async function signUpWithEmail() {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        displayName: values.username,
        phone: values.phone,
      });
      if (error) Alert.alert(error.message);
      setLoading(false);
    }
    signUpWithEmail();
  };

  if (loading)
    return (
      <View className="flex flex-1 items-center justify-center">
        <ActivityIndicator color={"#910a51"} size={"large"} />
      </View>
    );

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                <AppFormField name={"username"} placeholder="Username" />
                <AppFormField
                  name={"email"}
                  placeholder="Email Address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <AppFormField
                  name={"phone"}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <AppFormField name={"password"} placeholder="Enter Password" />
                <View className="self-end">
                  <Text className="font-popSemiBold text-lg">
                    Forget Password?
                  </Text>
                </View>
              </View>
              <SubmitButton title={"Sign up"} />
            </>
          </Formik>
          <View className="flex-row items-center justify-center gap-x-2 mt-5 rounded-lg border-gray-800 border-[1px] w-[342px] self-center py-3">
            <Image source={require("../../../assets/googleIcon.png")} />
            <Text className="font-popRegular text-lg">Sign Up with Google</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            className="flex-row self-center py-2 gap-x-2 "
          >
            <Text className="font-popRegular text-lg">
              Already Have an account?
            </Text>
            <Text className="font-popRegular text-lg text-[#FA2300] ">
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Register;
