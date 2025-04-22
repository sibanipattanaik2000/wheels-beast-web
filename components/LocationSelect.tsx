import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';

interface LocationSelectProps {
  location: string;
  primaryColor?: string;
}

const LocationSelect = ({
  location = 'Filbert street, San Francisco',
  primaryColor = appColors.main.Primary
}: LocationSelectProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your test drive will be</Text>
      
      <View style={styles.locationContainer}>
        <Ionicons 
          name="location-outline" 
          size={24} 
          color={primaryColor} 
          style={styles.locationIcon} 
        />
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  header: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 18,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 10,
    backgroundColor: appColors.GreyScale[50],
  },
  locationIcon: {
    marginRight: 12,
  },
  locationText: {
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 16,
    color: appColors.GreyScale[800],
  }
});

export default LocationSelect; 