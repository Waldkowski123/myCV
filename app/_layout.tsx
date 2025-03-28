import { Stack } from "expo-router";
import "./../global.css";
import { supabase } from "./../utils/supabase";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
