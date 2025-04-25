import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Ionicons } from "@expo/vector-icons";



// Sample FAQ data for each section
const sectionData = {
    engine: [
      { question: "Engine Type", answer: "Dual Electric Motors" },
      { question: "Transmission", answer: "Single Speed" },
    ],
    fuel: [
      { question: "Fuel Type", answer: "Electric" },
      { question: "Range", answer: "350 miles" },
    ],
    suspension: [
      { question: "Suspension Type", answer: "Adaptive Air Suspension" },
      { question: "Brake System", answer: "Regenerative Braking" },
    ],
    comfort: [
      { question: "Seating Capacity", answer: "7 Seats" },
      { question: "Climate Control", answer: "Tri-Zone Automatic" },
    ],
  };
const Compare = () => {
  const [expandedSections, setExpandedSections] = useState({
    engine: false,
    fuel: false,
    suspension: false,
    comfort: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section as keyof typeof prev]: !prev[section as keyof typeof prev],
    }));
  };

  const carData = [
    {
      name: "Tesla Model X",
      variant: "LXI",
      price: "$53000.00",
      image: require("@/assets/images/brand/whitecar.png"), // Replace with actual image path
      rating: 4.9,
      reviews: 415,
      priceDubai: "$51000.00",
      financeEMI: "$53000.00",
    },
    {
      name: "Tesla Model X", // Should be a different car in a real comparison
      variant: "LXI",
      price: "$53000.00",
      image: require("@/assets/images/brand/blackcar.png"), // Replace with actual image path
      rating: 4.9,
      reviews: 415,
      priceDubai: "$48000.00",
      financeEMI: "$53000.00",
    },
  ];

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, gap: 36 }}>
          <View
            style={{
              paddingHorizontal: 56,
              paddingVertical: 30,
              backgroundColor: appColors.GreyScale[100],
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.GreyScale[900],
              }}
            >
              Compare Car
            </Text>
          </View>
          {/* Car Comparison Section */}
          <View style={styles.comparisonContainer}>
            {/* VS Divider */}
            <View style={styles.vsDivider}>
              <Text style={styles.vsText}>VS</Text>
            </View>

            {/* Car 1 */}
            <View style={styles.carSection}>
              <Image source={carData[0].image} style={styles.carImage} />
              <Text style={styles.carName}>
                {carData[0].name} {carData[0].variant}
              </Text>
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                  marginVertical: 10,
                }}
              >
                LXI
              </Text>
              <Text style={styles.carPrice}>{carData[0].price}</Text>
            </View>

            {/* Car 2 */}
            <View style={styles.carSection}>
              <Image source={carData[1].image} style={styles.carImage} />
              <Text style={styles.carName}>
                {carData[1].name} {carData[1].variant}
              </Text>
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                  marginVertical: 10,
                }}
              >
                LXI
              </Text>

              <Text style={styles.carPrice}>{carData[1].price}</Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: appColors.GreyScale[900],
              borderRadius: 10,
              marginBottom: 20,
              marginHorizontal: 56,

            }}
          >
            <View style={styles.table}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: appFonts.UrbanistSemiBold,
                  color: appColors.GreyScale[900],
                  marginBottom: 10,
                }}
              >
                Basic Information
              </Text>
              {/* Car Names Row with VS */}

              <Text
                style={{
                  fontSize: 24,
                  fontFamily: appFonts.UrbanistSemiBold,
                  color: appColors.GreyScale[900],
                  marginBottom: 10,
                }}
              >
                {carData[0].name} {carData[0].variant}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: appFonts.UrbanistSemiBold,
                  color: appColors.GreyScale[900],
                  marginBottom: 10,
                }}
              >
                {carData[1].name} {carData[1].variant}
              </Text>
            </View>
            <View style={styles.table}>
              <Text style={styles.textgray}>User Rating & Reviews</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 10,
                }}
              >
                <Ionicons name="star" size={16} color="gold" />
                <Text style={styles.reviewtext}>
                  {carData[0].rating} {carData[0].reviews} Reviews
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  
                }}
              >
                <Ionicons name="star" size={16} color="gold" />
                <Text style={styles.reviewtext}>
                  {carData[1].rating} {carData[1].reviews} Reviews
                </Text>
              </View>
            </View>
            <View style={styles.table}>
              <Text style={styles.textgray}>Price in Dubai</Text>
              <Text
                style={styles.textgray}
              >
                {carData[0].priceDubai}
              </Text>
              <Text
                style={styles.textgray}             >
                {carData[1].priceDubai}
              </Text>
            </View>
            <View style={styles.table}>
              <Text style={styles.textgray}>Finance Available (EMI)</Text>
              <Text
                style={{ fontSize: 20,
                    fontFamily: appFonts.UrbanistRegular,
                    color: appColors.GreyScale[500],right:40,alignSelf:'center'}}>
                {carData[0].financeEMI}
              </Text>
              <Text
                style={styles.textgray}
              >
                {carData[1].financeEMI}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: appColors.GreyScale[500],
                width: "100%",
                padding: 10,
              }}
            >
              <Text style={styles.textgray}>Brochure</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.main.Primary,
                    alignSelf:'center',
                    left:40,
                  }}
                >
                  Download Brochure
                </Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.main.Primary,
                  }}
                >
                  Download Brochure
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Expandable Sections */}



<View style={styles.expandableSections}>
  <TouchableOpacity
    style={styles.sectionHeader}
    onPress={() => toggleSection("engine")}
  >
    <Text style={styles.sectionTitle}>Engine & Transmission</Text>
    <Ionicons
      name={expandedSections.engine ? "remove" : "add"}
      size={24}
      color={appColors.GreyScale[500]}
    />
  </TouchableOpacity>
  {expandedSections.engine && (
    <View style={styles.sectionContent}>
      {sectionData.engine.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.faqQuestion}>{item.question}</Text>
          <Text style={styles.faqAnswer}>{item.answer}</Text>
        </View>
      ))}
    </View>
  )}

  <TouchableOpacity
    style={styles.sectionHeader}
    onPress={() => toggleSection("fuel")}
  >
    <Text style={styles.sectionTitle}>Fuel & Performance</Text>
    <Ionicons
      name={expandedSections.fuel ? "remove" : "add"}
      size={24}
      color={appColors.GreyScale[500]}
    />
  </TouchableOpacity>
  {expandedSections.fuel && (
    <View style={styles.sectionContent}>
      {sectionData.fuel.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.faqQuestion}>{item.question}</Text>
          <Text style={styles.faqAnswer}>{item.answer}</Text>
        </View>
      ))}
    </View>
  )}

  <TouchableOpacity
    style={styles.sectionHeader}
    onPress={() => toggleSection("suspension")}
  >
    <Text style={styles.sectionTitle}>Suspension, Steering & Brakes</Text>
    <Ionicons
      name={expandedSections.suspension ? "remove" : "add"}
      size={24}
      color={appColors.GreyScale[500]}
    />
  </TouchableOpacity>
  {expandedSections.suspension && (
    <View style={styles.sectionContent}>
      {sectionData.suspension.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.faqQuestion}>{item.question}</Text>
          <Text style={styles.faqAnswer}>{item.answer}</Text>
        </View>
      ))}
    </View>
  )}

  <TouchableOpacity
    style={styles.sectionHeader}
    onPress={() => toggleSection("comfort")}
  >
    <Text style={styles.sectionTitle}>Comfort & Convenience</Text>
    <Ionicons
      name={expandedSections.comfort ? "remove" : "add"}
      size={24}
      color={appColors.GreyScale[500]}
    />
  </TouchableOpacity>
  {expandedSections.comfort && (
    <View style={styles.sectionContent}>
      {sectionData.comfort.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.faqQuestion}>{item.question}</Text>
          <Text style={styles.faqAnswer}>{item.answer}</Text>
        </View>
      ))}
    </View>
  )}
</View>




          
        </View>

        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  comparisonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    gap: 32,
    paddingHorizontal: 56,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  sectionContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: appColors.GreyScale[50],
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
  },
  faqItem: {
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  table: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: appColors.GreyScale[500],
    width: "100%",
    padding: 10,
  },
  vsDivider: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: appColors.GreyScale[900],
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    alignSelf: "center",
  },
  vsText: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.AdditionalColor.white,
  },
  carSection: {
    width: "45%",
  },
  carImage: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    marginBottom: 10,
  },
  carName: {
    fontSize: 48,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[500],
  },
  carPrice: {
    fontSize: 48,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
    marginTop: 5,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  infoValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
    marginLeft: 5,
  },
  brochureText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.main.Primary,
    width: "35%",
  },
  expandableSections: {
    marginHorizontal: 56,
  },
  textgray: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
  },
  
  reviewtext: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[500],
  },
});

export default Compare;
