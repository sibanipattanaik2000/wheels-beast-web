import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    UrbanistRegular:require("@/assets/fonts/Urbanist-Regular.ttf"),
    UrbanistMedium: require("@/assets/fonts/Urbanist-Medium.ttf"),
    UrbanistSemiBold: require("@/assets/fonts/Urbanist-SemiBold.ttf"),
    UrbanistBold: require("@/assets/fonts/Urbanist-Bold.ttf"),
    UrbanistExtraBold: require("@/assets/fonts/Urbanist-ExtraBold.ttf"),
  })
  return <Stack screenOptions={{headerShown:false}} />;
}
