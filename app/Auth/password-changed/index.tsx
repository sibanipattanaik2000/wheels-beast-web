import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Dots from "@/components/Dots";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import { Href, useRouter } from "expo-router";
import Button from "@/components/Button";
import Header from "@/components/Header";

const PasswordChanged = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // For slider
  const router = useRouter();
  // Handle index change from Dots component
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CustomSafeArea>
      <View style={styles.container}>
        {/* Left side with the slider */}
        <View style={styles.leftContainer}>
          <Dots onIndexChange={handleIndexChange} />
        </View>

        {/* Right side with the form */}
        <View style={styles.rightContainer}>
          {/* Logo */}
         <Header type="default"/>
          
          <View style={styles.contentContainer}>
            <Image
              source={require("@/assets/images/Signup/EmptyState.png")}
              style={styles.successImage}
            />
            <Text style={styles.title}>Password Changed</Text>
            <Text style={styles.description}>
              Awesome you're successfully updated your password
            </Text>
            <Button
              title="Return To Sign in"
              onPress={() => router.push("/Auth/SignIn" as Href)}
              variant="filled"
              color={appColors.AdditionalColor.white}
              style={{ backgroundColor: appColors.main.Primary }}
            />
          </View>
        </View>
      </View>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
  },
  leftContainer: {
    width: "50%",
    height: "100%",
  },
  rightContainer: {
    width: "50%",
    height: "100%",
    paddingHorizontal: 64, 
    paddingTop: 16,
  },
  logoContainer: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    marginBottom: 40,
  },
  logoImage: {
    height: 40,
    width: 40,
  },
  logoText: {
    fontSize: 24,
    color: appColors.main.SecondaryBase,
    fontFamily: appFonts.UrbanistBold,
  },
  contentContainer: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    paddingVertical: 40, 
    paddingHorizontal:56
  },
  successImage: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  title: {
    fontSize: 48,
    fontFamily: appFonts.UrbanistBold,
    textAlign: "center",
    color: appColors.GreyScale[900],
  },
  description: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistMedium,
    textAlign: "center",
    color: appColors.GreyScale[500],
    maxWidth: "80%",
  },
});

export default PasswordChanged;

