import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import VoucherCard from './VoucherCard'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { appColors } from '@/constants/Color'
import TextInput from './TextInput'
import appFonts from '@/constants/Font'

const Myvoucher = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "row",
          backgroundColor: appColors.GreyScale[50],
          paddingHorizontal: 70,
          paddingVertical: 47,
        },
        contentContainer: {
          flex: 1,
          shadowColor: appColors.GreyScale[500],
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: appColors.AdditionalColor.white,
        },
        contentCard: {
          flex: 1,
          backgroundColor: appColors.AdditionalColor.white,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: appColors.GreyScale[100],
          padding: 24,
        },
        title: {
          fontSize: 24,
          fontFamily: appFonts.UrbanistBold,
          color: appColors.GreyScale[900],
          marginBottom: 8,
        },
        subtitle: {
          fontSize: 16,
          fontFamily: appFonts.UrbanistMedium,
          color: appColors.GreyScale[500],
          marginBottom: 24,
        },
        placeholderContent: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: appColors.GreyScale[50],
          borderRadius: 8,
          padding: 24,
        },
        placeholderText: {
          fontSize: 16,
          fontFamily: appFonts.UrbanistMedium,
          color: appColors.GreyScale[500],
          textAlign: "center",
        },
      });
  return (
    <ScrollView style={styles.contentContainer}>
    <View
      style={{ paddingVertical: 47, gap: 36, paddingHorizontal: 24 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>My Vouchers</Text>
        <Ionicons
          name="help-circle-outline"
          size={20}
          color={appColors.GreyScale[500]}
        />
      </View>
      <TextInput
        placeholder="Enter promo code"
        value={""}
        onChangeText={() => {}}
        style={{ width: "40%" }}
      />
      {/* add voucher card */}
      <View style={{ flexDirection: "row", gap: 36 }}>
        <VoucherCard
          backgroundColor="#3A2CFF"
          icon={<FontAwesome5 name="car" size={24} color="#fff" />}
          hashtag="#summersale"
          title="Save up to $3,000 on sale car"
          couponCode="TOYTA25"
          validUntil="July 15, 2025"
          minTransaction="$10,000.00"
        />
        <VoucherCard
          backgroundColor="#000"
          icon={<FontAwesome5 name="car" size={24} color="#fff" />}
          hashtag="#summersale"
          title="Save up to $3,000 on sale car"
          couponCode="TOYTA25"
          validUntil="July 15, 2025"
          minTransaction="$10,000.00"
        />
      </View>
    </View>
  </ScrollView>
  )
}

export default Myvoucher