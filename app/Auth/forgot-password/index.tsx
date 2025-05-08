import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, useRouter } from "expo-router";
import Button from "@/components/Button";
import appFonts from "@/constants/Font";
import CustomSafeArea from "@/components/CustomSafeArea";
import TextInput from "@/components/TextInput";
import { appColors } from "@/constants/Color";
import Dots from "@/components/Dots";
import Header from "@/components/Header";

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // For slider

  const handleBack = () => {
    router.back();
  };

  const handleResetPassword = () => {
    // Logic to send reset password email
    // Then redirect to login or confirmation page
    router.push("/Auth/otp" as Href);
  };

  const handleReturnToSignIn = () => {
    router.push("/Auth/Signup" as Href);
  };

  // Handle index change from Dots component
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CustomSafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          {/* Left side with the slider */}
          <View style={{ width: "50%" }}>
            <Dots onIndexChange={handleIndexChange} />
          </View>
          
          {/* Right side with the form */}
          <View style={{ width: "50%", paddingHorizontal: 64}}>
            {/* Logo */}
          <Header type="default"/>
            
            {/* Content */}
            <View style={{ paddingVertical: 90, gap: 32,paddingHorizontal:56 }}>
              {/* Forgot Password icon */}
              <View style={styles.iconContainer}>
                <Image
                  source={require("@/assets/images/Signup/EmptyState.png")}
                  resizeMode="contain"
                  style={{ height: 120, width: 120 }}
                />
              </View>

              {/* Header */}
              <Text style={{fontSize:48,fontFamily:appFonts.UrbanistBold,textAlign:"center",color:appColors.GreyScale[900]}}>Can't sign in?</Text>
              <Text style={{fontSize:24,fontFamily:appFonts.UrbanistMedium,textAlign:"center",color:appColors.GreyScale[500]}}>
                Enter the email associated with your account, and WheelsBeast will
                send you a link to reset your password.
              </Text>

              {/* Email Input */}
              <View style={styles.form}>
                <TextInput
                  icon="email"
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              {/* Action buttons */}
              <Button
                title="Reset Password"
                variant="filled"
                onPress={() => router.push("/Auth/reset-password" as any)}
                style={{ backgroundColor: appColors.main.Primary }}
                color={appColors.AdditionalColor.white}
              />
              <Button
                title="Return to Sign In"
                variant="outlined"
                borderColor={appColors.main.Primary}
                color={appColors.main.Primary}
                onPress={() => router.push("/Auth/SignIn" as any)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
    padding: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  backIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:64,
    paddingVertical:74,
    gap:32
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  lockIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  lockIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    textAlign: "center",
    marginBottom: 32,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
  },
  buttonsContainer: {
    width: "100%",
  },
  resetButton: {
    marginBottom: 16,
  },
  returnButton: {},
});

export default ForgotPasswordScreen;
