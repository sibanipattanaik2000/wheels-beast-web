import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import React from "react";
import { View, Text, Image } from "react-native";
 
interface BrandItemProps {
  name: string;
  icon: any;
}
 
const BrandItem = ({ name, icon }: BrandItemProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        borderWidth: 1,
         borderColor: appColors.GreyScale[200],   
        padding: 16,
        gap: 12,
        width: 130,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          backgroundColor: appColors.GreyScale[900],
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          width: 40,
        }}
      >
        <Image
          source={icon}
          style={{ height: 20, width: 20, resizeMode: "contain" }}
        />
      </View>
      <Text
        style={{
          marginTop: 8,
          fontSize: 14, 
          fontFamily: appFonts.UrbanistBold,
          color: appColors.GreyScale[900],
        }}
      >
        {name}
      </Text>
    </View>
  );
};
 
export default BrandItem;