import Button from "@/components/Button";
import CarCard from "@/components/CarCard";
import CustomSafeArea from "@/components/CustomSafeArea";
import SearchBar from "@/components/Searchbar";
import { SidebarComponent } from "@/components/Sidebar";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Image } from "expo-image";
import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // for arrow icon
import Search from "@/components/Searchbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const carData = [
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
];

const CarListPage = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const togglePrivacy = () => {
    setShowPrivacy((prev) => !prev);
  };
  return (
    <CustomSafeArea>
     <Header type="home"/>
    <ScrollView style={{flex:1}} showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ width: "20%" }}>
          <SidebarComponent />
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            backgroundColor: appColors.GreyScale[100],
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 30,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.GreyScale[900],
              }}
            >
              Available Cars
            </Text>
            <Search width={"40%"} />
          </View>

          <ScrollView
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent:'space-between',
              paddingHorizontal: 20,
              gap: 50,
            }}
            showsHorizontalScrollIndicator={false}
          >
            {carData.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
            <View style={{ width: "100%", marginTop: 60, marginBottom: 30 ,alignSelf:'center'}}>
              <Button
                title="Show More Car"
                variant="filled"
                fontWeight="UrbanistBold"
                color={appColors.AdditionalColor.white}
                style={{ backgroundColor: appColors.main.Primary,alignSelf:'center' }}
                width={'30%'}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <Footer/>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default CarListPage;
