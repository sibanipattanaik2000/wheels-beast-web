import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import CarPurchase from '@/components/CarPurchase'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import { appColors } from '@/constants/Color'
import appFonts from '@/constants/Font'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

const Payment = () => {
  const [checked, setChecked] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCVC] = useState('')
  const [cardHolder, setCardHolder] = useState('')

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
            <View style={styles.container}>
              {/* Payment Method */}
              <View style={styles.methodSection}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Method of payment</Text>
                  <TouchableOpacity style={{flexDirection:"row",alignItems:"center",gap:4}}>
                    <Image source={require('@/assets/images/purchase/edit.png')} style={{height:16,width:16}} />
                    <Text style={styles.changeLink}>Change</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.paymentMethodCard}>
                    <View style={{gap:10}}>
                  <Text style={{fontSize:14,fontFamily:appFonts.UrbanistBold,color:appColors.AdditionalColor.white}}>Credit or Debit card</Text>
                  <Text style={{fontSize:12,fontFamily:appFonts.UrbanistMedium,color:appColors.GreyScale[400]}}>Online payment</Text>
                  </View>
                  <View style={styles.cardIconsContainer}>
                    <View style={styles.img}>
                    <Image 
                      source={require('@/assets/images/purchase/mastercard.png')} 
                      style={styles.cardIcon} 
                      contentFit="contain"
                    />
                    </View>
                    <View style={styles.img}>
                    <Image 
                      source={require('@/assets/images/purchase/visa.png')} 
                      style={styles.cardIcon} 
                      contentFit="contain"
                    />
                    </View>
                  </View>
                </View>
              </View>

              {/* Card Details */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Card number</Text>
                <View style={styles.cardNumberField}>
                  <Image 
                    source={require('@/assets/images/purchase/card.png')}
                    style={styles.fieldIcon}
                    contentFit="contain"
                  />
                  <TextInput 
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    style={styles.customInput}
                  />
                </View>
              </View>

              {/* Card Expiry and CVC */}
              <View style={styles.twoColumnContainer}>
                <View style={[styles.fieldGroup, { flex: 1, marginRight: 10 }]}>
                  <View style={styles.labelWithIcon}>
                    <Text style={styles.fieldLabel}>Expiry date</Text>
                    <Ionicons name="help-circle-outline" size={16} color={appColors.GreyScale[400]} />
                  </View>
                  <TextInput 
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    style={styles.customInput}
                  />
                </View>
                
                <View style={[styles.fieldGroup, { flex: 1, marginLeft: 10 }]}>
                  <View style={styles.labelWithIcon}>
                    <Text style={styles.fieldLabel}>CVC</Text>
                    <Ionicons name="help-circle-outline" size={16} color={appColors.GreyScale[400]} />
                  </View>
                  <TextInput 
                    placeholder="000"
                    value={cvc}
                    onChangeText={setCVC}
                    style={styles.customInput}
                  />
                </View>
              </View>

              {/* Card Holder Name */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Card holder</Text>
                <TextInput 
                  placeholder="Full name"
                  value={cardHolder}
                  onChangeText={setCardHolder}
                  style={styles.customInput}
                />
              </View>

              {/* Terms Agreement */}
              <View style={styles.termsContainer}>
                <TouchableOpacity 
                  style={styles.checkboxContainer}
                  onPress={() => setChecked(!checked)}
                >
                  {checked ? (
                    <Ionicons name="checkbox" size={20} color={appColors.main.Primary} />
                  ) : (
                    <View style={styles.uncheckedBox} />
                  )}
                </TouchableOpacity>
                <Text style={styles.termsText}>
                  I agree with <Text style={styles.termsLink}>general terms </Text><Text style={styles.termsText}>and</Text><Text style={styles.termsLink}> conditions</Text>
                </Text>
              </View>

              {/* Confirm Button */}
              <Button 
                title="Confirm Address"
                variant="filled"
                style={{ backgroundColor: appColors.main.Primary, marginTop: 20 }}
                color={appColors.AdditionalColor.white}
              />
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
  methodSection: {
    marginBottom: 20,
  },
  img:{
    height:40,
    width:48,
    borderRadius:8,
    backgroundColor:appColors.GreyScale[800],
    justifyContent:"center",
    alignItems:"center",
    
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  changeLink: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.main.Primary,
  },
  paymentMethodCard: {
    backgroundColor: appColors.GreyScale[900],
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardType: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: 'white',
  },
  cardIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  cardIcon: {
    width: 28,
    height: 12,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  customInput: {
    height: 48,
    borderRadius: 8,
    backgroundColor: appColors.GreyScale[50],
  },
  cardNumberField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fieldIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  labelWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  twoColumnContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: appColors.GreyScale[300],
    borderRadius: 4,
  },
  termsText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
    flex: 1,
  },
  termsLink: {
    color: appColors.main.Primary,
  },
});

export default Payment