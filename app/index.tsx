import React, { useState } from "react";
import {
  Alert,
  View,
  AppState,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { supabase } from "../utils/supabase";
import { Input } from "@rneui/themed";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      router.replace({ pathname: "./(tabs)", params: { user: email } });
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="h-1/6 flex-col w-10/12 items-center justify-center mt-4">
        <Text className="font-medium text-[40px]">
          Valentine's Super Giga Application 😎🗿
        </Text>
      </View>
      <View className="h-1/3 w-full">
        <View className="flex w-full gap-5 items-center mt-3 flex-row ">
          <View className="w-3/12 items-end">
            <Text className="font-bold">Email</Text>
          </View>
          <View className="w-7/12">
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              className="w-11/12 h-20 border-2 border-black rounded-[30px] text-center"
            />
          </View>
        </View>
        <View className="flex w-full gap-5 items-center mt-3 gap-4 flex-row ">
          <View className="w-3/12 items-end">
            <Text className="font-bold">Password</Text>
          </View>
          <View className="w-7/12">
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={"none"}
              className="w-11/12 h-20 border-2 border-black rounded-[30px] text-center"
            />
          </View>
        </View>
        <View className="flex mt-[30px] flex-row w-full justify-around">
          <View className="w-1/3">
            <Pressable
              disabled={loading}
              onPress={() => signInWithEmail()}
              className="bg-blue-500 h-[50px] flex justify-center items-center rounded-[30px]"
            >
              <Text className="font-semibold text-xl">Sign in</Text>
            </Pressable>
          </View>
          <View className="w-1/3">
            <Pressable
              disabled={loading}
              onPress={() => signUpWithEmail()}
              className="bg-blue-500 h-[50px] flex justify-center items-center rounded-[30px]"
            >
              <Text className="font-semibold text-xl">Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="absolute bottom-0 items-center w-full mb-[30px]">
        <Text className="font-extralight">
          @Made By Valentin Banobre Kalinowski
        </Text>
      </View>
    </SafeAreaView>
  );
}
