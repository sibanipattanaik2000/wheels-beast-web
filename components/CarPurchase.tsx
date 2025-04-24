import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface CardPurchaseProps {
  carName: string;
  horsepower: string;
  transmission: string;
  logoSource: any;
  engineSource: any;
  gearboxSource: any;
  carImageSource: any;
}

const CarPurchase: React.FC<CardPurchaseProps> = ({
  carName,
  horsepower,
  transmission,
  logoSource,
  engineSource,
  gearboxSource,
  carImageSource,
}) => {
  const styles = StyleSheet.create({
    leftContainer: {
      width: "100%",
      gap: 18,
    },
    rightContainer: {
      width: "50%",
      position: "absolute",
      right: 0,
    },
    cardImage: {
      width: 37,
      height: 37,
      borderRadius: 10,
    },
    carName: {
      fontSize: 36,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    carPrice: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    detailText: {
      fontSize: 24,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[500],
    },
  });

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 40,
        paddingHorizontal: 30,
        paddingVertical: 70,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.leftContainer}>
        <View style={{ width: "30%", height: 12 }}>
          <Image
            source={logoSource}
            style={{ width: 48, height: 21 }}
            contentFit="contain"
          />
        </View>
        <Text style={styles.carName}>{carName}</Text>
        <View style={styles.carPrice}>
          <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
            <Image source={engineSource} style={{ width: 32, height: 32 }} />
            <Text style={styles.detailText}>{horsepower}</Text>
          </View>
          <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
            <Image source={gearboxSource} style={{ width: 32, height: 32 }} />
            <Text style={styles.detailText}>{transmission}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={carImageSource}
          style={{ width: "100%", height: 248 }}
          contentFit="contain"
        />
      </View>
    </View>
  );
};

export default CarPurchase;
