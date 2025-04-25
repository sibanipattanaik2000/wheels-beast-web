import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import Button from "@/components/Button";
import CommissionCard from "@/components/CommissionCard";
import Footer from "@/components/Footer";

const productDetails = [
  { label: "Product Type", value: "Audi Q7 50 Quattro" },
  { label: "Fuel Type", value: "Petrol" },
  { label: "Transmission", value: "Automatic" },
];

const DetailCar = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const [tenorYears, setTenorYears] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState("970.00");
  
  // Vehicle price for calculation
  const vehiclePrice = 80000;
  
  // Calculate monthly payment when down payment or tenor changes
  useEffect(() => {
    // Simple loan calculation
    const downPayment = (downPaymentPercent / 100) * vehiclePrice;
    const loanAmount = vehiclePrice - downPayment;
    const interestRate = 0.05; // 5% annual interest
    const monthlyRate = interestRate / 12;
    const numPayments = tenorYears * 12;
    
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    
    setMonthlyPayment(payment.toFixed(2));
  }, [downPaymentPercent, tenorYears, vehiclePrice]);
  
  // Format currency with commas
  const formatCurrency = (amount: string): string => {
    return Number(amount).toLocaleString('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: "90%",
            maxWidth: 600,
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
            Credit Simulation
          </Text>

          <CommissionCard
            setScrollEnabled={setScrollEnabled}
            onDownPaymentChange={(value) => setDownPaymentPercent(value)}
            onTenorChange={(value) => setTenorYears(Math.ceil((value / 100) * 10))}
            vehicle={{ price: vehiclePrice }}
          />
          
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
                paddingVertical: 30,
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
                ${formatCurrency(monthlyPayment)}
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
        <Footer/>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default DetailCar;
