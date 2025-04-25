import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import CarPurchase from '@/components/CarPurchase'

const TrackLocation = () => {
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
    <View>
     {/* right container */}
    </View>
    </View>
    </ScrollView>
    </CustomSafeArea>
  )
}

export default TrackLocation