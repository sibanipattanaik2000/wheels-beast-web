import React, { useState, useEffect, useRef } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import { Image } from "expo-image";

const slides = [
  {
    image: require("@/assets/images/Signup/car.png"),
    title: "Find the best car without headaches",
    subtitle: "You choose your car online. We inspect it and deliver it.",
  },
  {
    image: require("@/assets/images/carlist/bluecar.png"),
    title: "Choose car right for you",
    subtitle: "Answer a few quick questions to find the right car for you.",
  },
  {
    image: require("@/assets/images/home/carimg.png"),
    title: "Let’s get started",
    subtitle: "Sign up or login to see what happening near you.",
  },
];

interface DotsProps {
  onIndexChange: (index: number) => void; // Explicitly type the prop
}

const Dots: React.FC<DotsProps> = ({ onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
          return nextIndex;
        });
      }, 3000); // 5 seconds
    };

    startTimer();

    // Cleanup interval on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Notify parent when index changes
  useEffect(() => {
    if (onIndexChange) onIndexChange(currentIndex);
  }, [currentIndex, onIndexChange]);

  // Handle manual dot click and reset timer
  const handleDotPress = (index: number) => {
    setCurrentIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear existing timer
    }
    // Restart timer
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, 5000);
  };

  const currentSlide = slides[currentIndex];

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: appColors.main.Primary,
      }}
    >
      {currentIndex === 0 ? (
        <ImageBackground
          source={currentSlide.image}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        />
      ) : currentIndex === 1 ? (
        <Image
          source={require("@/assets/images/carlist/bluecar.png")}
          style={{
            width: "100%",
            height: "60%",
            resizeMode: "contain",
            position: "absolute",
            bottom: 0,
          }}
        />
      ) : (
        <Image
          source={require("@/assets/images/home/carimg.png")}
          style={{
            width: "100%",
            height: "60%",
            resizeMode: "contain",
            position: "absolute",
            bottom: 50,
            alignSelf: "center",
          }}
        />
      )}
      {/* <ImageBackground
        source={currentSlide.image}
        style={{ width: "100%", height:currentIndex===0? "100%":currentIndex===1?'80%':"70%" }}
        resizeMode="stretch"
      > */}
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
      {/* </ImageBackground> */}
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
              onPress={() => handleDotPress(index)}
              style={{
                width: isActive ? 24 : 10,
                height: 10,
                borderRadius: 5,
                backgroundColor:isActive?appColors.AdditionalColor.white: appColors.GreyScale[700],
                transitionDuration: "300ms",
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Dots;
