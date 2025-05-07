import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import { Ionicons } from '@expo/vector-icons';

interface BrandCategoryCardProps {
  name: string;
  image: any;
  onPress?: () => void;
  isSelected?: boolean;
  units?: string;
}

const BrandCategoryCard = ({
  name,
  image,
  onPress,
  isSelected = false,
  units
}: BrandCategoryCardProps) => {
  const {height,width} =useWindowDimensions()

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      // width:200,
      // height:195,
      height :'98%',
      width:"99%",
      alignSelf:"center",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 12,
      backgroundColor: appColors.AdditionalColor.white,
      // borderWidth: 1, 
      // borderColor: appColors.GreyScale[200],
      boxShadow :"0px 0px 5px rgba(0, 0, 0, 0.15)",
      justifyContent:"space-evenly",

      
    },
    selectedContainer: {
      backgroundColor: appColors.GreyScale[100],
    },
    image: {
      width: 200,
      height: 116,
      resizeMode: 'contain',
    },
    text: {
      fontFamily: appFonts.UrbanistRegular,
      fontSize: 13,
      color: appColors.GreyScale[500],
      textAlign: 'center',
      alignSelf:"center",
      width:'100%'
    },
    selectedText: {
      color: appColors.GreyScale[900],
    },
  });
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        isSelected && styles.selectedContainer
      ]} 
      onPress={onPress}
    >
        <Text style={{fontFamily:appFonts.UrbanistSemiBold,fontSize:14,color:appColors.GreyScale[900],textAlign:'center'}}>{name}</Text>
      <Image source={image} style={styles.image} />
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",width:"100%"}}>
      <Text style={[
        styles.text,
        isSelected && styles.selectedText
      ]}>
        {`${units} units`}

      </Text>
      <Ionicons name='chevron-forward-outline' size={20} color={appColors.GreyScale[400]} />
      </View>
    </TouchableOpacity>
  );
};



export default BrandCategoryCard; 