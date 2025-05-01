import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import ProgressCard from "./ProgressCard";
import FilterDropdown from "./FilterDropdown";
import { Href, useRouter } from "expo-router";

// Define interface for purchase data
interface Purchase {
  id: string;
  date: string;
  carName: string;
  carImage: any;
  seller: string;
  country: string;
  price: string;
  status: "ongoing" | "completed" | "canceled";
}

// Sample data for purchases
const purchaseData: Purchase[] = [
  {
    id: "1",
    date: "June 10, 2025",
    carName: "Audi Q7 Quattro",
    carImage: require("@/assets/images/carlist/bluecar.png"),
    seller: "Seller's",
    country: "USA",
    price: "$80,063.00",
    status: "ongoing",
  },
  {
    id: "2",
    date: "June 05, 2025",
    carName: "Ford Mustang GT",
    carImage: require("@/assets/images/carlist/redcar.png"),
    seller: "Seller's",
    country: "USA",
    price: "$176,037.11",
    status: "ongoing",
  },
  {
    id: "3",
    date: "May 25, 2025",
    carName: "BMW X5 xDrive",
    carImage: require("@/assets/images/carlist/bluecar.png"),
    seller: "Seller's",
    country: "Germany",
    price: "$95,250.00",
    status: "completed",
  },
  {
    id: "4",
    date: "April 18, 2025",
    carName: "Tesla Model S",
    carImage: require("@/assets/images/carlist/redcar.png"),
    seller: "Seller's",
    country: "USA",
    price: "$112,490.00",
    status: "canceled",
  },
];

const MyPurchases = () => {
const router= useRouter();
  const [progressFilter, setProgressFilter] = useState<string>("On progress");
  const [showProgressDropdown, setShowProgressDropdown] =
    useState<boolean>(false);

  // State for date filter dropdown
  const [dateFilter, setDateFilter] = useState<string>("All dates");
  const [showDateDropdown, setShowDateDropdown] = useState<boolean>(false);

  // State for model filter dropdown
  const [modelFilter, setModelFilter] = useState<string>("All Models");
  const [showModelDropdown, setShowModelDropdown] = useState<boolean>(false);

  // Filter options
  const progressOptions = ["On progress", "Completed", "Canceled", "All"];
  const dateOptions = [
    "All dates",
    "Last 30 days",
    "Last 90 days",
    "Last year",
  ];
  const modelOptions = ["All Models", "Audi", "Ford", "BMW", "Tesla"];

  // Toggle dropdown visibility
  const toggleProgressDropdown = () => {
    setShowProgressDropdown(!showProgressDropdown);
    setShowDateDropdown(false);
    setShowModelDropdown(false);
  };

  const toggleDateDropdown = () => {
    setShowDateDropdown(!showDateDropdown);
    setShowProgressDropdown(false);
    setShowModelDropdown(false);
  };

  const toggleModelDropdown = () => {
    setShowModelDropdown(!showModelDropdown);
    setShowProgressDropdown(false);
    setShowDateDropdown(false);
  };

  // When selecting a dropdown option, set the filter and update the cards
  const applyProgressFilter = (option: string) => {
    setProgressFilter(option);
    setShowProgressDropdown(false);
  };

  const applyDateFilter = (option: string) => {
    setDateFilter(option);
    setShowDateDropdown(false);
  };

  const applyModelFilter = (option: string) => {
    setModelFilter(option);
    setShowModelDropdown(false);
  };

  // Filter purchases based on selected filters
  const filteredPurchases = purchaseData.filter((purchase: Purchase) => {
    // Filter by progress status
    if (progressFilter !== "All") {
      if (progressFilter === "On progress" && purchase.status !== "ongoing") {
        return false;
      }
      if (progressFilter === "Completed" && purchase.status !== "completed") {
        return false;
      }
      if (progressFilter === "Canceled" && purchase.status !== "canceled") {
        return false;
      }
    }

    // Filter by date (simplified for demo)
    if (dateFilter !== "All dates") {
      // In a real app, implement date filtering logic
    }

    // Filter by car model
    if (modelFilter !== "All Models") {
      const modelName = modelFilter.toLowerCase();
      if (!purchase.carName.toLowerCase().includes(modelName)) {
        return false;
      }
    }

    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Purchases</Text>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={{
              backgroundColor: appColors.AdditionalColor.white,
              borderRadius: 12,
              paddingHorizontal: 10,
              paddingVertical: 8,
              gap: 4,
            }}
          >
            <Ionicons name="close" size={24} color={appColors.GreyScale[900]} />
          </TouchableOpacity>
          
          {/* Progress Filter */}
          <FilterDropdown
            filterLabel="Progress"
            options={progressOptions}
            selectedOption={progressFilter}
            showDropdown={showProgressDropdown}
            defaultOption="All"
            toggleDropdown={toggleProgressDropdown}
            applyFilter={applyProgressFilter}
          />

          {/* Date Filter */}
          <FilterDropdown
            filterLabel="Date"
            options={dateOptions}
            selectedOption={dateFilter}
            showDropdown={showDateDropdown}
            defaultOption="All dates"
            toggleDropdown={toggleDateDropdown}
            applyFilter={applyDateFilter}
          />

          {/* Model Filter */}
          <FilterDropdown
            filterLabel="Model"
            options={modelOptions}
            selectedOption={modelFilter}
            showDropdown={showModelDropdown}
            defaultOption="All Models"
            toggleDropdown={toggleModelDropdown}
            applyFilter={applyModelFilter}
          />
        </View>

        {/* Car Audit Button */}
        <TouchableOpacity style={styles.auditButton} >
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: appColors.GreyScale[50],
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/mypurchase/car.png")}
                style={{ width: 24, height: 24, resizeMode: "contain" }}
              />
            </View>
            <Text style={styles.auditButtonText}>Car Audit</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <View
              style={{
                height: 16,
                width: 16,
                backgroundColor: "#0F172A",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.AdditionalColor.white,
                }}
              >
                1
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={appColors.GreyScale[500]}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Purchases List */}
      <ScrollView style={styles.purchasesList}>
        <View style={styles.purchasesGrid}>
          {filteredPurchases.map((purchase, index) => (
            <View key={index} style={styles.purchaseItemContainer}>
              {/* Date with calendar icon - outside of the card */}
              <View style={styles.dateContainer}>
                <Image source={require('@/assets/images/Profile/calendar.png')} style={{height:30,width:30,tintColor:appColors.GreyScale[600]}}/>
                <Text style={styles.dateText}>{purchase.date}</Text>
              </View>

              {/* Progress Card */}
              <ProgressCard
                carName={purchase.carName}
                carImage={purchase.carImage}
                seller={purchase.seller}
                country={purchase.country}
                price={purchase.price}
                status={purchase.status}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 70,
    paddingVertical: 47,
  },
  title: {
    fontSize: 32,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    marginTop: 20,
  },
  filterButtons: {
    flexDirection: "row",
    gap: 10,
  },
  auditButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 14,
    gap: 8,
    justifyContent: "space-between",
    width: "20%",
  },
  auditButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4F46E5",
  },
  purchasesList: {
    flex: 1,
  },
  purchasesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  purchaseItemContainer: {
    width: "48%",
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:30,
    gap: 16,
  },
  dateText: {
    fontSize: 30,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[500],
  },
});

export default MyPurchases;
