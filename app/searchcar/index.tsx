import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import { SidebarComponent } from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { appColors } from "@/constants/Color";
import SearchBar from "@/components/Searchbar";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import CategoryButton from "@/components/CategoryButton";
import AudiCarCard from "@/components/AudiCarCard";
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

const brandOptions = [
  { label: "All", icon: require("@/assets/images/brand/all.png") },
  { label: "Sedan", icon: require("@/assets/images/brand/sedan.png") },
  {
    label: "Hatchnack",
    icon: require("@/assets/images/brand/convertible.png"),
  },
  {
    label: "Convertible",
    icon: require("@/assets/images/brand/convertible.png"),
  },
];

const Searchcar = () => {
  const [selected, setSelected] = useState("All");
  const router = useRouter();
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ width: "20%" }}>
            <SidebarComponent />
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: appColors.GreyScale[50],
              paddingVertical: 20,
              paddingHorizontal: 20,
              gap: 36,
            }}
          >
            {/* Brands title and search */}
            <SearchBar width="100%" placeholder="Search Brand or model" />
            <View style={{ flexDirection: "row", gap: 30 }}>
              {brandOptions.map((item) => (
                <CategoryButton
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  selected={selected === item.label}
                  onPress={() => setSelected(item.label)}
                />
              ))}
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[500],
                }}
              >
                Recommended
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                gap: 50,
              }}
            >
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
              style={{ width: "40%", alignSelf: "center", marginVertical: 20 }}
            >
              <Button
                title="Show More Car"
                variant="filled"
                style={{ backgroundColor: appColors.main.Primary }}
                color={appColors.AdditionalColor.white}
                onPress={() => router.push("/car-details" as Href)}
              />
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default Searchcar;
