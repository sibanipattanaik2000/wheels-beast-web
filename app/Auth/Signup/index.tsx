import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image,
    useWindowDimensions,
    Pressable,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
  import CustomSafeArea from "@/components/CustomSafeArea";
  import { appColors } from "@/constants/Color";
  import TextInput from "@/components/TextInput";
  import appFonts from "@/constants/Font";
  import Button from "@/components/Button";
  import { Colors } from "react-native/Libraries/NewAppScreen";
  import Dots from "@/components/Dots";
  
  const Signup = () => {
    const { width, height } = useWindowDimensions();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName,setuserName] = useState(""); // For sign-up
    const [currentIndex, setCurrentIndex] = useState(0); // Track slide index
  
    const styles = StyleSheet.create({
      icon: {
        width: 24,
        height: 24,
      },
      text: {
        fontSize: 16,
        color: appColors.GreyScale[900],
        fontFamily: appFonts.UrbanistMedium,
        alignSelf: "center",
      },
      btn: {
        borderWidth: 1,
        borderColor: appColors.GreyScale[200],
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 10,
        width: "100%",
      },
    });
  
    // Handle index change from Dots component
    const handleIndexChange = (index: number) => {
      setCurrentIndex(index);
    };
  
    return (
      <CustomSafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: "100%", flexDirection: "row" }}>
            {/* left */}
            <View style={{ width: "50%" }}>
              <Dots onIndexChange={handleIndexChange} />
            </View>
            {/* right */}
            <View style={{ width: "50%", paddingHorizontal: 64, paddingTop: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 7,
                  alignItems: "center",
                }}
              >
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
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 64,
                  paddingVertical: 50,
                }}
              >
                <View style={{ gap: 24 }}>
                  {currentIndex < 2 ? (
                    <>
                      <Text
                        style={{
                          fontSize: 48,
                          color: appColors.main.SecondaryBase,
                          fontFamily: appFonts.UrbanistBold,
                        }}
                      >
                        Sign in to WheelsBeast
                      </Text>
                      <Text
                        style={{
                          fontSize: 24,
                          color: appColors.GreyScale[500],
                          fontFamily: appFonts.UrbanistMedium,
                          textAlign: "center",
                        }}
                      >
                        Welcome back! Please enter your details.
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text
                        style={{
                          fontSize: 48,
                          color: appColors.main.SecondaryBase,
                          fontFamily: appFonts.UrbanistBold,
                        }}
                      >
                        Sign Up 
                      </Text>
                    
                    </>
                  )}
                </View>
                {/* TextInputs */}
                <View style={{ width: "100%", marginTop: 20 }}>
                {currentIndex === 2 && (
                    <TextInput
                      placeholder="Full Name"
                      value={userName}
                      onChangeText={setuserName}
                      icon="user"
                    />
                  )}
                  <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    icon="email"
                  />
                  <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    icon="password"
                    secureTextEntry
                  />
                  
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    gap: 4,
                    marginTop: 12,
                    marginBottom: 24,
                  }}
                >
                  {currentIndex < 2 ? (
                    <>
                      <Text
                        style={{
                          fontSize: 16,
                          color: appColors.GreyScale[900],
                          fontFamily: appFonts.UrbanistBold,
                        }}
                      >
                        Forgot Password?
                      </Text>
                      <Text
                        style={{
                          color: appColors.main.Primary,
                          fontSize: 16,
                          fontFamily: appFonts.UrbanistBold,
                        }}
                      >
                        Reset it
                      </Text>
                    </>
                  ) : (
                    <>
                    <Text
                      style={{
                        fontSize: 16,
                        color: appColors.GreyScale[500],
                        fontFamily: appFonts.UrbanistBold,
                      }}
                    >
                    By signing up, you agree to our
                    </Text>
                    <Text
                      style={{
                        color: appColors.main.Primary,
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistBold,
                      }}
                    >
                     Terms of Service
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: appColors.GreyScale[500],
                        fontFamily: appFonts.UrbanistBold,
                      }}
                    >
                   and
                    </Text>
                    <Text
                      style={{
                        color: appColors.main.Primary,
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistBold,
                      }}
                    >
                    Privacy Policy.
                    </Text>
                  </> // Empty view to maintain layout spacing
                  )}
                </View>
                {/* add button */}
                <View style={{ gap: 16, width: "100%" }}>
                  {currentIndex < 2 ? (
                    <>
                      <Button
                        title="Sign In"
                        variant="filled"
                        fontWeight="UrbanistBold"
                        color={appColors.AdditionalColor.white}
                        style={{ backgroundColor: "blue" }}
                      />
                      <Button
                        title="Login with Google"
                        icon="google"
                        variant="outlined"
                        fontWeight="UrbanistBold"
                      />
                      <Button
                        title="Login with Apple"
                        icon="apple"
                        variant="outlined"
                        fontWeight="UrbanistBold"
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        title="Sign Up"
                        variant="filled"
                        fontWeight="UrbanistBold"
                        color={appColors.AdditionalColor.white}
                        style={{ backgroundColor: "blue" }}
                      />
                      <Button
                        title="Sign up with Google"
                        icon="google"
                        variant="outlined"
                        fontWeight="UrbanistBold"
                      />
                      <Button
                        title="Sign up with Apple"
                        icon="apple"
                        variant="outlined"
                        fontWeight="UrbanistBold"
                      />
                    </>
                  )}
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 24,
                  }}
                >
                  {currentIndex < 2 ? (
                    <>
                      <Text
                        style={{
                          fontSize: 16,
                          color: appColors.GreyScale[900],
                          fontFamily: appFonts.UrbanistBold,
                        }}
                      >
                        Don’t have an account?
                      </Text>
                      <Text
                        style={{
                          color: appColors.main.Primary,
                          fontSize: 16,
                          fontFamily: appFonts.UrbanistBold,
                          marginLeft: 4,
                        }}
                      >
                        Sign Up
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text
                        style={{
                          fontSize: 16,
                          color: appColors.GreyScale[900],
                          fontFamily: appFonts.UrbanistBold,
                        }}
                      >
                        Already have an account?
                      </Text>
                      <Text
                        style={{
                          color: appColors.main.Primary,
                          fontSize: 16,
                          fontFamily: appFonts.UrbanistBold,
                          marginLeft: 4,
                        }}
                      >
                        Sign In
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </CustomSafeArea>
    );
  };
  
  export default Signup;