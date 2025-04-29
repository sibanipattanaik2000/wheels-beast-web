import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import CarPurchase from "@/components/CarPurchase";
import { appColors } from "@/constants/Color";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";
import Footer from "@/components/Footer";

const TrackLocation = () => {
    const styles = StyleSheet.create({
        text:{
            fontSize:14,
            fontFamily:appFonts.UrbanistBold,
            color:appColors.GreyScale[900]
        },
        texthead:{
            fontSize:12,
            fontFamily:appFonts.UrbanistMedium,
            color:appColors.GreyScale[500]
        }
    })
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginHorizontal: 70,
            marginVertical: 47,
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "50%", alignSelf: "center" }}>
            <CarPurchase
              carName="Audi Q7 50 Quattro"
              horsepower="335 hp"
              transmission="Automatic"
              logoSource={require("@/assets/images/carlist/Audi.png")}
              engineSource={require("@/assets/images/carlist/engine.png")}
              gearboxSource={require("@/assets/images/carlist/gear.png")}
              carImageSource={require("@/assets/images/brand/whitecar.png")}
            />
          </View>
          <View
            style={{
              width: "40%",
              borderRadius: 30,
              borderWidth: 1,
              borderColor: appColors.GreyScale[200],
              overflow: "hidden",
              backgroundColor: "white",
              padding:30,
              gap:24
            }}
          >
            <View style={{borderWidth:2,height:420}}/>
            <View style={{borderRadius:16,padding:16,borderColor:appColors.GreyScale[200],borderWidth:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",gap:12}}>
            <View style={{height:48,width:48,borderRadius:12,alignItems:"center",justifyContent:"center",backgroundColor:appColors.GreyScale[100]}}>
                <Image source={require("@/assets/images/track/DHL.png")} style={{width:38,height:6,resizeMode:"contain"}}/>

            </View>
            <View style={{gap:4}}>
                <Text style={{fontSize:16,fontFamily:appFonts.UrbanistBold,color:appColors.GreyScale[900]}}>#19984442MPX</Text>
                <Text style={{fontSize:12,fontFamily:appFonts.UrbanistMedium,color:appColors.GreyScale[500]}}>DHL Express</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",gap:12}}>
            <View style={{height:48,width:48,borderRadius:50,alignItems:"center",justifyContent:"center",borderColor:appColors.GreyScale[200],borderWidth:1}}>
                <Ionicons name="globe-outline" size={20} color={appColors.GreyScale[500]}/>
            </View>
            <View style={{height:48,width:48,borderRadius:50,alignItems:"center",justifyContent:"center",borderColor:appColors.GreyScale[200],borderWidth:1}}>
                <Ionicons name="call-outline" size={20} color={appColors.GreyScale[500]}/>
            </View>
            </View>
            </View>
            <View style={{flexDirection:"row",  justifyContent:"space-between",width:"65%"}}> 
            <View style={{gap:4}}>
                <Text style={styles.texthead}>Estimate delivery</Text>
                <Text style={styles.text}>July 29, 2025</Text>
            </View>
            <View style={{gap:4}}>
                <Text style={styles.texthead}>Status</Text>
                <Text style={{fontSize:14,fontFamily:appFonts.UrbanistBold,color:appColors.main.Primary}}>On Progress</Text>
            </View>
            </View>

            <View style={{flexDirection:"row",  justifyContent:"space-between"}}> 
            <View style={{gap:4}}>
                <Text style={styles.texthead}>From</Text>
                <Text style={styles.text}>St. Petersburg</Text>
                <Text style={[styles.texthead, {width:"80%"}]} numberOfLines={2}>Jackson Street, San Francisco, California 94109</Text>
            </View>
            <View style={{gap:4}}>
                <Text style={styles.texthead}>To</Text>
                <Text style={styles.text}>San Francisco</Text>
                <Text style={[styles.texthead, {width:"80%"}]} numberOfLines={2}>Jackson Street, San Francisco, California 94109</Text>
            </View>
            </View>
          </View>
        </View>
        <Footer/>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default TrackLocation;
