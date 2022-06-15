import React from "react";

import { StatusBar } from "expo-status-bar";

import AppLoading from "expo-app-loading";
import { Home } from "./src/screens/Home";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "expo-app-loading is deprecated in favor of expo-splash-screen:",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Home />
      </>
    );
  }
}
