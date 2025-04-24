import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
 
interface PurchaseCardProps {
  title: string;
  description: string;
  iconSource: any;
  isSelected: boolean;
  onSelect: () => void;
}
 
const Purchasecard: React.FC<PurchaseCardProps> = ({
  title,
  description,
  iconSource,
  isSelected,
  onSelect,
}) => {
 
  const backgroundColor = isSelected ? appColors.main.Primary : "transparent";
 
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.card, { borderColor: appColors.GreyScale[200], backgroundColor }]}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: isSelected ? "#534CFF": backgroundColor, borderColor: backgroundColor },
        ]}
      >
        <Image source={iconSource} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Text style={[styles.title, { color: isSelected ? appColors.AdditionalColor.white :appColors.GreyScale[900] }]}>
            {title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: isSelected ? appColors.GreyScale[100] : appColors.GreyScale[500] },
            ]}
          >
            {description}
          </Text>
        </View>
        <Ionicons
          name={isSelected ? 'checkmark-circle-outline' : 'ellipse-outline'}
          size={24}
          color={isSelected ? '#FFFFFF' : appColors.GreyScale[500]}
        />
      </View>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 15,
  },
  iconContainer: {
    width: '20%',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    width: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textWrapper: {
    gap: 10,
    width: '90%',
  },
  title: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
  },
  description: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
  },
});
 
export default Purchasecard;