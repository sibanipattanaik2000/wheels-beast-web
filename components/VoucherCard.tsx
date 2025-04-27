import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface VoucherCardProps {
  backgroundColor: string;
  icon: JSX.Element;
  hashtag: string;
  title: string;
  couponCode: string;
  validUntil: string;
  minTransaction: string;
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  backgroundColor,
  icon,
  hashtag,
  title,
  couponCode,
  validUntil,
  minTransaction,
}) => {
  const isBlueCard = backgroundColor === "#3A2CFF";
  const hashtagColor = isBlueCard ? "#A09CFF" : appColors.GreyScale[400];
  const iconBgColor = isBlueCard ? "#534CFF" : appColors.GreyScale[800];
  const dashedBorderColor = isBlueCard ? "#7974FF" : appColors.GreyScale[700];
  const couponLabelColor = isBlueCard ? "#A09CFF" : appColors.GreyScale[400];

  return (
    <View style={styles.container}>
      {/* Colored top section */}
      <View style={[styles.topSection, { backgroundColor }]}>
        <View style={styles.upperSection}>
          <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
            {icon}
          </View>
          <View>
            <Text style={[styles.hashtag, { color: hashtagColor }]}>{hashtag}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>

        <View style={[styles.divider, { borderBottomColor: dashedBorderColor }]} />

        <View style={styles.codeContainer}>
          <Text style={[styles.hashtag, { color: couponLabelColor }]}>Your coupon code:</Text>
          <Text style={styles.code}>{couponCode}</Text>
        </View>
      </View>
      
      {/* White bottom section */}
      <View style={styles.bottomSection}>
        <View style={styles.bottomItemRow}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="clock-outline" size={20} color={appColors.GreyScale[600]} />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.bottomLabel}>Valid until</Text>
            <Text style={styles.bottomText}>{validUntil}</Text>
          </View>
        </View>

        <View style={styles.bottomItemRow}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="currency-usd" size={20} color={appColors.GreyScale[600]} />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.bottomLabel}>Min. Transaction</Text>
            <Text style={styles.bottomText}>{minTransaction}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 340,
    marginBottom: 10,
    borderRadius: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topSection: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 17,
    gap: 8,
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },
  iconContainer: {
    borderRadius: 11,
    height: 53,
    width: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: appColors.AdditionalColor.white,
    fontSize: 17,
    fontFamily: appFonts.UrbanistMedium,
  },
  hashtag: {
    fontSize: 13,
    fontFamily: appFonts.UrbanistMedium,
  },
  divider: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  code: {
    color: appColors.AdditionalColor.white,
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    backgroundColor: appColors.AdditionalColor.white,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  bottomItemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  itemTextContainer: {
    gap: 6,
  },
  bottomLabel: {
    fontSize: 11,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[400],
  },
  bottomText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  icon: {
    height: 35,
    width: 35,
    backgroundColor: appColors.GreyScale[100],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VoucherCard;
