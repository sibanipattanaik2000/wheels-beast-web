import { View, Text, ScrollView, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import CarPurchase from '@/components/CarPurchase'
import { appColors } from '@/constants/Color'
import appFonts from '@/constants/Font'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MyTextInput from '@/components/MyTextInput'
import * as ImagePicker from 'expo-image-picker'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import { Href, router } from 'expo-router'

// Define the MediaAsset type to match ImagePicker result
interface MediaAsset {
  uri: string;
  width: number;
  height: number;
  type?: "video" | "image" | "livePhoto" | "pairedVideo" | undefined;
  fileName?: string | null;
  fileSize?: number;
}

const SellCar = () => {
  const [carModel, setCarModel] = useState('Audi Q7 50 Quattro')
  const [year, setYear] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [conditionsExpanded, setConditionsExpanded] = useState(true)
  const [featuresExpanded, setFeaturesExpanded] = useState(true)
  
  // Add state for conditions and features checkboxes
  const [condition, setCondition] = useState('new') // 'new' or 'used'
  
  const [features, setFeatures] = useState({
    alarm: true,
    cruiseControl: false,
    bluetooth: true,
    frontParking: false
  })
  
  // Add state for uploaded media with the correct type
  const [mediaAssets, setMediaAssets] = useState<MediaAsset[]>([])

  // Function to toggle feature selection
  const toggleFeature = (feature: any) => {
    setFeatures(prev => ({
      ...prev,
      [feature as keyof typeof prev]: !prev[feature as keyof typeof prev]
    }))
  }
  
  // Function to pick image/video from device
  const pickMedia = async () => {
    try {
      // Ask for media library permissions
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'We need permission to access your media library')
        return
      }
      
      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true,
        selectionLimit: 5,
      })
      
      if (!result.canceled && result.assets.length > 0) {
        // Convert ImagePicker assets to our MediaAsset type
        const assets: MediaAsset[] = result.assets.map(asset => ({
          uri: asset.uri,
          width: asset.width,
          height: asset.height,
          type: asset.type,
          fileName: asset.fileName,
          fileSize: asset.fileSize
        }))
        // Add selected media to state
        setMediaAssets(assets)
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while picking media')
      console.log(error)
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row", 
      alignItems: "flex-start", 
      marginHorizontal: 70, 
      marginVertical: 47, 
      justifyContent: "space-between"
    },
    leftContainer: {
      width: "50%", 
    },
    rightContainer: {
      width: "40%",
      borderRadius: 24,
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      overflow: "hidden",
      backgroundColor: "white",
      padding: 24
    },
    title: {
      fontSize: 16,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      marginBottom: 20
    },
    section: {
      marginBottom: 20
    },
    dropdownsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
     gap:12,
     marginBottom: 20   
    },
    dropdownColumn: {
      flex: 1,
      borderWidth:1,
      padding: 16,
      borderRadius: 16,
      borderColor: appColors.GreyScale[200]
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    //   paddingVertical: 12,
    //   borderBottomWidth: 1,
    //   borderBottomColor: appColors.GreyScale[200]
    },
    sectionTitle: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900]
    },
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 8
    },
    selectedRow: {
      backgroundColor: appColors.GreyScale[50]
    },
    checkboxContainer: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12
    },
    checkboxActive: {
      backgroundColor: appColors.main.Primary,
      borderColor: appColors.main.Primary
    },
    checkboxLabel: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900]
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      borderRadius: 12,
      paddingHorizontal: 16,
      height: 48,
      marginBottom: 12
    },
    input: {
      flex: 1,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900],
      fontSize: 14
    },
    descriptionBox: {
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      borderRadius: 12,
      padding: 16,
      height: 100,
      marginTop: 8
    },
    descriptionInput: {
      height: '100%',
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900],
      fontSize: 14,
      textAlignVertical: 'top'
    },
    uploadContainer: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: appColors.GreyScale[300],
      borderRadius: 12,
      height: 130,
      backgroundColor: appColors.GreyScale[50]
    },
    uploadText: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistSemiBold,
      color: appColors.GreyScale[900],
      marginTop: 8
    },
    button: {
      backgroundColor: appColors.main.Primary,
      borderRadius: 100,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 24
    },
    buttonText: {
      fontSize: 16,
      fontFamily: appFonts.UrbanistBold,
      color: 'white'
    },
    mediaPreview: {
      width: "100%",
      height: 130,
       borderRadius: 12,
    }
  })

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <CarPurchase
              carName="Audi Q7 50 Quattro"
              horsepower="335 hp"
              transmission="Automatic"
              logoSource={require("@/assets/images/carlist/Audi.png")}
              engineSource={require("@/assets/images/carlist/engine.png")}
              gearboxSource={require("@/assets/images/carlist/gear.png")}
              carImageSource={require("@/assets/images/carlist/whitecar.png")}
              petrolSource={require("@/assets/images/carlist/petrol.png")}
              isForSale={true}
            />
          </View>

          <View style={styles.rightContainer}>
            <Text style={styles.title}>Sell Car</Text>

            <View style={styles.section}>
              <MyTextInput
                label=""
                value={carModel}
                onChangeText={setCarModel}
                placeholder="Audi Q7 50 Quattro"
              />
            </View>

            <View style={styles.dropdownsRow}>
              <View style={styles.dropdownColumn}>
                <TouchableOpacity style={styles.sectionHeader} onPress={() => setConditionsExpanded(!conditionsExpanded)}>
                  <Text style={styles.sectionTitle}>Conditions</Text>
                  <Ionicons 
                    name={conditionsExpanded ? "chevron-up" : "chevron-down"} 
                    size={20} 
                    color={appColors.GreyScale[500]} 
                  />
                </TouchableOpacity>
                
                {conditionsExpanded && (
                  <View style={{marginTop: 8}}>
                    <TouchableOpacity 
                      style={[
                        styles.checkboxRow, 
                        condition === 'new' && styles.selectedRow
                      ]}
                      onPress={() => setCondition('new')}
                    >
                      <View style={[styles.checkboxContainer, condition === 'new' && styles.checkboxActive]}>
                        {condition === 'new' && <Ionicons name="checkmark" size={12} color="white" />}
                      </View>
                      <Text style={styles.checkboxLabel}>New</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[
                        styles.checkboxRow,
                        condition === 'used' && styles.selectedRow
                      ]}
                      onPress={() => setCondition('used')}
                    >
                      <View style={[styles.checkboxContainer, condition === 'used' && styles.checkboxActive]}>
                        {condition === 'used' && <Ionicons name="checkmark" size={12} color="white" />}
                      </View>
                      <Text style={styles.checkboxLabel}>Used</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              <View style={styles.dropdownColumn}>
                <TouchableOpacity style={styles.sectionHeader} onPress={() => setFeaturesExpanded(!featuresExpanded)}>
                  <Text style={styles.sectionTitle}>Features</Text>
                  <Ionicons 
                    name={featuresExpanded ? "chevron-up" : "chevron-down"} 
                    size={20} 
                    color={appColors.GreyScale[500]} 
                  />
                </TouchableOpacity>
                
                {featuresExpanded && (
                  <View style={{marginTop: 8}}>
                    <View style={styles.searchContainer}>
                      <Text style={[styles.input, {color: appColors.GreyScale[400]}]}>Search features</Text>
                      <Ionicons name="search" size={20} color={appColors.GreyScale[500]} />
                    </View>

                    <TouchableOpacity 
                      style={[
                        styles.checkboxRow,
                        features.alarm && styles.selectedRow
                      ]}
                      onPress={() => toggleFeature('alarm')}
                    >
                      <View style={[styles.checkboxContainer, features.alarm && styles.checkboxActive]}>
                        {features.alarm && <Ionicons name="checkmark" size={12} color="white" />}
                      </View>
                      <Text style={styles.checkboxLabel}>Alarm</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[
                        styles.checkboxRow,
                        features.cruiseControl && styles.selectedRow
                      ]}
                      onPress={() => toggleFeature('cruiseControl')}
                    >
                      <View style={[styles.checkboxContainer, features.cruiseControl && styles.checkboxActive]}>
                        {features.cruiseControl && <Ionicons name="checkmark" size={12} color="white" />}
                      </View>
                      <Text style={styles.checkboxLabel}>Cruise Control</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[
                        styles.checkboxRow,
                        features.bluetooth && styles.selectedRow
                      ]}
                      onPress={() => toggleFeature('bluetooth')}
                    >
                      <View style={[styles.checkboxContainer, features.bluetooth && styles.checkboxActive]}>
                        {features.bluetooth && <Ionicons name="checkmark" size={12} color="white" />}
                      </View>
                      <Text style={styles.checkboxLabel}>Bluetooth</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[
                        styles.checkboxRow,
                        features.frontParking && styles.selectedRow
                      ]}
                      onPress={() => toggleFeature('frontParking')}
                    >
                      <View style={[styles.checkboxContainer, features.frontParking && styles.checkboxActive]}>
                        {features.frontParking && <Ionicons name="checkmark" size={12} color="white" />}
                      </View>
                      <Text style={styles.checkboxLabel}>Front Parking</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.section}>
              <MyTextInput
                label="Year"
                value={year}
                onChangeText={setYear}
                placeholder="Enter Year"
              />
            </View>

            <View style={styles.section}>
              <MyTextInput
                label="Location"
                value={location}
                onChangeText={setLocation}
                placeholder="Search location"
                icon={<Ionicons name="location-outline" size={20} color={appColors.GreyScale[500]} />}
              />
            </View>

            <View style={styles.section}>
              <MyTextInput
                label="Price"
                value={price}
                onChangeText={setPrice}
                placeholder="Enter Price"
                icon={<Text style={{color: appColors.GreyScale[500], fontFamily: appFonts.UrbanistMedium,fontSize: 14}}>$</Text>}
              />
            </View>

            <View style={styles.section}>
              <Text style={{color: appColors.GreyScale[500], fontFamily: appFonts.UrbanistMedium,fontSize: 14}}>Description</Text>
              <View style={styles.descriptionBox}>
                <TextInput
                  style={styles.descriptionInput}
                  value={description}
                  onChangeText={setDescription}
                  placeholder="Write Description about your car"
                  placeholderTextColor={appColors.GreyScale[400]}
                  multiline={true}
                />
              </View>
            </View>

            <TouchableOpacity 
              style={[
                styles.uploadContainer, 
                mediaAssets.length === 0 && { alignItems: 'center', justifyContent: 'center' }
              ]} 
              onPress={pickMedia}
            >
              {mediaAssets.length > 0 ? (
                <View>
                  {mediaAssets.map((asset, index) => (
                    <Image 
                      key={index}
                      source={{uri: asset.uri}}
                      style={styles.mediaPreview}
                      contentFit="fill"
                    />
                  ))}
                </View>
              ) : (
                <>
                  <Image 
                    source={require('@/assets/images/Signup/EmptyState.png')} 
                    style={{width: 40, height: 40,}}
                    contentFit="contain"
                  />
                  <Text style={styles.uploadText}>Upload Images/Video</Text>
                </>
              )}
            </TouchableOpacity>

            <Button title='Continue' variant='filled' style={{backgroundColor: appColors.main.Primary}} color='white' onPress={()=> router.push('/carlist' as Href)}/>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  )
}

export default SellCar