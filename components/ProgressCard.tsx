import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface ProgressCardProps {
  carName: string;
  carImage: any;
  seller: string;
  country: string;
  price: string;
  status: "ongoing" | "completed" | "canceled";
}

const ProgressCard = ({
  carName,
  carImage,
  seller,
  country,
  price,
  status
}: ProgressCardProps) => {
  // Get button style based on status
  const getStatusButtonStyle = (status: string) => {
    switch (status) {
      case "ongoing":
        return [styles.statusButton, styles.ongoingButton];
      case "completed":
        return [styles.statusButton, styles.completedButton];
      case "canceled":
        return [styles.statusButton, styles.canceledButton];
      default:
        return [styles.statusButton];
    }
  };

  // Get button text based on status
  const getStatusButtonText = (status: string) => {
    switch (status) {
      case "ongoing":
        return "On progress";
      case "completed":
        return "Completed";
      case "canceled":
        return "Canceled";
      default:
        return "Unknown";
    }
  };

  // Get button text style based on status
  const getStatusTextStyle = (status: string) => {
    switch (status) {
      case "ongoing":
        return styles.ongoingText;
      case "completed":
        return styles.completedText;
      case "canceled":
        return styles.canceledText;
      default:
        return {};
    }
  };

  return (
    <View style={styles.cardContainer}>
      {/* Car Image and Details */}
      <View style={{flexDirection:'row',gap:24,width:'100%'}}>
        <Image source={carImage} style={styles.carImage} />
        
        <View style={{flex:1,gap:16}}>
          <Text style={styles.carName} ellipsizeMode="tail" numberOfLines={1}>{carName}</Text>
          
          <View style={styles.sellerContainer}>
            <Text style={styles.sellerText}>{seller}</Text>
            {/* USA Flag and Country */}
            <View style={styles.countryContainer}>
              <Image 
                source={require("@/assets/images/mypurchase/US.png")} 
                style={styles.flagIcon} 
              />
              <Text style={styles.countryText}>{country}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Status and Price */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={getStatusButtonStyle(status)}>
          <Text style={getStatusTextStyle(status)}>
            {getStatusButtonText(status)}
          </Text>
        </TouchableOpacity>
        
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%", 
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    padding: 32,
    overflow: "hidden",
    gap: 28,
    flex:1
  },
  carImage: {
    width: 252,
    height: 162,
    resizeMode: "contain",
  },
  detailsContent: {
    flex: 1,
    justifyContent: "center",
  },
  carName: {
    fontSize: 36,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  sellerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sellerText: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
  countryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  flagIcon: {
    width: 24,
    height: 16,
  },
  countryText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    gap: 8,
  },
  ongoingButton: {
    borderColor: "#4F46E5",
    backgroundColor: "rgba(79, 70, 229, 0.1)",
  },
  completedButton: {
    borderColor: "#10B981",
    backgroundColor: "rgba(16, 185, 129, 0.1)",
  },
  canceledButton: {
    borderColor: "#EF4444",
    backgroundColor: "rgba(239, 68, 68, 0.1)",
  },
  ongoingText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: "#4F46E5",
  },
  completedText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: "#10B981",
  },
  canceledText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: "#EF4444",
  },
  priceText: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
});

export default ProgressCard; 