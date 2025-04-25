import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  PanResponder,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { appColors } from "@/constants/Color";
interface CustomSliderProps {
  onValueChange?: (value: number) => void;
  sliderbgColor?:string;
  fillColor:string;
}
 
const Slider = ({ onValueChange,sliderbgColor,fillColor }: CustomSliderProps) => {
  const [position, setPosition] = useState(0);
  const [percentage, setPercentage] = useState(0);
const{width}=useWindowDimensions();
  const SLIDER_WIDTH = (width - 32) / 3 - 30; 
  const SLIDER_HEIGHT = 12;
  const KNOB_SIZE = 30;
  const INNER_CIRCLE_SIZE = 13;
 
  const updatePosition = (x: number) => {
    const newPos = Math.max(0, Math.min(x, SLIDER_WIDTH - KNOB_SIZE));
    const newPercentage = (newPos / (SLIDER_WIDTH - KNOB_SIZE)) * 100;
   
    setPosition(newPos);
    setPercentage(newPercentage);
    if (onValueChange) {
      onValueChange(newPercentage);
    }
  };
 
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      updatePosition(gestureState.moveX - KNOB_SIZE / 2);
    },
    onPanResponderRelease: () => {},
  });
 
  const handlePress = (event: any) => {
    const { locationX } = event.nativeEvent;
    updatePosition(locationX - KNOB_SIZE / 2);
  };
 
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    sliderContainer: {
      width: SLIDER_WIDTH,
      height: SLIDER_HEIGHT,
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
      backgroundColor:fillColor?fillColor: appColors.GreyScale[200],
      borderRadius: SLIDER_HEIGHT / 2,
    },
    knob: {
      width: KNOB_SIZE,
      height: KNOB_SIZE,
      borderRadius: KNOB_SIZE / 2,
      backgroundColor:fillColor,
      position: "absolute",
      top: -KNOB_SIZE / 2 + SLIDER_HEIGHT / 2,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: appColors.GreyScale[700],
    },
   
 
  });
 
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.sliderContainer}>
          <View
            style={[
              styles.progressBar,
              { width: position + KNOB_SIZE / 2 }
            ]}
          />
          <View
            style={[
              styles.knob,
              { transform: [{ translateX: position }] }
            ]}
            {...panResponder.panHandlers}
          >
           <View style={{flexDirection:"row",}}>
            <Ionicons name="caret-back" size={10} color={"#fff"}/>
            <Ionicons name="caret-forward" size={10} color={"#fff"}/>
           </View>
           
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
 
 
export default Slider;