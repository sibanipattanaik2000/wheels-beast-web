import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

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
    carImage: require("@/assets/images/Signup/car.png"),
    seller: "Seller's",
    country: "USA",
    price: "$80,063.00",
    status: "ongoing"
  },
  {
    id: "2",
    date: "June 05, 2025",
    carName: "Ford Mustang GT",
    carImage: require("@/assets/images/Signup/car.png"),
    seller: "Seller's",
    country: "USA",
    price: "$176,037.11",
    status: "ongoing"
  },
  {
    id: "3",
    date: "May 25, 2025",
    carName: "BMW X5 xDrive",
    carImage: require("@/assets/images/Signup/car.png"),
    seller: "Seller's",
    country: "Germany",
    price: "$95,250.00",
    status: "completed"
  },
  {
    id: "4",
    date: "April 18, 2025",
    carName: "Tesla Model S",
    carImage: require("@/assets/images/Signup/car.png"),
    seller: "Seller's",
    country: "USA",
    price: "$112,490.00",
    status: "canceled"
  }
];

const MyPurchases = () => {
  // State for progress filter dropdown
  const [progressFilter, setProgressFilter] = useState<string>("On progress");
  const [showProgressDropdown, setShowProgressDropdown] = useState<boolean>(false);

  // State for date filter dropdown
  const [dateFilter, setDateFilter] = useState<string>("All dates");
  const [showDateDropdown, setShowDateDropdown] = useState<boolean>(false);

  // State for model filter dropdown
  const [modelFilter, setModelFilter] = useState<string>("All Models");
  const [showModelDropdown, setShowModelDropdown] = useState<boolean>(false);
  
  // Filter options
  const progressOptions = ["On progress", "Completed", "Canceled", "All"];
  const dateOptions = ["All dates", "Last 30 days", "Last 90 days", "Last year"];
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
    <View style={styles.container}>
      <Text style={styles.title}>My Purchases</Text>

      {/* Filters */}
      <View style={styles.filtersContainer}>
    
        <View style={styles.filterButtons}>
         <TouchableOpacity style={{backgroundColor:appColors.AdditionalColor.white,borderRadius:12,paddingHorizontal:10,paddingVertical:8,gap:4}}>
     <Ionicons name="close" size={24} color={appColors.GreyScale[900]} />
     </TouchableOpacity>
          {/* Progress Filter */}
          <View style={styles.filterDropdown}>
            <TouchableOpacity 
              style={[
                styles.filterButton, 
                progressFilter !== "All" && styles.activeFilterButton
              ]} 
              onPress={toggleProgressDropdown}
            >
              <Text style={[
                styles.filterButtonText,
                progressFilter !== "All" && styles.activeFilterButtonText
              ]}>
                {progressFilter}
              </Text>
              <Ionicons 
                name={showProgressDropdown ? "chevron-up" : "chevron-down"} 
                size={20} 
                color={progressFilter !== "All" ? "#4F46E5" : "#000000"} 
              />
            </TouchableOpacity>
            
            {showProgressDropdown && (
              <View style={styles.dropdownContent}>
                {progressOptions.map((option, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.dropdownItem}
                    onPress={() => applyProgressFilter(option)}
                  >
                    <Text style={[
                      styles.dropdownItemText,
                      progressFilter === option && styles.activeFilterButtonText
                    ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Date Filter */}
          <View style={styles.filterDropdown}>
            <TouchableOpacity 
              style={[
                styles.filterButton, 
                dateFilter !== "All dates" && styles.activeFilterButton
              ]} 
              onPress={toggleDateDropdown}
            >
              <Text style={[
                styles.filterButtonText,
                dateFilter !== "All dates" && styles.activeFilterButtonText
              ]}>
                {dateFilter}
              </Text>
              <Ionicons 
                name={showDateDropdown ? "chevron-up" : "chevron-down"} 
                size={20} 
                color={dateFilter !== "All dates" ? "#4F46E5" : "#000000"} 
              />
            </TouchableOpacity>
            
            {showDateDropdown && (
              <View style={styles.dropdownContent}>
                {dateOptions.map((option, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.dropdownItem}
                    onPress={() => applyDateFilter(option)}
                  >
                    <Text style={[
                      styles.dropdownItemText,
                      dateFilter === option && styles.activeFilterButtonText
                    ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Model Filter */}
          <View style={styles.filterDropdown}>
            <TouchableOpacity 
              style={[
                styles.filterButton, 
                modelFilter !== "All Models" && styles.activeFilterButton
              ]} 
              onPress={toggleModelDropdown}
            >
              <Text style={[
                styles.filterButtonText,
                modelFilter !== "All Models" && styles.activeFilterButtonText
              ]}>
                {modelFilter}
              </Text>
              <Ionicons 
                name={showModelDropdown ? "chevron-up" : "chevron-down"} 
                size={20} 
                color={modelFilter !== "All Models" ? "#4F46E5" : "#000000"} 
              />
            </TouchableOpacity>
            
            {showModelDropdown && (
              <View style={styles.dropdownContent}>
                {modelOptions.map((option, index) => (
                  <TouchableOpacity 
                    key={index} 
                    style={styles.dropdownItem}
                    onPress={() => applyModelFilter(option)}
                  >
                    <Text style={[
                      styles.dropdownItemText,
                      modelFilter === option && styles.activeFilterButtonText
                    ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Car Audit Button */}
        <TouchableOpacity style={styles.auditButton}>
          <Ionicons name="car-outline" size={24} color="#4F46E5" />
          <Text style={styles.auditButtonText}>Car Audit</Text>
          <View style={styles.notificationDot} />
          <Ionicons name="chevron-forward" size={20} color="#4F46E5" />
        </TouchableOpacity>
      </View>

      {/* Purchases List */}
      <ScrollView style={styles.purchasesList}>
        <View style={styles.purchasesGrid}>
          {filteredPurchases.map((purchase, index) => (
            <View key={index} style={styles.purchaseCard}>
              {/* Date with calendar icon */}
              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={20} color="#4F46E5" />
                <Text style={styles.dateText}>{purchase.date}</Text>
              </View>

              {/* Car Image and Details */}
              <View style={styles.carDetailsContainer}>
                <Image source={purchase.carImage} style={styles.carImage} />
                
                <View style={styles.detailsContent}>
                  <Text style={styles.carName}>{purchase.carName}</Text>
                  
                  <View style={styles.sellerContainer}>
                    <Text style={styles.sellerText}>{purchase.seller}</Text>
                    {/* USA Flag and Country */}
                    <View style={styles.countryContainer}>
                      <Image 
                        source={require("@/assets/images/mypurchase/US.png")} 
                        style={styles.flagIcon} 
                      />
                      <Text style={styles.countryText}>{purchase.country}</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Status and Price */}
              <View style={styles.bottomContainer}>
                <TouchableOpacity 
                  style={getStatusButtonStyle(purchase.status)}
                >
                  <Text style={getStatusTextStyle(purchase.status)}>
                    {getStatusButtonText(purchase.status)}
                  </Text>
                </TouchableOpacity>
                
                <Text style={styles.priceText}>{purchase.price}</Text>
              </View>
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
    paddingHorizontal:70,
    paddingVertical:47,
    gap:36
  },
  title: {
    fontSize: 32,
    fontFamily: appFonts.UrbanistBold,
    color:appColors.GreyScale[900]
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  filterButtons: {
    flexDirection: "row",
    gap: 10,
  },
  filterDropdown: {
    position: "relative",
    zIndex: 1,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    gap:4,
    borderWidth: 1,
    borderColor:"transparent"
  },
  activeFilterButton: {
    borderColor: "#4F46E5",
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: "#000000",
  },
  activeFilterButtonText: {
    color: "#4F46E5",
  },
  dropdownContent: {
    position: "absolute",
    top: 48,
    left: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  dropdownItemText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: "#000000",
  },
  auditButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    gap: 8,
  },
  auditButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: "#000000",
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
    zIndex: 1,
  },
  purchaseCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  dateText: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistMedium,
    color: "#000000",
  },
  carDetailsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 16,
  },
  carImage: {
    width: 150,
    height: 120,
    borderRadius: 10,
    resizeMode: "contain",
  },
  detailsContent: {
    flex: 1,
    justifyContent: "center",
  },
  carName: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: "#000000",
    marginBottom: 16,
  },
  sellerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sellerText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    color: "#4F46E5",
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
    color: "#000000",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
    borderWidth: 1,
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
    color: "#000000",
  },
});

export default MyPurchases; 