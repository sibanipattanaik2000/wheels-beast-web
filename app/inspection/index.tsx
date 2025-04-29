import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import CarPurchase from '@/components/CarPurchase'
import { appColors } from '@/constants/Color'
import { Href, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import appFonts from '@/constants/Font'
import Footer from '@/components/Footer'

const Inspection = () => {
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
            {/* Vehicle Inspection Details Content */}
            <View style={styles.container}>
              
                <View style={{flexDirection:"row",alignItems:"center",}}>
                <Text style={styles.headerTitle}>Vehicle inspection</Text>
                <Ionicons name="help-circle-outline" size={24} color={appColors.GreyScale[300]} />
                </View>
                <View style={{borderWidth:1,paddingHorizontal:20,paddingVertical:16,borderRadius:20,gap:16,marginVertical:24,borderColor:appColors.GreyScale[200]}}>
                <View style={styles.priceContainer}>
                    <View style={{paddingHorizontal:12,paddingVertical:8,borderRadius:6,backgroundColor:appColors.main.Primary}}>
                  <Text style={styles.priceTag}>Initial Price</Text>
                  </View>
                  <Text style={styles.price}>$80,063.00</Text>
                </View>
            

              <View style={styles.guaranteeContainer}>
                <View style={styles.checkIconContainer}>
                  <Ionicons name="shield-checkmark-outline" size={18} color={appColors.alert.Success} />
                </View>
                <Text style={styles.guaranteeText}>
                  Money-back guarantee if the car fails the inspection.
                </Text>
              </View>

              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>See details</Text>
                <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[800]} />
              </TouchableOpacity>

              </View>

              <View >
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Shipping address</Text>
                  <TouchableOpacity>
                    <Text style={styles.editButton}>Edit</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.detailsContent}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Name</Text>
                    <Text style={styles.detailValue}>Sashi Repaeva</Text>
                  </View>
                  
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Street</Text>
                    <Text style={styles.detailValue}>Jackson Street 1314</Text>
                  </View>
                  
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Phone number</Text>
                    <Text style={styles.detailValue}>+1 234 567 00</Text>
                  </View>
                </View>
              </View>

              <View style={{borderWidth:1,borderRadius:12,padding:16,gap:12,borderColor:appColors.GreyScale[200],marginVertical:20,backgroundColor:appColors.GreyScale[50]}}>
                <Text style={styles.sectionTitle}>Order summary</Text>
                
                <View style={{gap:8}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.detailLabel}>Car Audi</Text>
                    <Text style={styles.detailValue}>$80,063.00</Text>
                  </View>
                  
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>$80,063.00</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => router.push('/select-address' as Href)}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer/>
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
  },
  priceContainer: {
    alignItems: 'center',
    gap:10
  },
  priceTag: {
    fontSize: 10,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.AdditionalColor.white,
  },
  price: {
    fontSize: 32,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  guaranteeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginVertical: 20,
  },
  checkIconContainer: {
    marginRight: 8,
  },
  guaranteeText: {
    fontSize: 13,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.alert.Success,
    flex: 1,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: appColors.GreyScale[200],
  },
  detailsButtonText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistSemiBold,
    color: appColors.GreyScale[900],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  editButton: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.main.Primary,
  },
  detailsContent: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
  detailValue: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    textAlign: 'right',
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: appColors.GreyScale[200],
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  totalValue: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  continueButton: {
    backgroundColor: appColors.main.Primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: 'white',
  }
});

export default Inspection