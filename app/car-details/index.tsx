import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import VehicleDetails from "@/components/VehicleDetails";
import { SidebarComponent } from "@/components/Sidebar";
import Footer from "@/components/Footer";

const CarDetailsPage = () => {
  // Sample data for the Audi Q7 as shown in the image
  const audiQ7 = {
    id: "1",
    name: "Audi Q7 50 Quattro",
    description:
      "Audi Q7 50 Quattro with automatic transmission in Carrara White with Laser headlights and a Black optic. As the most substantial SUV in the Audi lineup, the Audi Q7 has ample cargo room and more-than-accommodating passenger capacity—proving that bigger is better.",
    price: 80063,
    images: [
      require("@/assets/images/Signup/car.png"),
      require("@/assets/images/Signup/car.png"),
      require("@/assets/images/Signup/car.png"),
      require("@/assets/images/Signup/car.png"),
    ],
    specs: {
      horsepower: 335,
      torque: 369,
      acceleration: 5.6,
    },
    details: {
      make: "Audi",
      model: "Q7 Quattro",
      exteriorColor: "Carrara White",
      interiorColor: "Other color",
      body: "SUV/Offroad",
      seats: 5,
      vin: "WAU45687940464447",
    },
    features: [
      {
        category: "Comfort & Convenience",
        items: [
          "3-zone automatic climate control",
          "Power tailgate",
          "Heated front seats",
          "Power adjustable front seats",
          "Panoramic sunroof",
        ],
      },
      {
        category: "Entertainment & Technology",
        items: [
          "MMI Navigation plus with voice control",
          "Audi virtual cockpit",
          "Bang & Olufsen 3D Premium Sound System",
          "Audi smartphone interface (Apple CarPlay & Android Auto)",
          "Wireless charging",
        ],
      },
      {
        category: "Safety & Security",
        items: [
          "Audi pre sense front and rear",
          "Adaptive cruise control",
          "Top view camera system with 360° view",
          "Lane departure warning",
          "Park assist with parking system plus",
        ],
      },
    ],
    designImages: [
      {
        category: "Exterior",
        image: require("@/assets/images/Signup/car.png"),
      },
      {
        category: "Interior",
        image: require("@/assets/images/Signup/car.png"),
      },
      {
        category: "Wheels",
        image: require("@/assets/images/Signup/car.png"),
      },
      {
        category: "Lighting",
        image: require("@/assets/images/Signup/car.png"),
      },
    ],
  };
  const { height, width } = useWindowDimensions();
  return (
    <CustomSafeArea>
      <Header type="default" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", width: width,  }}>
          {/* <ScrollView style={{}}  showsHorizontalScrollIndicator={false}> */}
          <View style={{ maxHeight: height, width: "20%",  }}>
            <SidebarComponent />
          </View>
          {/* </ScrollView> */}
          <ScrollView
            style={{ width: "79%",maxHeight: height,}}
          
            showsVerticalScrollIndicator={false}
          >
            <VehicleDetails vehicle={audiQ7} />
          </ScrollView>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default CarDetailsPage;
