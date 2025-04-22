import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomSafeArea from '@/components/CustomSafeArea';
import Header from '@/components/Header';
import Sortby from '@/components/Sortby';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';
import CarCard from '@/components/CarCard';


const carData = [
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Ferrari 488 Spider",
      price: "$120,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Ferrari.png")
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Audi A8 Quattro",
      price: "$115,000",
      fuelType: "Manual",
      brandicon: require("@/assets/images/carlist/Audi.png"),
      isLiked: true,
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Ferrari 488 Spider",
      price: "$130,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Ferrari.png"),
      isLiked: true,
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Audi A8 Quattro",
      price: "$130,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Audi.png"),
      isLiked: true,
    },
  ];
  
const Notification = () => {
 const favouriteCars = carData.filter((car) => car.isLiked);
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
        
           
              <View style={{gap:36}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between",}}>
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                }}
              >
                Favourite Cars
              </Text>
              <Sortby />
            </View>
               
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <ScrollView
                    contentContainerStyle={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 40,
                    }}
                    showsHorizontalScrollIndicator={false}
                  >
                    {favouriteCars.map((car, index) => (
                      <CarCard key={index} {...car} isLiked={true} type="home" />
                    ))}
                  </ScrollView>
                </View>
              </View>
           
        </View>
      </ScrollView>
    </CustomSafeArea>
  )
}

export default Notification