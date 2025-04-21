import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

const slides = [
  {
    image: require("@/assets/images/Signup/car.png"),
    title: "Find the best car without headaches",
    subtitle: "You choose your car online. We inspect it and deliver it.",
  },
  {
    image: require("@/assets/images/Signup/car.png"),
    title: "Choose car right for you",
    subtitle: "Answer a few quick questions to find the right car for you.",
  },
  {
    image: require("@/assets/images/Signup/car.png"),
    title: "Let’s get started",
    subtitle: "Sign up or login to see what happening near you.",
  },
];

interface DotsProps {
  onIndexChange: (index: number) => void; // Explicitly type the prop
}

const Dots: React.FC<DotsProps> = ({ onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Notify parent when index changes
  useEffect(() => {
    if (onIndexChange) onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  const currentSlide = slides[currentIndex];

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={currentSlide.image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="stretch"
      >
        <View style={{ position: "absolute", padding: 60, gap: 12 }}>
          <Text
            style={{
              fontSize: 54,
              color: appColors.AdditionalColor.white,
              fontFamily: appFonts.UrbanistBold,
            }}
          >
            {currentSlide.title}
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: appColors.GreyScale[400],
              fontFamily: appFonts.UrbanistMedium,
            }}
          >
            {currentSlide.subtitle}
          </Text>
        </View>

        {/* Slider Dots */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: [{ translateX: "-50%" }],
          }}
        >
          {slides.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentIndex(index)}
                style={{
                  width: isActive ? 24 : 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: appColors.GreyScale[200],
                  transitionDuration: "300ms",
                }}
              />
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Dots;