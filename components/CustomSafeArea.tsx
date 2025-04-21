import {
  View,
  SafeAreaView,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CustomSafeArea: React.FC<{
  children: React.ReactNode; // Children elements to be rendered within the component
  pagetype?: "authenticated" | "un-authenticated" | "all"; // Optional prop for specifying the page type
}> = ({ children, pagetype }) => {
  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === "web"; // Check if the platform is web

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar style="dark" />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        {/* Render NavBar */}

        {children}
      </SafeAreaView>
    </View>
  );
};

export default CustomSafeArea;
