import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const PriceRange = () => {
  const [values, setValues] = useState([23000, 80000]);
  const minPrice = 0;
  const maxPrice = 100000;

  const onValuesChange = (newValues: number[]) => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      {/* Slider with histogram */}
      <View style={styles.sliderWrapper}>
        {/* Histogram image overlay */}
        <Image
          source={require("@/assets/images/histogram.png")}
          resizeMode="contain"
          style={styles.histogram}
        />

        {/* MultiSlider */}
        <MultiSlider
          values={values}
          onValuesChange={onValuesChange}
          min={minPrice}
          max={maxPrice}
          step={1000}
          sliderLength={250}
          allowOverlap={false}
          snapped
          selectedStyle={{ backgroundColor: "#4335F2" }}
          unselectedStyle={{ backgroundColor: "#e0e0e0" }}
          markerStyle={styles.thumb}
          containerStyle={styles.slider}
        />
      </View>
      {/* Label Row */}
      <View style={styles.labelRow}>
        <View style={styles.labelBox}>
          <Text style={styles.labelText}>${values[0].toLocaleString()}</Text>
        </View>
        <Text style={styles.dash}>-</Text>
        <View style={styles.labelBox}>
          <Text style={styles.labelText}>${values[1].toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 40,
    backgroundColor: "#fff",
    width: "100%",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  labelBox: {
    backgroundColor: "#F1F1F1",
    padding: 10,
    borderRadius: 20,
  },
  labelText: {
    color: "#1A1D29",
    fontWeight: "bold",
    fontSize: 20,
  },
  dash: {
    fontSize: 30,
    marginHorizontal: 10,
    color: "#1A1D29",
  },
  sliderWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  histogram: {
    position: "absolute",
    width: "70%",
    height: 50,
    resizeMode: "contain",
    bottom: 31,
  },
  slider: {
    height: 40,
    marginTop: 20,
    zIndex: 1,
  },
  thumb: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#4335F2",
  },
});

export default PriceRange;
