import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MyPurchases from '@/components/MyPurchases'
import CustomSafeArea from '@/components/CustomSafeArea'
import { appColors } from '@/constants/Color'
import ViewAllButton from '@/components/ViewAll'
import CarCard from '@/components/CarCard'
import Footer from '@/components/Footer'

// Sample car data for CarCard components
const carData = [
  {
    id: "car1",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Mercedes-Benz C-Class",
    price: "$45,000",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.0L",
    ratings: 4.8,
  },
  {
    id: "car2",
    image: require("@/assets/images/brand/Car.png"),
    brand: "BMW 3 Series",
    price: "$42,500",
    fuelType: "Hybrid",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "1.8L",
    ratings: 4.7,
  },
  {
    id: "car3",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Audi A4",
    price: "$48,300",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.2L",
    ratings: 4.9,
  },
  {
    id: "car4",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Lexus ES",
    price: "$40,800",
    fuelType: "Hybrid",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.5L",
    ratings: 4.6,
  },
  {
    id: "car5",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Volvo S60",
    price: "$39,990",
    fuelType: "Electric",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "N/A",
    ratings: 4.5,
  },
  {
    id: "car6",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Cadillac CT5",
    price: "$52,200",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "3.0L",
    ratings: 4.4,
  },
  {
    id: "car7",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Tesla Model 3",
    price: "$52,990",
    fuelType: "Electric",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "N/A",
    ratings: 5.0,
  },
  {
    id: "car8",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Honda Accord",
    price: "$38,200",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.0L",
    ratings: 4.3,
  },
  {
    id: "car9",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Toyota Camry",
    price: "$36,500",
    fuelType: "Hybrid",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.5L",
    ratings: 4.5,
  },
  {
    id: "car10",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Hyundai Sonata",
    price: "$34,700",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "1.8L",
    ratings: 4.2,
  },
  {
    id: "car11",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Kia K5",
    price: "$33,900",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.0L",
    ratings: 4.4,
  },
  {
    id: "car12",
    image: require("@/assets/images/brand/Car.png"),
    brand: "Mazda 6",
    price: "$35,600",
    fuelType: "Gasoline",
    brandicon: require("@/assets/images/brand/Car.png"),
    engine: "2.2L",
    ratings: 4.6,
  },
];

const OrderProgress = () => {
  const [viewAll, setViewAll] = useState(false);
  
  // Show only first 8 cars initially, or all cars if viewAll is true
  const displayedCars = viewAll ? carData : carData.slice(0, 8);
  
  const handleViewAll = () => {
    setViewAll(true);
  };

  return (
   <CustomSafeArea>
    <ScrollView style={{flex:1,backgroundColor:appColors.GreyScale[100]}} showsVerticalScrollIndicator={false}>
      <View style={{gap:24}}>
        <MyPurchases/>
         <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between",paddingHorizontal:70,paddingBottom:20 }}>
          <ViewAllButton 
            title="Car recomendation" 
            onPress={handleViewAll} 
            showAll={!viewAll} 
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 20,
            paddingHorizontal:70,
          }}
        >
          {displayedCars.map((car, index) => (
            <View key={`car-${index}`} style={{ width: '23%', marginBottom: 20 }}>
              <CarCard 
                image={car.image}
                brand={car.brand}
                price={car.price}
                fuelType={car.fuelType}
                brandicon={car.brandicon}
                engine={car.engine}
                ratings={car.ratings}
                type="home"
              />
            </View>
          ))}
        </View>
    </View>
      </View>
<Footer/>
    </ScrollView>
   </CustomSafeArea>
  )
}

export default OrderProgress