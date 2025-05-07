import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SidebarComponent } from "@/components/Sidebar";
import SearchBar from "@/components/Searchbar";
import AudiCarCard from "@/components/AudiCarCard";
import BrandCategoryCard from "@/components/BrandCategoryCard";
import Button from "@/components/Button";
import { Href, useRouter } from "expo-router";

const audiCars = [
  {
    id: "a1",
    model: "Q3 Sportback",
    price: "$62,000.00",
    specs: {
      engineSize: "2.0 TDI",
      transmission: "8 Automatic",
      horsePower: "245 HP",
    },
    rating: 4.8,
    logoSource: require("@/assets/images/carlist/Audi.png"),
    image: require("@/assets/images/brand/whitecar.png"),
  },
  {
    id: "a2",
    model: "A8 Quattro",
    price: "$174,037.11",
    specs: {
      engineSize: "3.0 TDI",
      transmission: "8 Automatic",
      horsePower: "340 HP",
    },
    rating: 4.9,
    logoSource: require("@/assets/images/carlist/Audi.png"),
    image: require("@/assets/images/brand/whitecar.png"),
  },
  {
    id: "a3",
    model: "A7 Sportback",
    price: "$69,000.00",
    specs: {
      engineSize: "2.0 TDI",
      transmission: "8 Automatic",
      horsePower: "252 HP",
    },
    rating: 4.8,
    logoSource: require("@/assets/images/carlist/Audi.png"),
    image: require("@/assets/images/brand/whitecar.png"),
  },
  {
    id: "a4",
    model: "A8 Quattro",
    price: "$174,037.11",
    specs: {
      engineSize: "3.0 TDI",
      transmission: "8 Automatic",
      horsePower: "340 HP",
    },
    rating: 4.7,
    logoSource: require("@/assets/images/carlist/Audi.png"),
    image: require("@/assets/images/brand/whitecar.png"),
  },
  {
    id: "a5",
    model: "Q3 Sportback",
    price: "$62,000.00",
    specs: {
      engineSize: "2.0 TDI",
      transmission: "8 Automatic",
      horsePower: "245 HP",
    },
    rating: 4.8,
    logoSource: require("@/assets/images/carlist/Audi.png"),
    image: require("@/assets/images/brand/whitecar.png"),
  },
  {
    id: "a6",
    model: "A8 Quattro",
    price: "$174,037.11",
    specs: {
      engineSize: "3.0 TDI",
      transmission: "8 Automatic",
      horsePower: "340 HP",
    },
    rating: 4.9,
    logoSource: require("@/assets/images/carlist/Audi.png"),
    image: require("@/assets/images/brand/whitecar.png"),
  },
];

const brandCategories = [
  {
    id: "b1",
    name: "RS Coupe",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
  {
    id: "b2",
    name: "RS Coupe",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
  {
    id: "b3",
    name: "All Models",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
  {
    id: "b4",
    name: "RS Coupe",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
  {
    id: "b5",
    name: "A7 Sportback",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
  {
    id: "b6",
    name: "Q3 Sportback",
    image: require("@/assets/images/brand/bluecar.png"),
  },
  {
    id: "b7",
    name: "A8 Quattro",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
  {
    id: "b8",
    name: "RS Coupe",
    image: require("@/assets/images/brand/bluecar.png"),
    units: "100",
  },
];
const BrandCar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Audi");
  const router = useRouter();
  const [carCount, setCarCount] = useState(35); // initial count
  const {height, width }= useWindowDimensions();


  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    mainContainer: {
      flexDirection: "row",
      flex: 1,
    },
    sidebar: {
      width: width/4,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: appColors.GreyScale[200],
      paddingVertical: 47,
      paddingLeft: 34,
      paddingRight: 70,
      gap: 36,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    pageTitle: {
      fontSize: 32,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    categoriesContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 36,
      width: "100%",
    },
    sectionTitleContainer: {
      marginTop: 30,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 32,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    carsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
      // gap: 50,
      rowGap:36,
    },
  });
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          <View style={styles.sidebar}>
            <SidebarComponent />
          </View>

          <View style={styles.contentContainer}>
            {/* Brands title and search */}
            <View style={styles.titleContainer}>
              <Text style={styles.sectionTitle}>Brands</Text>
              <SearchBar
                width="40%"
                placeholder="Search Brand or model"
                borderRadius={16}
              />
            </View>

            {/* Brand categories */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContainer}
            >
              {brandCategories.map((category) => (
                <View style={{width:width/7.2, height:(width/7.2)-5,justifyContent:"center"}}>
                <BrandCategoryCard
                  key={category.id}
                  name={category.name}
                  image={category.image}
                  units={category.units}
                  isSelected={selectedCategory === category.id}
                  onPress={() => setSelectedCategory(category.id)}
                />
                </View>
              ))}
            </ScrollView>

            {/* Available Cars title */}

            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Available Cars Audi</Text>
            </View>

            {/* Cars grid */}
            <View style={styles.carsContainer}>
              {audiCars.map((car) => (
                <AudiCarCard
                  key={car.id}
                  model={car.model}
                  price={car.price}
                  specs={car.specs}
                  image={car.image}
                  logoSource={car.logoSource}
                  rating={car.rating}
                />
              ))}
            </View>
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
                  alignSelf:"flex-end",
                  fontSize: 20,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[500],
                  top:20
                }}
              >
                 {carCount} Car
              </Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default BrandCar;
