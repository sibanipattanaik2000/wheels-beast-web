import Button from "@/components/Button";
import CustomSafeArea from "@/components/CustomSafeArea";
import Dots from "@/components/Dots";
import { postRequest } from "@/constants/apiService";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Image } from "expo-image";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";

const OTPInput = () => {
  const {otpid} =useLocalSearchParams()
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // For slider
  const router = useRouter();
  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 3) {
        inputs.current[index + 1]?.focus();
      }
    } else if (text === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  // Handle index change from Dots component
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const hanldeContinue =async()=>{
    const postData= {
      step:2,
      otp:otp.join(''),
      otpid:otpid,

    }
    const response = await postRequest('/signup',postData)
    if(response){
      console.log(response);
      
    }
  }

  return (
    <CustomSafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          {/* Left side with the slider */}
          <View style={{ width: "50%" }}>
            <Dots onIndexChange={handleIndexChange} />
          </View>
          
          {/* Right side with the form */}
          <View style={{ width: "50%", paddingHorizontal: 64, paddingTop: 16 }}>
            {/* Logo */}
            <View style={{ flexDirection: "row", gap: 7, alignItems: "center", marginBottom: 40 }}>
              <Image
                source={require("@/assets/images/Signup/wheel.png")}
                style={{ height: 40, width: 40 }}
              />
              <Text
                style={{
                  fontSize: 24,
                  color: appColors.main.SecondaryBase,
                  fontFamily: appFonts.UrbanistBold,
                }}
              >
                WheelsBeast
              </Text>
            </View>
            
            {/* Content */}
            <View style={{ paddingVertical: 40, gap: 32 }}>
              <Image
                source={require("@/assets/images/Signup/EmptyState.png")}
                style={{ height: 96, width: 96, alignSelf: "center" }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 48,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                    textAlign: "center",
                  }}
                >
                  Almost there !
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: appFonts.UrbanistRegular,
                    color: appColors.GreyScale[500],
                    textAlign: "center",
                  }}
                >
                  Check your email inbox and input the verification code to verify
                  your account
                </Text>
              </View>
              <View style={styles.container}>
                {otp.map((value, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    value={value}
                    onChangeText={(text) => handleChange(text, index)}
                    maxLength={1}
                    style={styles.input}
                    keyboardType="number-pad"
                    returnKeyType="next"
                  />
                ))}
              </View>
              <Button
                title="Continue"
                variant="filled"
                color={appColors.AdditionalColor.white}
                style={{ backgroundColor: appColors.main.Primary }}
                onPress={() => hanldeContinue()}
              />
              <Button
                title="Resend Code"
                variant="outlined"
                color={appColors.main.Primary}
                borderColor={appColors.main.Primary}
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
  },
});

export default OTPInput;
