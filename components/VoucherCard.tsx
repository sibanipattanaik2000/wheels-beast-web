import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
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
 const isBlueCard = backgroundColor === "#3A2CFF"; // You can change this match to any blue you're using

  const hashtagColor = isBlueCard ? "#A09CFF" : appColors.GreyScale[400];
  const iconBgColor = isBlueCard ? "#534CFF" : appColors.GreyScale[800];
  const dashedBorderColor = isBlueCard ? "#7974FF" : appColors.GreyScale[700];
  const couponLabelColor = isBlueCard ? "#A09CFF" : appColors.GreyScale[400];
  return (
    <>
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.upperSection}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          {icon}
        </View>
        <View>
          <Text style={[styles.hastag, { color: hashtagColor }]}>{hashtag}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>

      <View style={[styles.divider, { borderBottomColor: dashedBorderColor }]} />

      <View style={styles.codeContainer}>
        <Text style={[styles.hastag, { color: couponLabelColor }]}>Your coupon code:</Text>
        <Text style={styles.code}>{couponCode}</Text>
      </View>
    </View>
    <View style={styles.bottomSection}>
      <View style={styles.bottomItemRow}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="clock-outline" size={20} />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.bottomLabel}>Valid until</Text>
          <Text style={styles.bottomText}>{validUntil}</Text>
        </View>
      </View>

      <View style={styles.bottomItemRow}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="currency-usd" size={20} />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.bottomLabel}>Min. Transaction</Text>
          <Text style={styles.bottomText}>{minTransaction}</Text>
        </View>
      </View>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 17,
    width: "40%",
    gap: 8,
  },
  bottomItemRow: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  upperSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },
  iconContainer: {
    backgroundColor: "#534CFF",
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
  hastag: {
    color: "#A09CFF",
    fontSize: 13,
    fontFamily: appFonts.UrbanistMedium,
  },
  divider: {
    borderBottomColor: "#7974FF",
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
    width: "38.2%",
    position: "absolute",
    bottom: -20,
    padding: 18,
    gap: 8,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomItem: {
    alignItems: "center",
    flex: 1,
    borderWidth: 2,
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
