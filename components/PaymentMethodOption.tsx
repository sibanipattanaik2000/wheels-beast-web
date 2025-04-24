import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import { Image } from 'expo-image';

interface PaymentMethodOptionProps {
  icon: any;
  name: string;
  isSelected: boolean;
  onSelect: () => void;
}

const PaymentMethodOption = ({ icon, name, isSelected, onSelect }: PaymentMethodOptionProps) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isSelected && styles.selectedContainer]} 
      onPress={onSelect}
    >
      <View style={styles.leftContent}>
        <Image source={icon} style={styles.icon} contentFit="contain" />
        <Text style={styles.name}>{name}</Text>
      </View>
      
      <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    backgroundColor: appColors.GreyScale[50],
  },
  selectedContainer: {
    borderColor: appColors.main.Primary,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistSemiBold,
    color: appColors.GreyScale[900],
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: appColors.GreyScale[300],
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: appColors.main.Primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: appColors.main.Primary,
  },
});

export default PaymentMethodOption; 