import Button from "@/components/Button";
import CarCard from "@/components/CarCard";
import CustomSafeArea from "@/components/CustomSafeArea";
import SearchBar from "@/components/Searchbar";
import { SidebarComponent } from "@/components/Sidebar";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // for arrow icon
import Search from "@/components/Searchbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Href, useRouter } from "expo-router";

const carData = [
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/carlist/blkcar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/carlist/redcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/carlist/blkcar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/carlist/redcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/carlist/blkcar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/carlist/redcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/brand/bluecar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
  {
    image: require("@/assets/images/carlist/blkcar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
  },
  {
    image: require("@/assets/images/carlist/redcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
  },
];

const CarListPage = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { height, width } = useWindowDimensions();
  const [carCount, setCarCount] = useState(120); // initial count
  const router = useRouter();
  const togglePrivacy = () => {
    setShowPrivacy((prev) => !prev);
  };
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", flex: 1 , paddingTop:5, backgroundColor:appColors.GreyScale[100]}}>
          <View style={{ width:width/4 }}>
            <SidebarComponent />
          </View>

          <View
            style={{
              paddingHorizontal: 16,
              backgroundColor: appColors.GreyScale[100],
              flex: 1,
              paddingRight:70,
              paddingLeft:34
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // margin: 20,
                alignItems:"center",
                marginBottom:28,
                marginTop:52
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                  // borderWidth:1
                }}
              >
                Available Cars
              </Text>
              <Search width={"40%"}  borderRadius={16} height={56}/>
            </View>

            <ScrollView
              contentContainerStyle={{
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                // borderWidth:1,
                marginTop:15,
                rowGap:36
              }}
              showsHorizontalScrollIndicator={false}
            >
              {carData.map((car, index) => (
                <View key={index} style={{ width: width / 4.8,justifyContent:"center", height: width / 4.8 - 30 }}>
                  <CarCard key={index} {...car} />
                </View>
              ))}
              <View
                style={{
                  position: "relative",
                  width: "100%",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <View style={{ width: "40%" }}>
                  <Button
                    title="Show More Car"
                    variant="filled"
                    style={{ backgroundColor: appColors.main.Primary }}
                    color={appColors.AdditionalColor.white}
                    onPress={() => router.push("/searchcar" as Href)}
                  />
                </View>
                <Text
                  style={{
                    position: "absolute",
                    right: 0,
                    alignSelf: "flex-end",
                    fontSize: 20,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[500],
                    top: 20,
                  }}
                >
                  {carCount} Car
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default CarListPage;
