import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import CarPurchase from '@/components/CarPurchase'
import { appColors } from '@/constants/Color'
import { Ionicons } from '@expo/vector-icons'
import appFonts from '@/constants/Font'
import { Image } from 'expo-image'
import Button from '@/components/Button'

// Sample address data
const addresses = [
  {
    id: '1',
    type: 'Home',
    address: 'Jackson Street, San Francisco, California 94109',
    mapImage: require('@/assets/images/map/maps.png'),
  },
  {
    id: '2',
    type: 'Office',
    address: 'Union St, San Francisco, California 94105',
    mapImage: require('@/assets/images/map/maps.png'),
  },
  {
    id: '3',
    type: 'University',
    address: 'University Of San Francisco, San Francisco, California 94118',
    mapImage: require('@/assets/images/map/maps.png'),
  }
]

const SelectAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState('1')

  const handleConfirmAddress = () => {
    // For now just show an alert that would navigate in real app
    Alert.alert(
      "Address Confirmed",
      "You would now be redirected to the inspection page.",
      [{ text: "OK" }]
    )
  }

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
          <View style={{ width: "40%", borderRadius: 30, borderWidth: 1, borderColor: appColors.GreyScale[200], overflow: 'hidden' }}>
            {/* Address Selection Content */}
            <View style={styles.container}>
              {/* Header */}
              <Text style={styles.headerTitle}>Address</Text>
              
              {/* Search Box */}
              <View style={styles.searchContainer}>
                <TextInput 
                  placeholder="Find a address..." 
                  style={styles.searchInput} 
                  
                />
                <TouchableOpacity style={styles.searchIconContainer}>
                  <Ionicons name="search-outline" size={24} color={appColors.GreyScale[600]} />
                </TouchableOpacity>
              </View>
              
              {/* Address Options */}
              <View style={styles.addressList}>
                {addresses.map((address) => (
                  <TouchableOpacity
                    key={address.id}
                    style={[
                      styles.addressItem,
                      selectedAddress === address.id && styles.selectedAddressItem
                    ]}
                    onPress={() => setSelectedAddress(address.id)}
                  >
                    <View style={styles.mapImageContainer}>
                      <Image source={address.mapImage} style={styles.mapImage} />
                      <View style={styles.mapPin}>
                        <Ionicons name="location" size={16} color={appColors.GreyScale[800]} />
                      </View>
                    </View>
                    
                    <View style={styles.addressDetails}>
                      <Text style={styles.addressType}>{address.type}</Text>
                      <Text style={styles.addressText}>{address.address}</Text>
                    </View>
                    
                    {selectedAddress === address.id && (
                      <View style={styles.checkIconContainer}>
                        <Ionicons name="checkmark-circle" size={20} color={appColors.main.Primary} />
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              
              {/* Confirm Button */}
              <Button title="Confirm Address" onPress={handleConfirmAddress} variant='filled' style={{backgroundColor:appColors.main.Primary}} color={appColors.AdditionalColor.white} />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[400],
  },
  searchIconContainer: {
    padding: 4,
  },
  addressList: {
    marginVertical: 10,
    gap: 16,
  },
  addressItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
  },
  selectedAddressItem: {
    borderColor: appColors.main.Primary,
    backgroundColor: appColors.GreyScale[50],
  },
  mapImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapPin: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -8,
    marginTop: -16,
  },
  addressDetails: {
    flex: 1,
    marginLeft: 12,
  },
  addressType: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 4,
  },
  addressText: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[600],
  },
  checkIconContainer: {
    marginLeft: 8,
  },
  confirmButton: {
    backgroundColor: appColors.main.Primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 30,
  },
  confirmButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: 'white',
  }
});

export default SelectAddress