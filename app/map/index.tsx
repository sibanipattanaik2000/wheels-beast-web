import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import { appColors } from "@/constants/Color";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Map = () => {
  return (
    <CustomSafeArea>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header type="home" />
        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* left */}
          <View style={{ width: "60%", borderWidth: 2 }}>
            {/* <Map /> */}
          </View>
          {/* right */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
              width: "40%",
              gap: 60,
            }}
          >
            {/* location */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                backgroundColor: appColors.GreyScale[50],
                padding: 16,
                borderRadius: 16,
                width: "100%",
              }}
            >
              <Image
                source={require("@/assets/images/map/map.png")}
                contentFit="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: appColors.GreyScale[400],
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                }}
              >
                Clay Street, San Fransisco
              </Text>
            </View>
            {/* Current Location */}
            <View style={{ width: "100%", gap: 24 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  borderColor: appColors.GreyScale[200],
                  borderWidth: 1,
                  padding: 16,
                  borderRadius: 16,
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Image
                    source={require("@/assets/images/map/loc.png")}
                    contentFit="contain"
                    style={{
                      width: 48,
                      height: 48,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistBold,
                        color: appColors.GreyScale[900],
                      }}
                    >
                      Use my current location
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: appFonts.UrbanistMedium,
                        color: appColors.GreyScale[500],
                      }}
                    >
                      Jackson Street, San Francisco
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("@/assets/images/map/arrow.png")}
                  contentFit="contain"
                  style={{ width: 24, height: 24 }}
                />
              </View>
              <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistBold,
                    fontSize: 14,
                    color: appColors.GreyScale[900],
                  }}
                >
                  50
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    fontSize: 14,
                    color: appColors.GreyScale[500],
                  }}
                >
                  available car in current location
                </Text>
              </View>
              <Button
                title="Continue"
                variant="filled"
                fontWeight="UrbanistBold"
                color={appColors.AdditionalColor.white}
                style={{ backgroundColor: appColors.main.Primary }}
              />
              <Button
                title="Skip"
                variant="outlined"
                fontWeight="UrbanistBold"
                color={appColors.main.Primary}
                borderColor={appColors.main.Primary}
              />
            </View>
          </View>
        </View>
        <Footer/>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default Map;
