import { useRouter } from "expo-router";
import { Platform, Text, useWindowDimensions, View } from "react-native";

export default function Index() {
  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === "web"; // Check if the platform is web

  const router = useRouter();



  return ;
}

