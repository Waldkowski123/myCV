import { Stack } from "expo-router";
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
