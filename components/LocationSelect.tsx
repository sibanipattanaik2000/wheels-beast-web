import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';

interface LocationSelectProps {
  location?: string;
  primaryColor?: string;
}

const LocationSelect = ({
  location = '',
  primaryColor = appColors.main.Primary
}: LocationSelectProps) => {
  const [locationInput, setLocationInput] = useState(location);

  const handleIconPress = () => {
    // You can add any action here, like opening a map or location picker
    console.log('Location icon pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your test drive will be</Text>
      
      <View style={styles.locationContainer}>
        <TouchableOpacity onPress={handleIconPress}>
          <Ionicons 
            name="location-outline" 
            size={24} 
            color={primaryColor} 
            style={styles.locationIcon} 
          />
        </TouchableOpacity>
        <TextInput
          style={styles.locationInput}
          placeholder="Enter location"
          placeholderTextColor={appColors.GreyScale[400]}
          value={locationInput}
          onChangeText={setLocationInput}
        />
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
  locationInput: {
    flex: 1,
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 16,
    color: appColors.GreyScale[800],
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
});

export default LocationSelect;
