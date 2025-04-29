import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";

interface Brand {
  name: string;
  icon: any;
}

interface ExploreBrandProps {
  title: string;
}

const ExploreBrand = ({ title }: ExploreBrandProps) => {
  const [showAll, setShowAll] = useState(false);

  const allBrands: Brand[] = [
    { name: "BMW", icon: require("@/assets/images/brand/BMW.png") },
    { name: "Ferarrri", icon: require("@/assets/images/carlist/Ferrari.png") },
    { name: "Mercedes", icon: require("@/assets/images/brand/mercedes.png") },
    { name: "Audi", icon: require("@/assets/images/carlist/Audi.png") },
    { name: "Mini-Cooper", icon: require("@/assets/images/brand/mini.png") },
    { name: "Tesla", icon: require("@/assets/images/brand/Tesla.png") },
    { name: "Jaguar", icon: require("@/assets/images/brand/jaguar.png") },
    { name: "Toyota", icon: require("@/assets/images/brand/Toyota.png") },
  ];

  const brandsToShow = showAll ? allBrands : allBrands.slice(0, 8);

  return (
    <View
      style={{
        borderColor:appColors.GreyScale[200],borderWidth:1,margin:80,paddingHorizontal:60,paddingVertical:50,gap:24,borderRadius:20,
      }}
    >
      {/* <View style={{flexDirection:'row',gap:10}}>
        <View style={{ borderWidth:1,borderColor:appColors.GreyScale[200],flexDirection:'row',gap:12,borderRadius:12,paddingHorizontal:12,paddingVertical:8,alignItems:'center'}}>
          <Image source={require('@/assets/images/brand/sedan.png')} style={{height:24,width:24}}/>
          <Text style={{fontSize:14,fontFamily:appFonts.UrbanistMedium,color:appColors.GreyScale[600],textAlign:'center'}}>Sedan </Text>
        </View>
        <View style={{ borderWidth:1,borderColor:appColors.GreyScale[200],flexDirection:'row',gap:12,borderRadius:12,paddingHorizontal:12,paddingVertical:8,alignItems:'center'}}>
          <Image source={require('@/assets/images/brand/convertible.png')} style={{height:24,width:24}}/>
          <Text style={{fontSize:14,fontFamily:appFonts.UrbanistMedium,color:appColors.GreyScale[600],textAlign:'center'}}>Hatchback</Text>
        </View>
        <View style={{ borderWidth:1,borderColor:appColors.GreyScale[200],flexDirection:'row',gap:12,borderRadius:12,paddingHorizontal:12,paddingVertical:8,alignItems:'center'}}>
          <Image source={require('@/assets/images/brand/convertible.png')} style={{height:24,width:24}}/>
          <Text style={{fontSize:14,fontFamily:appFonts.UrbanistMedium,color:appColors.GreyScale[600],textAlign:'center'}}>Convertible </Text>
        </View>
       
      </View> */}
      <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
        <Text
          style={{
            color:appColors.GreyScale[900],fontSize:32,fontFamily:appFonts.UrbanistBold
          }}
        >
          {title}
        </Text>
        {/* {!showAll && ( */}
          <TouchableOpacity onPress={() => setShowAll(true)}>
            <Text
                style={{color:appColors.GreyScale[500],fontSize:32,fontFamily:appFonts.UrbanistBold}}
            >
              View All
            </Text>
          </TouchableOpacity>
        {/* )} */}
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap",gap:24}}>
        {brandsToShow.map((brand, index) => (
          <View key={index} style={{ alignItems: "center",borderWidth:1,borderColor:appColors.GreyScale[200],padding:16,gap:12,width:130,borderRadius:16}}>
            <View
              style={{
                backgroundColor: appColors.GreyScale[900],
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                height: 40, width: 40,
              }}
            >
              <Image
                source={brand.icon}
                style={{ height: 20, width: 20, resizeMode: "contain" }}
              />
            </View>
            <Text
              style={{
                marginTop: 8,
                fontSize: 14,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.GreyScale[900],
              }}
            >
              {brand.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExploreBrand;
