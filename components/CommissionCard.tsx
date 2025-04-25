import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import Slider from "./slider";

interface card {
  setScrollEnabled?: (enabled: boolean) => void;
  onAmountChange?: (amount: string) => void;
  onDownPaymentChange?: (value: number) => void;
  onTenorChange?: (value: number) => void;
  width?: number;
  label?: string;
  sliderColor?: string;
  vehicle?: {
    price: number;
  };
}

const CommissionCard = ({
  setScrollEnabled,
  onAmountChange,
  onDownPaymentChange,
  onTenorChange,
  width,
  label,
  sliderColor,
  vehicle = { price: 80000 },
}: card) => {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = width || screenWidth - 32;
  
  // State for down payment slider
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const downPaymentAmount = Math.round((downPaymentPercent / 100) * vehicle.price);
  
  // State for loan tenor slider
  const [tenorPercent, setTenorPercent] = useState(50);
  const tenorYears = Math.ceil((tenorPercent / 100) * 10); // Max 10 years

  // Handle down payment slider change
  const handleDownPaymentChange = (value: number): void => {
    setDownPaymentPercent(value);
    
    if (onDownPaymentChange) {
      onDownPaymentChange(value);
    }
  };
  
  // Handle tenor slider change
  const handleTenorChange = (value: number): void => {
    setTenorPercent(value);
    
    if (onTenorChange) {
      onTenorChange(value);
    }
  };

  // Format currency with commas
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };


  const styles = StyleSheet.create({
    text: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900]
    }
  })
  return (
    <View
      style={{
        width: cardWidth/2.8,
        backgroundColor: appColors.AdditionalColor.white,
        borderRadius: 15,
        padding: 15,
        alignSelf: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        overflow: "hidden"
      }}
    >
      {/* Down Payment Section */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: appFonts.UrbanistSemiBold,
            color: appColors.GreyScale[900],
            marginBottom: 15
          }}
        >
          Down payment
        </Text>
        
        <Slider 
          onValueChange={handleDownPaymentChange} 
          sliderbgColor={appColors.GreyScale[300]} 
          fillColor={appColors.main.Primary}
        />
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <Text
            style={styles.text}
          >
            {Math.round(downPaymentPercent)}%
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: appFonts.UrbanistSemiBold,
              color: appColors.GreyScale[900]
            }}
          >
            ${formatCurrency(downPaymentAmount)}
          </Text>
        </View>
      </View>
      
      {/* Divider */}
      <View 
        style={{ 
          height: 1, 
          backgroundColor: appColors.GreyScale[200],
          marginVertical: 5
        }} 
      />
      
      {/* Loan Tenor Section */}
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: appFonts.UrbanistSemiBold,
            color: appColors.GreyScale[900],
            marginBottom: 15
          }}
        >
          Loan tenor
        </Text>
        
        <Slider 
          onValueChange={handleTenorChange} 
          sliderbgColor={appColors.GreyScale[300]} 
          fillColor={appColors.alert.Success}
        />
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: appFonts.UrbanistMedium,
              color: appColors.GreyScale[900]
            }}
          >
            Tenor
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: appFonts.UrbanistSemiBold,
              color: appColors.GreyScale[900]
            }}
          >
            {tenorYears} year{tenorYears !== 1 ? 's' : ''}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommissionCard;
