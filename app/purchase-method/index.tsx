import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "@/components/Button";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, useRouter } from "expo-router";
import { appColors } from "@/constants/Color";
import CarPurchase from "@/components/CarPurchase";
import Purchasecard from "@/components/PurchaseCard";
import CustomSafeArea from "@/components/CustomSafeArea";
import { SidebarComponent } from "@/components/Sidebar";
import Header from "@/components/Header";
import appFonts from "@/constants/Font";
import CarlinePromise from "@/components/CarlinePromise";
import { Ionicons } from "@expo/vector-icons";
import Footer from "@/components/Footer";

const PurchaseMethod = () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = React.useState<string | null>(null);

  const handleContinue = () => {
    // Handle continue logic here
    router.push("/inspection" as Href);
  };

  const handleCardSelect = (title: string) => {
    setSelectedCard(title);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      padding: 16,
    },
    continueButton: {
        backgroundColor:appColors.main.Primary,
    },
  });

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
       <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:70,marginVertical:47,justifyContent:"space-between"}}>
          <View style={{ width: "50%",alignSelf:'center' }}>
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

         <View style={{width:"40%",padding:30,borderRadius:30,borderWidth:1,borderColor:appColors.GreyScale[200]}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.main.Primary,
              }}
            >
              Your purchase method
            </Text>
            <Ionicons
              name="help-circle-outline"
              size={16}
              color={appColors.GreyScale[500]}
            />
          </View>
          <Purchasecard
            title="Financing"
            description="Everything simply online, approval within 30 minutes"
            iconSource={require("@/assets/images/purchase/card.png")}
            isSelected={selectedCard === "Financing"}
            onSelect={() => handleCardSelect("Financing")}
          />
          <Purchasecard
            title="Payment full"
            description="Everything simply online, approval within 30 minutes"
            iconSource={require("@/assets/images/purchase/dollar-circle.png")}
            isSelected={selectedCard === "Payment full"}
            onSelect={() => handleCardSelect("Payment full")}
          />
          <CarlinePromise/>
        <View style={{ paddingHorizontal: 20,marginVertical:20 }}>
          <Button
            title="Continue"
            onPress={handleContinue}
            variant="filled"
            color={appColors.AdditionalColor.white}
            style={styles.continueButton}
            
          />
        </View>
        </View>
        </View>
        <Footer/>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default PurchaseMethod;
