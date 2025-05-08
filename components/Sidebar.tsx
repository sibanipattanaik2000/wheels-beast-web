import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import PriceRange from "./PriceRange";
import CheckBox from "./CheckBox";

const FilterSection = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const visibleOptions = showMore ? options : options.slice(0, 6);
  const { height, width } = useWindowDimensions();
  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };


  const styles = StyleSheet.create({
    header: {
      fontSize: 26,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      letterSpacing: 3.5,
    },
    optionRow: { flexDirection: "row", alignItems: "center", gap: 8 },
    moreText: {
      color: appColors.GreyScale[900],
      fontSize: 20,
      fontFamily: appFonts.UrbanistMedium,
    },
    option: {
      fontSize: 22,
      color: appColors.GreyScale[900],
      fontFamily: appFonts.UrbanistSemiBold,
    },
  });

  return (
    <View style={{ gap: 28, marginBottom: 20 , }}>
      <Text style={styles.header}>{title}</Text>
      {visibleOptions.map((option, index) => (
        <View key={index} style={styles.optionRow}>
          <CheckBox
            value={selected.includes(option)}
            onValueChange={() => toggleOption(option)}
            color={
              selected.includes(option) ? "rgba(53, 99, 233, 1)": undefined
            }
            style={{height:20, width:20, borderRadius:5}}
            // style={{borderWidth:1,borderRadius:20,borderColor:appColors.GreyScale[900],height:20,width:20}}
          />
          <Text style={styles.option}>{option}</Text>
        </View>
      ))}
      {options.length > 6 && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={styles.moreText}>{showMore ? "Less" : "More"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const SidebarComponent = () => {
  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(250000);
  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    sidebar: {
      padding: 32,
      width: "100%",
      backgroundColor: appColors.AdditionalColor.white,

    },
    header: {
      fontSize: 24,
      fontFamily: appFonts.UrbanistBold,
      marginBottom: 10,
      color: appColors.GreyScale[900],
      letterSpacing: 0.9,
    },
  });

  return (
    <ScrollView style={styles.sidebar} showsHorizontalScrollIndicator={false}>
      <FilterSection
        title="TYPE"
        options={[
          "Sport (10)",
          "SUV (20)",
          "MPV (12)",
          "Sedan (14)",
          "Coupe (6)",
          "Hatchback (11)",
          "Crossover (8)",
          "Convertible (5)",
        ]}
      />
      <FilterSection
        title="BRAND"
        options={[
          "BMW (10)",
          "Ferrari (10)",
          "Mercedes (10)",
          "Audi (10)",
          "Mini Cooper (10)",
          "Tesla (10)",
          "Jaguar (10)",
          "Toyota (10)",
        ]}
      />
      <FilterSection
        title="MULTIMEDIA"
        options={[
          "Android Auto",
          "Apple CarPlay",
          "Dab Radio",
          "HeadUp Dispaly",
          "On-Board Computer",
          "Navigation System",
          "WLAN/Wifi Hotsport",
        ]}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>PRICE RANGE</Text>

        <PriceRange />
      </View>
    </ScrollView>
  );
};
