import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface FilterDropdownProps {
  filterLabel: string;
  options: string[];
  selectedOption: string;
  showDropdown: boolean;
  defaultOption: string;
  toggleDropdown: () => void;
  applyFilter: (option: string) => void;
}

const FilterDropdown = ({
  filterLabel,
  options,
  selectedOption,
  showDropdown,
  defaultOption,
  toggleDropdown,
  applyFilter,
}: FilterDropdownProps) => {
  const isActive = selectedOption !== defaultOption;

  return (
    <View style={styles.filterDropdown}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          isActive && styles.activeFilterButton,
        ]}
        onPress={toggleDropdown}
      >
        <Text
          style={[
            styles.filterButtonText,
            isActive && styles.activeFilterButtonText,
          ]}
        >
          {selectedOption}
        </Text>
        <Ionicons
          name={showDropdown ? "chevron-up" : "chevron-down"}
          size={20}
          color={isActive ? "#4F46E5" : "#000000"}
        />
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdownContent}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => applyFilter(option)}
            >
              <Text
                style={[
                  styles.dropdownItemText,
                  selectedOption === option && styles.activeFilterButtonText,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filterDropdown: {
    position: "relative",
    zIndex: 1,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 38,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: "transparent",
  },
  activeFilterButton: {
    borderColor: "#4F46E5",
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
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
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
});

export default FilterDropdown; 