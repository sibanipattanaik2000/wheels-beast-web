import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface SavedCardProps {
  cardNumber: string;
  expiry: string;
  cardHolder: string;
  style?: any;
}

const SavedCard = ({ cardNumber, expiry, cardHolder, style }: SavedCardProps) => {
  // Format card number to show only last 4 digits
  const formatCardNumber = () => {
    const lastFourDigits = cardNumber.slice(-4);
    return `**** **** **** ${lastFourDigits}`;
  };
  const {height , width } = useWindowDimensions();
  const styles = StyleSheet.create({
    cardContainer: {
      width: width/4.4,
      height: width/7.30,
      borderRadius: 20,
      backgroundColor: appColors.main.Primary, // Rich blue color as in the image
      paddingLeft: 16,
      paddingVertical:16,
      position: 'relative',
      overflow: 'hidden',
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
   
    cardDetails: {
      flex: 1,
      justifyContent: 'space-between',
    },
    cardNumber: {
      fontSize: 16,
      fontFamily: appFonts.UrbanistBold,
      color: 'white',
      marginTop: 50,
    },
    expiry: {
      fontSize: 12,
      fontFamily: appFonts.UrbanistMedium,
      color: 'white',
      marginTop: 10,
    },
    cardHolder: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistBold,
      color: 'white',
      marginTop: 20,
    },
  });


  return (
    <View style={[styles.cardContainer, style]}>
      {/* Card design elements */}
      <View style={{  width:'60%'}}>
        <Image 
          source={require('@/assets/images/purchase/mastercard.png')}
          style={{height:26,width:42,resizeMode:"contain"}}
          contentFit="cover"
        />
        <View style={styles.cardDetails}>
        <Text style={styles.cardNumber}>{formatCardNumber()}</Text>
        <Text style={styles.expiry}>{expiry}</Text>
        <Text style={styles.cardHolder}>{cardHolder}</Text>
      </View>
      </View>
        <View style={{width:'40%',height:'100%'}}>
            <Image
            source={require('@/assets/images/payment/group.png')}
            style={{height:300,width:130,resizeMode:"contain",right:-4}} 
            contentFit="cover"
            />
        {/* <Image 
          source={require('@/assets/images/payment/star.png')}
          style={{height:53,width:53,resizeMode:"contain",right:0,position:"absolute"}}
          contentFit="cover"
        />
        <Image 
          source={require('@/assets/images/payment/stars.png')}
          style={{height:26,width:42,resizeMode:"cover",top:50,position:"absolute",alignSelf:"flex-end",right:30}}
          contentFit="cover"
        /> */}
       
      </View>
      
      {/* Card details */}
      
    </View>
  );
};



export default SavedCard; 