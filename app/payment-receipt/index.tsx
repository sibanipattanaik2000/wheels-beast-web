import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import CarPurchase from '@/components/CarPurchase'
import { appColors } from '@/constants/Color'
import appFonts from '@/constants/Font'
import Button from '@/components/Button'
import { Image } from 'expo-image'

const PaymentReceipt = () => {
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
          <View style={styles.rightContainer}>
            <View style={styles.contentContainer}>
              {/* Header with car title */}
              <View style={styles.headerContainer}>
                <View style={{alignSelf: 'center'}}>
                  <Image 
                    source={require("@/assets/images/carlist/Audi.png")}
                    style={styles.audi}
                    contentFit="contain"
                  />
                  <Text style={styles.carTitle}>Audi Q7 50 Quattro</Text>
                  <Text style={styles.carSubtitle}>Receipt #1998-4442</Text>
                </View>
              </View>

              {/* Receipt details */}
              <View style={styles.detailsContainer}>
                {/* Status */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Status</Text>
                
                    <Text style={styles.confirmedText}>Confirmed</Text>
                
                </View>

                {/* Payment method */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Payment method</Text>
                  <View style={styles.paymentMethod}>
                    <Text style={styles.paymentText}>9969</Text>
                    <View style={styles.cardIcon}>
                      <Image 
                        source={require("@/assets/images/purchase/mastercard.png")}
                        style={{width: 26, height: 16}}
                        contentFit="contain"
                      />
                    </View>
                  </View>
                </View>

                {/* Date */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Date</Text>
                  <Text style={styles.detailValue}>May 27, 2023 04:00 PM</Text>
                </View>

                {/* Name */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Name</Text>
                  <Text style={styles.detailValue}>Sashi Repaeva</Text>
                </View>

                {/* Address */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Address</Text>
                  <Text style={styles.addressValue}>Jackson Street, San Francisco, California 94109</Text>
                </View>

                {/* Pricing Details */}
                <View style={styles.divider} />

                {/* Item subtotal */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Item subtotal</Text>
                  <Text style={styles.detailValue}>$80,563.00</Text>
                </View>

                {/* Shipping */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Shipping</Text>
                  <Text style={styles.detailValue}>$400.00</Text>
                </View>

                {/* Total */}
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Total</Text>
                  <Text style={styles.totalValue}>$80,963.00</Text>
                </View>

                {/* Download Receipt Button */}
                <Button 
                  title="Download Receipt"
                  variant="outlined"
                  style={styles.downloadButton}
                  color={appColors.main.Primary}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  )
}

const styles = StyleSheet.create({
  rightContainer: {
    width: "40%", 
    borderRadius: 30, 
    borderWidth: 1, 
    borderColor: appColors.GreyScale[200], 
    overflow: 'hidden'
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
  },
  audi: {
    width: 40,
    height: 40,
    marginBottom: 8,
    alignSelf: 'center',
  },
  carTitle: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  carSubtitle: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginTop: 4,
    textAlign: 'center',
  },
  detailsContainer: {
    padding: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
  },
  detailValue: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistSemiBold,
    color: appColors.GreyScale[900],
    textAlign: 'right',
  },
  addressValue: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistSemiBold,
    color: appColors.GreyScale[900],
    textAlign: 'right',
    maxWidth: '60%',
  },
  totalValue: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.main.Primary,
  },
  divider: {
    height: 1,
    backgroundColor: appColors.GreyScale[200],
    marginVertical: 16,
  },
  confirmedBadge: {
    backgroundColor: appColors.main.Primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  confirmedText: {
    color: appColors.alert.Success,
    fontFamily: appFonts.UrbanistBold,
    fontSize: 12,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistSemiBold,
    color: appColors.GreyScale[900],
    marginRight: 8,
  },
  cardIcon: {
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  downloadButton: {
    borderColor: appColors.main.Primary,
    borderWidth: 1,
  }
});

export default PaymentReceipt 