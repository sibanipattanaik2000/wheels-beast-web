import { View, Text, useWindowDimensions,Platform, ScrollView, } from "react-native";
import React, { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import TextInput from "./TextInput";
import CustomSlider from "./CustomSlider";

interface card{
  setScrollEnabled?: (enabled: boolean) => void;
  onAmountChange?: (amount: string) => void; 
  onSliderChange?: (value: number) => void;   
  width?: number;
  label?: string;
  sliderColor?: string;
}

const CommissionCard = ({
  setScrollEnabled,
  onAmountChange,
  onSliderChange,
  width,
  label = "Commission",
  sliderColor
}:card) => {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = width || screenWidth - 32;
  const [rawAmount, setRawAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("0");
  // Function to format a string of digits with commas
  const formatWithCommas = (value:string):string => {
    if (!value) return ""; // Handle empty input
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") ;
  };

  // Handler for text input changes
  const handleAmountChange = (text:string):void => {
    // Remove all non-digit characters
    
    const newRawAmount = text.replace(/[^0-9]/g, "");
    // Limit to 15 digits
    if (newRawAmount.length <= 15) {
      setRawAmount(newRawAmount);
      setFormattedAmount(formatWithCommas(newRawAmount));
    }

    if (onAmountChange) {
      onAmountChange(newRawAmount);
    }

  };

  const [sliderValue,setSliderValue]=useState(0)


  const handleSliderChange = (value: number): void => {
    setSliderValue(value);

    // Send sliderValue to parent
    if (onSliderChange) {
      onSliderChange(value);
    }
  };




  return (
    <View
      style={{
        width: cardWidth/3,
        backgroundColor: appColors.AdditionalColor.white,
        marginTop: 40,
        borderRadius: 15,
        gap: 12,
        padding: 15,
        alignSelf: "center",
        elevation:3,
        shadowColor:"#000",
        shadowOffset:{width:0, height:1},
        shadowOpacity:0.2,
        shadowRadius:2
      }}
    >
     

      {/* Slider */}
      <View style={{ marginBottom: 25 }}>
        <CustomSlider 
         onValueChange={handleSliderChange} 
          label={label} 
          sliderWidth={cardWidth/4}
          knobColor={sliderColor}
          progressColor={sliderColor}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: appFonts.UrbanistMedium,
              color:appColors.GreyScale[900]
            }}
          >
            {Math.round(sliderValue)}%
          </Text>
          
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: appFonts.UrbanistMedium,
              color:appColors.GreyScale[900],
              textAlign:"right"
            }}
          >
            {100 - Math.round(sliderValue)}%
          </Text>
       
        </View>
      </View>
    </View>
  );
};

export default CommissionCard;
