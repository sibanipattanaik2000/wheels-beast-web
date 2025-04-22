import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  PanResponder,
  useWindowDimensions,
} from "react-native";
interface CustomSliderProps {
  onValueChange?: (value: number) => void;
  label?: string;
  sliderWidth?: number;
  knobColor?: string;
  trackColor?: string;
  progressColor?: string;
  initialValue?: number;
}

const CustomSlider = ({ 
  onValueChange,
  label,
  sliderWidth,
  knobColor = appColors.main.Primary,
  trackColor = appColors.GreyScale[100],
  progressColor = appColors.main.Primary,
  initialValue = 0
}: CustomSliderProps) => {
  const { width } = useWindowDimensions();
  
  // Slider dimensions
  const SLIDER_WIDTH = sliderWidth || width - 70;
  const SLIDER_HEIGHT = 12;
  const KNOB_SIZE = 30;
  const INNER_CIRCLE_SIZE = 13;
  
  // Calculate initial position based on initialValue
  const initialPosition = (initialValue / 100) * (SLIDER_WIDTH - KNOB_SIZE);
  
  const [position, setPosition] = useState(initialPosition);
  const [percentage, setPercentage] = useState(initialValue);
  
  // Update slider knob position and percentage
  const updatePosition = (x: number) => {
    const newPos = Math.max(0, Math.min(x, SLIDER_WIDTH - KNOB_SIZE));
    const newPercentage = (newPos / (SLIDER_WIDTH - KNOB_SIZE)) * 100;

    setPosition(newPos);
    setPercentage(newPercentage);
    if (onValueChange) {
      onValueChange(newPercentage);
    }
  };
  // Handle pan gesture for knob dragging
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      updatePosition(gestureState.moveX - KNOB_SIZE / 2);
    },
    onPanResponderRelease: () => {},
  });
  // Handle tap on slider track
  const handlePress = (event: any) => {
    const { locationX } = event.nativeEvent;
    updatePosition(locationX - KNOB_SIZE / 2);
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      width: SLIDER_WIDTH,
    },
    labelContainer: {
      alignSelf: "flex-start",
      marginBottom: 12,
    },
    labelText: {
      fontFamily: appFonts.UrbanistMedium,
      fontSize: 16,
      color: appColors.GreyScale[700],
    },
    sliderContainer: {
      width: SLIDER_WIDTH,
      height: SLIDER_HEIGHT,
      backgroundColor: trackColor,
      borderRadius: SLIDER_HEIGHT / 2,
      position: "relative",
      elevation: 2,
      shadowColor: "#00000090",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
    },
    progressBar: {
      position: "absolute",
      height: SLIDER_HEIGHT,
      backgroundColor: progressColor,
      borderRadius: SLIDER_HEIGHT / 2,
    },
    knob: {
      width: KNOB_SIZE,
      height: KNOB_SIZE,
      borderRadius: KNOB_SIZE / 2,
      backgroundColor: knobColor,
      position: "absolute",
      top: -KNOB_SIZE / 2 + SLIDER_HEIGHT / 2,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderColor: "#fff",
      elevation: 5,
      shadowColor: "#000",
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 5,
    },
    innerCircle: {
      width: INNER_CIRCLE_SIZE,
      height: INNER_CIRCLE_SIZE,
      borderRadius: INNER_CIRCLE_SIZE / 2,
      backgroundColor: "#fff",
    },
    percentageText: {
      fontSize: 14,
      position: "absolute",
      bottom: -33,
      padding: 5,
      borderRadius: 10,
      color: appColors.AdditionalColor.white,
      textAlign: "center",
      width: 50,
      backgroundColor: knobColor,
      fontFamily: appFonts.UrbanistBold,
    },
    percentageContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 16,
      width: "100%",
    },
    percentageValue: {
      fontFamily: appFonts.UrbanistSemiBold,
      fontSize: 14,
      color: appColors.GreyScale[900],
    },
  });

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
      
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.sliderContainer}>
          {/* Progress Bar */}
          <View
            style={[styles.progressBar, { width: position + KNOB_SIZE / 2 }]}
          />
          {/* Slider Knob with percentage */}
          <View
            style={[styles.knob, { transform: [{ translateX: position }] }]}
            {...panResponder.panHandlers}
          >
            {/* Display percentage text */}
            <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
            <View style={styles.innerCircle} />
          </View>
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
};

export default CustomSlider;