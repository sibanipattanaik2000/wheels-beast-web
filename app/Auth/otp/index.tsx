import Button from "@/components/Button";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Image } from "expo-image";
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
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);

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

  return (
    <CustomSafeArea>
      <Header type="default" />
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1,gap:32 }}>
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
              Check your email index and input the verification code to verify
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
          />
          <Button
            title="Resend Code"
            variant="outlined"
            color={appColors.main.Primary}
            borderColor={appColors.main.Primary}
          />
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
