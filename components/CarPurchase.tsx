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
  petrolSource?: any; // NEW prop for petrol icon
  isForSale?: boolean;
}

const CarPurchase: React.FC<CardPurchaseProps> = ({
  carName,
  horsepower,
  transmission,
  logoSource,
  engineSource,
  gearboxSource,
  carImageSource,
  petrolSource,
  isForSale = false,
}) => {
  const styles = StyleSheet.create({
    leftContainer: {
      gap: 18,
      width: isForSale ? "100%" : "50%",
      alignItems: isForSale ? "center" : "flex-start",
    },
    rightContainer: {
      width: isForSale ? "100%" : "50%",
      ...(isForSale
        ? { alignItems: "center", marginTop: 40 }
        : { position: "absolute", right: 0 }),
    },
    carName: {
      fontSize: 36,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      textAlign: isForSale ? "center" : "left",
    },
    carPrice: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: isForSale ? "center" : "flex-start",
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
        flexDirection: isForSale ? "column" : "row",
        alignItems: "center",
        gap: 40,
        paddingHorizontal: 30,
        paddingVertical: 70,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.leftContainer}>
        <View style={{ width: 48, height: 21 }}>
          <Image
            source={logoSource}
            style={{ width: 48, height: 21, tintColor: appColors.main.Primary }}
            contentFit="contain"
          />
        </View>
        <Text style={styles.carName}>{carName}</Text>
        <View style={styles.carPrice}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={engineSource} style={{ width: 32, height: 32 }} />
            <Text style={styles.detailText}>{horsepower}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image source={gearboxSource} style={{ width: 32, height: 32 }} />
            <Text style={styles.detailText}>{transmission}</Text>
          </View>
          {isForSale && petrolSource && (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image source={petrolSource} style={{ width: 32, height: 32 }} />
              <Text style={styles.detailText}>Petrol</Text>
            </View>
          )}
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
