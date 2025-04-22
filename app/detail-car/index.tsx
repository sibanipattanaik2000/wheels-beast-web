import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import Button from "@/components/Button";
import CustomSlider from "@/components/CustomSlider";
import CommissionCard from "@/components/CommissionCard";

const productDetails = [
  { label: "Product Type", value: "Audi Q7 50 Quattro" },
  { label: "Fuel Type", value: "Petrol" },
  { label: "Transmission", value: "Automatic" },
];
const DetailCar = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState(0);
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: "40%",
            alignSelf: "center",
            backgroundColor: "#F1F5F9",
            padding: 36,
            gap: 24,
            borderRadius: 10,
            marginVertical: 64,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: appFonts.UrbanistBold,
              color: appColors.GreyScale[900],
              alignSelf: "center",
            }}
          >
            Credit Stimulation
          </Text>

          {/* <View style={{backgroundColor:appColors.AdditionalColor.white,padding:20,borderRadius:10 ,width:"40%"}}> */}
          <CommissionCard
            setScrollEnabled={setScrollEnabled}
            onAmountChange={(amount) => setAmount(amount)}
            onSliderChange={(e) => setPercentage(e)}
            label="Down Payment"
          />
          {/* </View> */}
          <View style={{ gap: 16 }}>
            {productDetails.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[500],
                  }}
                >
                  {item.label}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  {item.value}
                </Text>
              </View>
            ))}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 50,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: appFonts.UrbanistMedium,
                  color: appColors.GreyScale[500],
                }}
              >
                Est. Monthly payment
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.main.Primary,
                }}
              >
                $970.00
              </Text>
            </View>
            <Button
              title="Apply For Financing"
              variant="filled"
              style={{ backgroundColor: appColors.main.Primary }}
              color={appColors.AdditionalColor.white}
            />
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default DetailCar;
