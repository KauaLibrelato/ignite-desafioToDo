import React from "react";

import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";
import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Home />
    </Background>
  );
}
