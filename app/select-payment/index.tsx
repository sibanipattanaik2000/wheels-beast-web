import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import CarPurchase from '@/components/CarPurchase'
import { appColors } from '@/constants/Color'
import appFonts from '@/constants/Font'
import SavedCard from '@/components/SavedCard'
import PaymentMethodOption from '@/components/PaymentMethodOption'
import Button from '@/components/Button'
import { Href, useRouter } from 'expo-router'
import Footer from '@/components/Footer'

// Define available payment methods
const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: require('@/assets/images/payment/creditcard.png'),
  },
  {
    id: 'paypal',
    name: 'Paypal',
    icon: require('@/assets/images/payment/paypal.png'),
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    icon: require('@/assets/images/payment/apple.png'),
  },
  {
    id: 'google-pay',
    name: 'Apple Pay',
    icon: require('@/assets/images/payment/google.png'),
  }
];

const SelectPayment = () => {
  const [selectedMethod, setSelectedMethod] = useState('card');
   const router = useRouter();
  const handleConfirm = () => {
    // For demo purposes, just show an alert instead of navigation
    Alert.alert(
      "Payment Method Selected",
      `You selected ${selectedMethod} as your payment method.`,
      [
        { text: "OK" }
      ]
    );
   
  };

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{
          flexDirection: "row", 
          alignItems: "flex-start", 
          marginHorizontal: 70, 
          marginVertical: 47, 
          justifyContent: "space-between"
        }}>
          <View style={{ width: "50%", alignSelf: 'center' }}>
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
          <View style={styles.rightContainer}>
            <View style={styles.contentContainer}>
              {/* Payment method header */}
              <Text style={styles.sectionTitle}>Payment method</Text>
              
              {/* Saved Card */}
              <SavedCard
                cardNumber="4111111111119999"
                expiry="02/25"
                cardHolder="Sashi Repaeva"
                style={styles.savedCard}
              />
              
              {/* Payment options */}
              <View style={styles.paymentOptions}>
                {paymentMethods.map((method) => (
                  <PaymentMethodOption
                    key={method.id}
                    icon={method.icon}
                    name={method.name}
                    isSelected={selectedMethod === method.id}
                    onSelect={() => setSelectedMethod(method.id)}
                  />
                ))}
              </View>
              
              {/* Confirm button */}
              <Button 
                title="Select Payment"
                variant="filled"
                style={styles.confirmButton}
                color={appColors.AdditionalColor.white}
                onPress={()=> router.push("/payment" as Href)}
              />
            </View>
          </View>
        </View>
        <Footer/>
      </ScrollView>
    </CustomSafeArea>
  )
}

const styles = StyleSheet.create({
  rightContainer: {
    width: "40%", 
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: appColors.GreyScale[200], 
    overflow: 'hidden'
  },
  contentContainer: {
    padding: 24,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 24,
  },
  savedCard: {
    marginBottom: 24,
  },
  paymentOptions: {
    marginTop: 12,
    marginBottom: 24,
  },
  confirmButton: {
    backgroundColor: appColors.main.Primary,
    marginTop: 16,
  }
});

export default SelectPayment