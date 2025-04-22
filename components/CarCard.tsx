import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface CarCardProps {
  image: any;
  brand: string;
  price: string;
  fuelType: string;
  brandicon: any;
  type?: "home" | "default";
  engine?:string;
  ratings?:number;
  isLiked?: boolean;
}

const CarCard = ({
  image,
  brand,
  price,
  fuelType,
  brandicon,
  engine,
  type = "default",
  ratings= 5,
  isLiked
}: CarCardProps) => {
  const [liked, setLiked] = useState(isLiked || false);

  const styles = StyleSheet.create({
    card: {
      width: 300,
      height: 270,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      gap: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
  });

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {type === "home" ? (
          <Text
            style={{
              fontSize: 12,
              fontFamily: appFonts.UrbanistBold,
              color: appColors.AdditionalColor.white,
              backgroundColor: appColors.main.Primary,
              padding:8,
              gap:8,
              borderRadius: 6,
              textAlign:'center',
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

      <Image source={image} style={{ height: "40%", width: "100%" }} />

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

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginTop:10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {type === "home" && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
             <Image source={require('@/assets/images/carlist/engine.png')} style={{height:14,width:14}}/>
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

        {/* {type === "home" && (
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 4,
              backgroundColor: appColors.main.Primary,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: "white",
                fontFamily: appFonts.UrbanistBold,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        )} */}

       
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
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderColor: appColors.main.Primary,
              borderRadius: 8,
              borderWidth:1
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: appColors.main.Primary,
                fontFamily: appFonts.UrbanistBold,
                textAlign:'center'
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        )} 
   
    </View>
  );
};

export default CarCard;
