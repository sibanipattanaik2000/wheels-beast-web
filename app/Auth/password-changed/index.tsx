import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Dots from '@/components/Dots'
import { Image } from 'expo-image'
import appFonts from '@/constants/Font'
import { appColors } from '@/constants/Color'
import { Href, router } from 'expo-router'
import Button from '@/components/Button'

const PasswordChanged = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // For slider

  // Handle index change from Dots component
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CustomSafeArea>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View style={{ width: "100%", flexDirection: "row",flex:1 }}>
          {/* Left side with the slider */}
          <View style={{ width: "50%" }}>
            <Dots onIndexChange={handleIndexChange} />
          </View>
          
          {/* Right side with the content */}
          <View style={{ width: "50%", paddingHorizontal: 64, paddingTop: 16 }}>
            {/* Logo */}
            <View style={{ flexDirection: "row", gap: 7, alignItems: "center", marginBottom: 40 }}>
              <Image
                source={require("@/assets/images/Signup/wheel.png")}
                style={{ height: 40, width: 40 }}
              />
              <Text
                style={{
                  fontSize: 24,
                  color: appColors.main.SecondaryBase,
                  fontFamily: appFonts.UrbanistBold,
                }}
              >
                WheelsBeast
              </Text>
            </View>
            
            {/* Content */}
            <View style={{ paddingVertical: 40, gap: 32 }}>
              <Image 
                source={require("@/assets/images/Signup/EmptyState.png")} 
                style={{ width: 120, height: 120, alignSelf: "center" }} 
              />
              <Text style={{
                fontSize: 48,
                fontFamily: appFonts.UrbanistBold,
                textAlign: "center",
                color: appColors.GreyScale[900]
              }}>
                Password Changed
              </Text>
              <Text style={{
                fontSize: 24,
                fontFamily: appFonts.UrbanistMedium,
                textAlign: "center",
                color: appColors.GreyScale[500]
              }}>
                Awesome you're successfully updated your password
              </Text>
              <Button 
                title="Return To Sign in" 
                onPress={() => router.push("/Auth/Signup" as Href)} 
                variant='filled' 
                color={appColors.AdditionalColor.white} 
                style={{ backgroundColor: appColors.main.Primary }} 
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  )
}

export default PasswordChanged