import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
 
export type ButtonProps = {
  variant?: "filled" | "outlined";
  color?: "primary1"| "primary2" | "secondary"|string;
  title: string;
  onPress?: () => void;
  icon?: "google" | "apple";
  style?: any;
  titleColor?: string;
  borderColor?: string;
  lightLogo?: boolean;
  fontWeight?: "UrbanistBold" | "UrbanistSemiBold" | "UrbanistMedium" | "UrbanistRegular";
  disabled?: boolean;
  width?: number | string; // ✅ Add width prop
  fontSize?: number ; // ✅ Add fontSize prop
};
 
const Button = ({
  variant = "filled",
  color = "primary1",
  titleColor,
  title,
  onPress,
  icon,
  style,
  borderColor,
  lightLogo,
  fontWeight,
  width = "100%",
  disabled = false,
  fontSize 

}: ButtonProps) => {

  
 
 
  const renderIcon = () => {
    if (icon === "google") {
      return (
        <Image
          source={require('@/assets/images/Signup/google.png')}
          style={styles.iconContainer}
        />
      );
    }
    if (icon === "apple") {
      return (
        <Image
          source={require('@/assets/images/Signup/apple.png')}
          style={styles.iconContainer}
        />
      );
    }
    return null;
  };
 
  const styles = StyleSheet.create({
    button: {
      height: 56,
      borderRadius: 16,
      justifyContent: icon ? "flex-start" : "center",
      alignItems: "center",
      paddingHorizontal: 20,
      marginVertical: 8,
      flexDirection: "row",
      opacity: disabled ? 0.6 : 1,
      width:'100%'
    },
    text: {
      fontSize: 16,
      fontFamily: fontWeight ? appFonts[fontWeight] : appFonts.UrbanistSemiBold,
      color: appColors.GreyScale[900] || color,
    },
    iconContainer: {
      marginRight: 10,
      width: 24,
      height: 24,
    },
    googleIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    appleIcon: {
      fontSize: 20,
    },
  });
 
  return (
    <TouchableOpacity
    style={[
        styles.button,
        {
          backgroundColor:
            icon === "apple" ? "#fff" :
            variant === "filled" ? color :
            "transparent",
          borderColor: variant === "outlined" ? borderColor : borderColor,
          borderWidth: variant === "outlined" ? 1 : 0,
          width:width
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={{ flexDirection: "row", alignItems: "center", width:"65%", justifyContent:icon?"space-between":"center" }}>
        {renderIcon()}
        <Text style={[styles.text, {fontSize:fontSize|| 16, color: color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
 
export default Button;
 
 