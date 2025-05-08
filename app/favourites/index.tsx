import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react"; // Added useState for potential dynamic data
import CustomSafeArea from "@/components/CustomSafeArea";
import { appColors } from "@/constants/Color";
import Header from "@/components/Header";
import appFonts from "@/constants/Font";
import BlogCard from "@/components/BlogCard";
import ExploreBrand from "@/components/ExploreBrand";
import Button from "@/components/Button";
import CarCard from "@/components/CarCard";
import Sortby from "@/components/Sortby";
import { Image } from "expo-image";
import { Href, useRouter } from "expo-router";

const carData = [
  {
    image: require("@/assets/images/carlist/blkcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/carlist/redcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/brand/whitecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/carlist/blkcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/carlist/redcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    isLiked: true,
  },
  {
    image: require("@/assets/images/brand/whitecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
    isLiked: true,
  },
];

const Favourites = () => {
  // Filter cars that are liked
  const favouriteCars = carData.filter((car) => car.isLiked);
  const router = useRouter(); // Initialize router for navigation
  const count = 12;
  const {height  , width } =useWindowDimensions();
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 ,backgroundColor:favouriteCars.length > 0 ? appColors.GreyScale[100] : "white"}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 70,
            paddingVertical: 47,
            
          }}
        >
        
            {favouriteCars.length > 0 ? (
              <View style={{gap:36, marginTop:10}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between",}}>
              <Text
                style={{
                  fontSize: 34,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                }}
              >
               {count} Favourite Cars
              </Text>
              <Sortby />
            </View>
               
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <ScrollView
                    contentContainerStyle={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      rowGap:30
                    }}
                    showsHorizontalScrollIndicator={false}
                  >
                    {favouriteCars.map((car, index) => (
                      <View key={index} style={{width:width/4.8, height:(width/4.8)-30}}>
                      <CarCard  {...car} isLiked={true}  />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            ) : (
              <View style={{gap:48,alignSelf:"center"}}>
                <Image source={require("@/assets/images/favourites/empty.png")} style={{width:190,height:190,alignSelf:"center"}}/>
                <View style={{gap:16}}>
                <Text style={{fontSize:36,fontFamily:appFonts.UrbanistBold,color:appColors.GreyScale[900],alignSelf:"center"}}>No favorite yet!</Text>
                <Text style={{fontSize:24,fontFamily:appFonts.UrbanistRegular,color:appColors.GreyScale[500],alignSelf:"center"}}>Dis morbi neque elementum quis eget sit facilisis hac Nunc tempus fames.</Text>
                </View>
                <Button variant="filled" style={{backgroundColor:appColors.main.Primary}} title="Search Car" color={appColors.AdditionalColor.white} onPress={()=>router.push('/searchcar' as Href)}/>
              </View>
            )}
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};



export default Favourites;