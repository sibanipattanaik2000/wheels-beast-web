import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={{flexDirection:'row',alignItems:'center',gap:4}}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: "20%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: appColors.GreyScale[50],
    borderWidth: 1, 
    borderColor: appColors.GreyScale[200],
    gap:10,
    shadowColor: appColors.GreyScale[400],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedContainer: {
    backgroundColor: appColors.GreyScale[100],
  },
  image: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: appFonts.UrbanistSemiBold,
    fontSize: 14,
    color: appColors.GreyScale[800],
    textAlign: 'center',
  },
  selectedText: {
    color: appColors.GreyScale[900],
  },
});

export default BrandCategoryCard; 