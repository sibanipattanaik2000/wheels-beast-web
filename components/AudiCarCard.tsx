import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";

interface AudiCarCardProps {
  image: any;
  model: string;
  price: string;
  specs: {
    engineSize: string;
    transmission: string;
    horsePower: string;
  };
  rating: number;
  logoSource: any;
}

const AudiCarCard = ({
  image,
  model,
  price,
  specs,
  rating,
  logoSource,
}: AudiCarCardProps) => {
  const styles = StyleSheet.create({
    container: {
      width: "47%",
    },
    card: {
      backgroundColor: "white",
      borderRadius: 30,
      padding: 24,
      gap: 21,
      shadowColor: appColors.GreyScale[400],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
      width: "100%",
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      width: 50,
      height: 15,
      resizeMode: "contain",
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    ratingValue: {
      fontFamily: appFonts.UrbanistSemiBold,
      fontSize: 18,
      color: appColors.GreyScale[500],
    },
    ratingText: {
      color: "#FACC15",
      fontSize: 14,
    },
    carImage: {
      width: "40%",
      height: 130,
      resizeMode: "contain",
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: "contain",
    },
    modelName: {
      fontFamily: appFonts.UrbanistBold,
      fontSize: 26,
      color: appColors.GreyScale[900],
    },
    specContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    specItem: {
      alignItems: "center",
      flexDirection: "row",
      gap: 5,
    },
    specValue: {
      fontFamily: appFonts.UrbanistSemiBold,
      fontSize: 14,
      color: appColors.GreyScale[800],
    },
    specLabel: {
      fontFamily: appFonts.UrbanistMedium,
      fontSize: 12,
      color: appColors.GreyScale[500],
    },
    price: {
      fontFamily: appFonts.UrbanistBold,
      fontSize: 16,
      color: appColors.main.Primary,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image source={image} style={styles.carImage} />
          <View style={{ width: "60%", gap: 10 }}>
            <Text style={styles.modelName}>{model}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image source={logoSource} style={styles.logo} />
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingValue}>{rating}</Text>
                <Text style={styles.ratingText}>★</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{borderWidth:1.5,borderColor:appColors.GreyScale[200]}}/>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.specItem}>
            <Image
              source={require("@/assets/images/carlist/engine.png")}
              style={styles.icon}
            />
            <Text style={styles.specLabel}>{specs.horsePower}</Text>
          </View>
          <View style={styles.specItem}>
            <Image
              source={require("@/assets/images/carlist/gear.png")}
              style={styles.icon}
            />
            <Text style={styles.specLabel}>{specs.transmission}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default AudiCarCard;
