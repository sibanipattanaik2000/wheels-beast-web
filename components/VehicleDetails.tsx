import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import DropDownComponent from "@/components/Dropdown";
import FeatureCard from "./FeatureCard";
import ShareModal from "./ShareModal";
import { Href, useRouter } from "expo-router";
import CarViewer from "./CarViewer";
import CarPriceGraph from "./CarPriceGraph";
import Car360Modal from "./Car360Modal";

interface VehicleDetailsProps {
  vehicle: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: any[];
    specs: {
      horsepower: number;
      torque: number;
      acceleration: number;
    };
    details: {
      make: string;
      model: string;
      exteriorColor: string;
      interiorColor: string;
      body: string;
      seats: number;
      vin: string;
    };
    finance?: {
      registration: string;
      audit: string;
      importMOT: string;
      documentation: string;
      salesTax: string;
      totalPrice: string;
      monthlyPayment: string;
    };
    features: {
      category: string;
      items: string[];
    }[];
    designImages: {
      category: string;
      image: any;
    }[];
  };
}

const tabContent = {
  design: {},
  price_map: {
    data: [
      { item: "Base Price", price: 68000 },
      { item: "Premium Plus Package", price: 5500 },
      { item: "Technology Package", price: 3000 },
      { item: "Towing Package", price: 1500 },
      { item: "Destination Fee", price: 1195 },
      { item: "Dealer Discount", price: -2500 },
      { item: "Total", price: 76695 },
    ],
  },
};

const featureItems = [
  {
    src: require("@/assets/images/Features/automatic.png"),
    line1: "Transmission type",
    line2: "Automatic",
  },
  {
    src: require("@/assets/images/Features/engine.png"),
    line1: "Engine displacement",
    line2: "2998 cc",
  },
  {
    src: require("@/assets/images/Features/seat.png"),
    line1: "Seating capacity",
    line2: "7 Seats",
  },
];
const performance = [
  {
    src: require("@/assets/images/Features/Speed.png"),
    line1: "Top Speed",
    line2: "250 kmph",
  },
  {
    src: require("@/assets/images/Features/torque.png"),
    line1: "Torque",
    line2: "369 lb - ft",
  },
  {
    src: require("@/assets/images/Features/Fuel.png"),
    line1: "Fuel type",
    line2: "Petrol",
  },
];
const notablefeatures = [
  {
    src: require("@/assets/images/Features/bt.png"),
    line1: "Bluetooth Connectivity",
    line2: "Yes",
    line2Color: appColors.alert.Success,
  },
  {
    src: require("@/assets/images/Features/snow.png"),
    line1: "Automatic Climate",
    line2: "Yes",
    line2Color: appColors.alert.Success,
  },
  {
    src: require("@/assets/images/Features/ac.png"),
    line1: "Air Conditioner",
    line2: "Yes",
    line2Color: appColors.alert.Success,
  },
];

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const [activeImage, setActiveImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const toggleFeature = (index: number) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: "row",
      gap: 16,
      justifyContent: "space-between",
      paddingVertical: 40,
      height: height * 0.8,
    },
    imageSection: {
      width: "48%",
      height: "100%",
      gap: 12,
    },
    mainImageContainer: {
      width: "100%",
      height: "70%",
      borderRadius: 12,
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#0F172A",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: appColors.GreyScale[300],
      alignItems: "center",
    },
    mainImage: {
      width: "100%",
      height: "100%",
    },
    threeSixtyButtonContainer: {
      position: "absolute",
      bottom: 16,
      width: "100%",
      alignItems: "center",
    },
    threeSixtyButton: {
      backgroundColor: "#1E293B",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },
    threeSixtyButtonText: {
      color: "#fff",
      fontFamily: appFonts.UrbanistSemiBold,
      fontSize: 14,
    },
    thumbnailsContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
    thumbnailButton: {
      width: "30%",
      height: 124,
      borderRadius: 8,
      overflow: "hidden",
      borderWidth: 2,
      borderColor: "transparent",
    },
    activeThumbnail: {
      borderColor: appColors.main.Primary,
    },
    thumbnailImage: {
      width: "100%",
      height: "100%",
    },
    moreImagesButton: {
      width: 72,
      height: 72,
      borderRadius: 8,
      backgroundColor: "rgba(15, 23, 42, 0.7)",
      justifyContent: "center",
      alignItems: "center",
    },
    moreImagesCount: {
      color: "#fff",
      fontFamily: appFonts.UrbanistBold,
      fontSize: 16,
    },
    moreImagesText: {
      color: "#fff",
      fontFamily: appFonts.UrbanistRegular,
      fontSize: 12,
    },
    detailsSection: {
      width: "48%",
      padding: 20,
      height: "100%",
      backgroundColor: appColors.AdditionalColor.white,
      borderRadius: 10,
      elevation: 3,
      shadowColor: appColors.GreyScale[900],
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    detailsHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 16,
    },
    titleContainer: {
      width: "100%",
    },
    vehicleTitle: {
      fontSize: 28,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      marginBottom: 8,
      width: "80%",
    },
    vehicleDescription: {
      fontSize: 16,
      width: "100%",
      fontFamily: appFonts.UrbanistRegular,
      color: appColors.GreyScale[600],
      marginBottom: 8,
    },
    actionButtons: {
      flexDirection: "row",
      gap: 8,
      height: "70%",
    },
    iconButton: {
      width: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    specsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
    },
    specItem: {
      alignItems: "center",
      padding: 12,
      backgroundColor: appColors.GreyScale[100],
      borderRadius: 12,
      width: "30%",
    },
    specValue: {
      fontSize: 20,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      marginVertical: 4,
    },
    specUnit: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistRegular,
      color: appColors.GreyScale[500],
    },
    specLabel: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistRegular,
      color: appColors.GreyScale[500],
    },
    testDriveButton: {
      backgroundColor: appColors.main.Primary,
      marginBottom: 16,
    },
    priceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },
    priceLabel: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistRegular,
      color: appColors.GreyScale[500],
    },
    priceValue: {
      fontSize: 24,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    buyButton: {
      backgroundColor: appColors.main.Primary,
    },
    collapsibleSections: {
      borderRadius: 16,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 10,
      marginVertical: 10,
      backgroundColor: appColors.AdditionalColor.white,
      borderRadius: 10,
      shadowColor: appColors.GreyScale[500],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.main.Primary,
    },
    sectionContent: {
      backgroundColor: appColors.AdditionalColor.white,
      padding: 24,
      borderRadius: 10,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
    },
    detailLabel: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[500],
    },
    detailValueContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    brandIcon: {
      width: 24,
      height: 33,
    },
    detailValue: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    colorContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    colorDot: {
      width: 16,
      height: 16,
      borderRadius: 8,
    },
    featureCardsContainer: {
      gap: 16,
    },
    featureCard: {
      borderColor: appColors.GreyScale[200],
      borderRadius: 12,
      overflow: "hidden",
    },
    featureHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: appColors.GreyScale[50],
    },
    featureHeaderLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    featureIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgba(79, 70, 229, 0.1)",
      justifyContent: "center",
      alignItems: "center",
    },
    featureCategoryTitle: {
      fontSize: 16,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    featureItemsContainer: {
      padding: 16,
      gap: 12,
    },
    featureItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    featureItemText: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistRegular,
      color: appColors.GreyScale[700],
    },
    designContainer: {
      gap: 20,
    },
    designCategoryContainer: {
      marginBottom: 16,
    },
    designImagesGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 16,
    },
    designImageContainer: {
      width: "48%",
      borderRadius: 8,
      overflow: "hidden",
    },
    designImage: {
      width: "100%",
      height: 180,
      borderRadius: 8,
    },
    designImageCaption: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[700],
      marginTop: 8,
    },
    icons: {
      height: 24,
      width: 24,
    },
  });

  return (
    <ScrollView
      style={{
        backgroundColor: appColors.GreyScale[100],
        width: "100%",
        alignSelf: "flex-end",
        paddingRight: 70,
        paddingLeft: 34,
      }}
    >
      {/* Main Vehicle Section */}
      <View style={[styles.mainContainer, { paddingHorizontal: 0 }]}>
        {/* Vehicle Image Section - Left Side */}
        <View style={styles.imageSection}>
          <View style={styles.mainImageContainer}>
            <Image
              source={vehicle.images[activeImage]}
              style={styles.mainImage}
              contentFit="cover"
            />
            <View style={styles.threeSixtyButtonContainer}>
              <TouchableOpacity style={styles.threeSixtyButton}>
                <Text style={styles.threeSixtyButtonText}>360</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.thumbnailsContainer}>
            {vehicle.images.slice(0, 3).map((image, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.thumbnailButton,
                  activeImage === index && styles.activeThumbnail,
                ]}
                onPress={() => setActiveImage(index)}
              >
                <Image
                  source={image}
                  style={styles.thumbnailImage}
                  contentFit="contain"
                />
                {index === 2 && vehicle.images.length > 3 && (
                  <TouchableOpacity
                    style={{
                      justifyContent: "center",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      position: "absolute",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Text style={styles.moreImagesCount}>+3</Text>
                    <Text style={styles.moreImagesText}>Images</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Vehicle Details Section - Right Side */}
        <View style={styles.detailsSection}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text style={styles.vehicleTitle}>{vehicle.name}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.iconButton} onPress={toggleLike}>
                <Ionicons
                  name={isLiked ? "heart" : "heart-outline"}
                  size={18}
                  color={isLiked ? "red" : "#000"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setShowModal(true)}
              >
                <Image
                  source={require("@/assets/images/Features/share.png")}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Header with Title, Description, and Action Buttons */}
          <View style={styles.detailsHeader}>
            <View style={[styles.titleContainer, {}]}>
              <Text style={styles.vehicleDescription} numberOfLines={6}>
                {vehicle.description}
              </Text>
            </View>
          </View>

          {/* Specs Row */}
          <View style={styles.specsRow}>
            <View style={styles.specItem}>
              <Image
                source={require("@/assets/images/carlist/engine.png")}
                style={styles.icons}
                tintColor={appColors.GreyScale[900]}
              />
              <Text style={styles.specValue}>
                {vehicle.specs.horsepower}{" "}
                <Text style={styles.specUnit}>HP</Text>
              </Text>
              <Text style={styles.specLabel}>Horsepower</Text>
            </View>
            <View style={styles.specItem}>
              <Image
                source={require("@/assets/images/Features/torque.png")}
                style={styles.icons}
                tintColor={appColors.GreyScale[900]}
              />
              <Text style={styles.specValue}>
                {vehicle.specs.torque}{" "}
                <Text style={styles.specUnit}>lb-ft</Text>
              </Text>
              <Text style={styles.specLabel}>Torque</Text>
            </View>
            <View style={styles.specItem}>
              <Ionicons name="time-outline" size={24} color="#000" />
              <Text style={styles.specValue}>
                {vehicle.specs.acceleration}
                <Text style={styles.specUnit}>sec</Text>
              </Text>
              <Text style={styles.specLabel}>0-60 mph</Text>
            </View>
          </View>

          {/* Test Drive Button */}
          <Button
            title="Free test drive"
            variant="filled"
            fontWeight="UrbanistBold"
            color={appColors.AdditionalColor.white}
            style={styles.testDriveButton}
            width="50%"
            fontSize={12}
            onPress={() => router.push("/schedule_drive" as Href)}
          />

          {/* Price and Buy Section */}
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.priceLabel}>Price (Cash)</Text>
              <Text style={styles.priceValue}>
                ${vehicle.price.toLocaleString()}
              </Text>
            </View>
            <Button
              title="Buy"
              variant="filled"
              fontWeight="UrbanistBold"
              color={appColors.AdditionalColor.white}
              style={styles.buyButton}
              width="50%"
              onPress={() => router.push("/purchase-method" as Href)}
            />
          </View>
        </View>
      </View>

      {/* Collapsible Sections */}
      <View style={styles.collapsibleSections}>
        {/* Vehicle Details Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("vehicle-details")}
        >
          <View style={{ flexDirection: "column", width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Vehicle Details</Text>
              <Ionicons
                name={
                  expandedSection === "vehicle-details"
                    ? "chevron-up"
                    : "chevron-down"
                }
                size={24}
                color="#4F46E5"
              />
            </View>
            {expandedSection === "vehicle-details" && (
              <View style={styles.sectionContent}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Make</Text>
                  <View style={styles.detailValueContainer}>
                    <Image
                      source={require("@/assets/images/carlist/Audi.png")}
                      style={styles.brandIcon}
                      contentFit="contain"
                      tintColor={appColors.GreyScale[900]}
                    />
                    <Text style={styles.detailValue}>{vehicle.details.make}</Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Model</Text>
                  <Text style={styles.detailValue}>{vehicle.details.model}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Exterior color</Text>
                  <View style={styles.colorContainer}>
                    <Image
                      source={require("@/assets/images/carlist/carara.png")}
                      style={{ height: 20, width: 20, borderRadius: 50 }}
                    />
                    <Text style={styles.detailValue}>
                      {vehicle.details.exteriorColor}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Interior color</Text>
                  <Text style={styles.detailValue}>
                    {vehicle.details.interiorColor}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Body</Text>
                  <Text style={styles.detailValue}>{vehicle.details.body}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Seats</Text>
                  <Text style={styles.detailValue}>{vehicle.details.seats}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>VIN</Text>
                  <Text style={styles.detailValue}>{vehicle.details.vin}</Text>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* Features Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("features")}
        >
          <View style={{ flexDirection: "column", width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Features</Text>
              <Ionicons
                name={
                  expandedSection === "features" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="#4F46E5"
              />
            </View>
            {expandedSection === "features" && (
              <>
                <View style={styles.sectionContent}>
                  <View style={styles.featureCardsContainer}>
                    <FeatureCard
                      title="Key specs of Audi Q7"
                      items={featureItems}
                    />
                  </View>
                </View>

                <View style={styles.sectionContent}>
                  <View style={styles.featureCardsContainer}>
                    <FeatureCard title="Performance" items={performance} />
                  </View>
                </View>

                <View style={styles.sectionContent}>
                  <View style={styles.featureCardsContainer}>
                    <FeatureCard title="Notable Features" items={notablefeatures} />
                  </View>
                </View>
              </>
            )}
          </View>
        </TouchableOpacity>

        {/* Design Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("design")}
        >
          <View style={{ flexDirection: "column", width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Design</Text>
              <Ionicons
                name={
                  expandedSection === "design" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="#4F46E5"
              />
            </View>
            {expandedSection === "design" && (
              <View style={styles.sectionContent}>
                <View style={styles.designContainer}>
                  <View style={{ gap: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontFamily: appFonts.UrbanistBold,
                        color: appColors.GreyScale[900],
                      }}
                    >
                      Powerful and sporty - The exterior
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistMedium,
                        color: appColors.GreyScale[500],
                      }}
                    >
                      For an even sportier look, opt for optional Design Packages.
                    </Text>
                  </View>

                  <View
                    style={{
                      height: height * 0.8,
                      borderColor: appColors.GreyScale[200],
                      borderRadius: 12,
                      overflow: "hidden",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: "70%",
                        width: "30%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ height: "48%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/carlist/imgDetails.png")}
                      />
                      <Image
                        style={{ height: "48%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/home/interior.png")}
                      />
                    </View>
                    <View
                      style={{
                        height: "100%",
                        width: "30%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ height: "32%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/carlist/carInterior.png")}
                      />
                      <Image
                        style={{ height: "32%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/carlist/View1.png")}
                      />
                      <Image
                        style={{ height: "32%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/home/laptop.png")}
                      />
                    </View>
                    <View
                      style={{
                        height: "70%",
                        width: "30%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ height: "48%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/home/laptop.png")}
                      />
                      <Image
                        style={{ height: "48%", width: "100%", borderRadius: 8 }}
                        source={require("@/assets/images/home/car.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* Price Map Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("price-map")}
        >
          <View style={{ flexDirection: "column", width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Price Map</Text>
              <Ionicons
                name={
                  expandedSection === "price-map" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="#4F46E5"
              />
            </View>
            {expandedSection === "price-map" && (
              <CarPriceGraph priceItems={tabContent.price_map.data} />
            )}
          </View>
        </TouchableOpacity>

        {/* Financing Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleSection("financing")}
        >
          <View style={{ flexDirection: "column", width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Financing</Text>
              <Ionicons
                name={
                  expandedSection === "financing" ? "chevron-up" : "chevron-down"
                }
                size={24}
                color="#4F46E5"
              />
            </View>
            {expandedSection === "financing" && (
              <View style={styles.sectionContent}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Car Audit</Text>
                  <Text style={styles.detailValue}>
                    {vehicle.finance?.audit || "$79"}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Import MOT</Text>
                  <Text style={styles.detailValue}>
                    {vehicle.finance?.importMOT || "$175"}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Documentation</Text>
                  <View style={styles.colorContainer}>
                    <Text style={styles.detailValue}>
                      {vehicle.finance?.documentation || "$30"}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Car registration</Text>
                  <Text style={styles.detailValue}>
                    {vehicle.finance?.registration || "$80"}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Sales Tax</Text>
                  <Text style={styles.detailValue}>
                    {vehicle.finance?.salesTax || "$5,876"}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: appColors.GreyScale[50],
                    padding: 16,
                    gap: 8,
                    borderRadius: 12,
                  }}
                >
                  <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.detailLabel}>Total Price</Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: appFonts.UrbanistBold,
                        color: appColors.main.Primary,
                      }}
                    >
                      {vehicle.finance?.totalPrice || "$80063"}
                    </Text>
                  </View>

                  <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.detailLabel}>Est. Monthly payment</Text>
                    <Text style={styles.detailValue}>
                      {vehicle.finance?.monthlyPayment || "$1,075"}
                    </Text>
                  </View>
                </View>
                <Button
                  title="Credit Simulation"
                  variant="outlined"
                  onPress={() => router.push("/detail-car" as Href)}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {/* Share Modal Component */}
      <Car360Modal
        visible={showModal}
        onClose={() => setShowModal(false)}
        vehicle={vehicle}
      />
    </ScrollView>
  );
};

export default VehicleDetails;