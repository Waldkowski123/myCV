import { Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
export default function Index() {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <View
      className={`flex-1 ${
        isOn ? "bg-yellow-200" : "bg-slate-900"
      }  justify-center items-center gap-20`}
    >
      <Text className={`text-[32px] ${isOn ? "text-black" : "text-white"}`}>
        Light Switch
      </Text>
      <Pressable
        className={`w-9/12 h-40 ${
          isOn ? "border-black" : "border-white"
        } border-2 rounded-2xl flex items-center justify-center`}
        onPress={() => {
          isOn ? setIsOn(false) : setIsOn(true);
        }}
      >
        {isOn ? (
          <Text className="text-[40px] font-bold">I am on</Text>
        ) : (
          <Text className="text-[40px] font-bold text-white">I am not on</Text>
        )}
      </Pressable>
    </View>
  );
}
