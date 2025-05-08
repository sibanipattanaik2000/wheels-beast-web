import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  DimensionValue,
} from "react-native";

interface CarCardProps {
  image: any;
  brand: string;
  price: string;
  fuelType: string;
  brandicon: any;
  type?: "home" | "default";
  engine?: string;
  ratings?: number;
  isLiked?: boolean;
  width?: DimensionValue;
  height?: DimensionValue;
  imght?: DimensionValue;
}

const CarCard = ({
  image,
  brand,
  price,
  fuelType,
  brandicon,
  engine,
  type = "default",
  ratings = 5,
  isLiked,
  width,
  height,
  imght,
}: CarCardProps) => {
  const [liked, setLiked] = useState(isLiked || false);
  const router = useRouter();
  const styles = StyleSheet.create({
    card: {
      width: width || "99%",
      height: height || "99%",
      borderRadius: 20,
      alignSelf:"center",
      padding: 20,
      gap: 8,
      borderWidth:type === "home"?1: 1,
      borderColor: appColors.GreyScale[200],
      boxShadow:"0px 2px 2px rgba(71, 85, 105, 0.25)",
      backgroundColor:
        type === "home"
          ? "#ffffff"
          : appColors.GreyScale[50],
          
    },
  });

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push("/car-details" as Href)}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {type === "home" ? (
          <Text
            style={{
              fontSize: 12,
              fontFamily: appFonts.UrbanistBold,
              color: appColors.AdditionalColor.white,
              backgroundColor: appColors.main.Primary,
              padding: 8,
              gap: 8,
              borderRadius: 6,
              textAlign: "center",
            }}
          >
            Free Test Drive
          </Text>
        ) : (
          <Image
            source={brandicon}
            style={{ height: 18, width: 24, resizeMode: "contain" }}
          />
        )}
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name="heart"
            color={liked ? "red" : appColors.GreyScale[300]}
            size={24}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={image}
        style={{ height: imght || "40%", width: "100%", resizeMode: "contain" }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: appFonts.UrbanistBold,
            color: appColors.GreyScale[900],
          }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {brand}
        </Text>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons name="star" size={12} color={"yellow"} />
          <Text
            style={{
              fontSize: 12,
              fontFamily: appFonts.UrbanistMedium,
              color: appColors.GreyScale[500],
            }}
          >
            {ratings}
          </Text>
        </View>
      </View>
      <View style={{ borderWidth: 1, borderColor: appColors.GreyScale[200] }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {type === "home" && (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Image
                source={require("@/assets/images/carlist/engine.png")}
                style={{ height: 14, width: 14 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: appFonts.UrbanistMedium,
                  color: appColors.GreyScale[500],
                }}
              >
                {engine}
              </Text>
            </View>
          )}
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Image
              source={require("@/assets/images/carlist/gear.png")}
              style={{ height: 14, width: 14 }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: appFonts.UrbanistMedium,
                color: appColors.GreyScale[500],
              }}
            >
              {fuelType}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontFamily: appFonts.UrbanistBold,
            color: appColors.main.Primary,
          }}
        >
          {price}
        </Text>
      </View>

      {type === "home" && (
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderColor: appColors.main.Primary,
            borderRadius: 16,
            borderWidth: 1,
            height: 40,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: appColors.main.Primary,
              fontFamily: appFonts.UrbanistBold,
              textAlign: "center",
            }}
          >
            View April Offers
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default CarCard;
