import { View, Text, ScrollView, StyleSheet, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import CarPurchase from "@/components/CarPurchase";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import Button from "@/components/Button";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

// Define step type
interface Step {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  status: "completed" | "active" | "upcoming";
  animation?: Animated.Value;
  icon: any; // Icon source
}

const TrackingProcess = () => {
  // Animation values for timeline and steps
  const lineHeightAnim = useRef(new Animated.Value(0)).current;
  const step1Anim = useRef(new Animated.Value(0)).current;
  const step2Anim = useRef(new Animated.Value(0)).current;
  const step3Anim = useRef(new Animated.Value(0)).current;

  // Steps data - in order from bottom to top
  const steps: Step[] = [
    {
      id: 1,
      title: "Payment verified",
      subtitle: "Credit Card",
      date: "Jul 23, 14:42",
      status: "completed", // Already completed
      animation: step1Anim,
      icon: require("@/assets/images/track/file.png"), // Payment icon
    },
    {
      id: 2,
      title: "Package is processed",
      subtitle: "At sender's facility",
      date: "Jul 24, 06:05",
      status: "completed", // Already completed
      animation: step2Anim,
      icon: require("@/assets/images/track/box.png"), // Process icon
    },
    {
      id: 3,
      title: "Package is being sent",
      subtitle: "With cargo",
      date: "Jul 25, 12:15",
      status: "active", // Current step
      animation: step3Anim,
      icon: require("@/assets/images/track/truck.png"), // Shipping icon
    },
    {
      id: 4,
      title: "Package delivered",
      subtitle: "To recipient's address",
      date: "Jul 27, 08:00",
      status: "upcoming", // Not completed yet
      icon: require("@/assets/images/track/boxtick.png"), // Delivery icon
    },
  ];

  // Animate the timeline line and steps from bottom to top
  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // First step animation
      Animated.parallel([
        Animated.timing(lineHeightAnim, {
          toValue: 25,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(step1Anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // Second step animation
      Animated.parallel([
        Animated.timing(lineHeightAnim, {
          toValue: 50,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(step2Anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      // Third (current) step animation
      Animated.parallel([
        Animated.timing(lineHeightAnim, {
          toValue: 75,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(step3Anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginHorizontal: 70,
            marginVertical: 47,
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "50%", alignSelf: "center" }}>
            <CarPurchase
              carName="Audi Q7 50 Quattro"
              horsepower="335 hp"
              transmission="Automatic"
              logoSource={require("@/assets/images/carlist/Audi.png")}
              engineSource={require("@/assets/images/carlist/engine.png")}
              gearboxSource={require("@/assets/images/carlist/gear.png")}
              carImageSource={require("@/assets/images/brand/whitecar.png")}
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.contentContainer}>
              {/* Header with tracking number */}
              <View style={{backgroundColor:appColors.GreyScale[50],margin:30,borderRadius:20,gap:24,padding:24}}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center",gap:12 }}>
                  <View
                    style={{
                      backgroundColor: appColors.AdditionalColor.white,
                      height: 48,
                      width: 48,
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      source={require("@/assets/images/track/truckk.png")}
                      style={{ width: 20, height: 20, resizeMode: "contain" }}
                    />
                  </View>
                  <View>
                    <Text style={styles.trackingNumber}>#1998442MPX</Text>
                    <Text style={styles.trackingLabel}>Order Progress</Text>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={appColors.GreyScale[500]}
                />
              </View>

              {/* Estimated delivery and shipping info */}
              <View >
                <View style={styles.deliveryInfoRow}>
                  <View>
                    <Text style={styles.deliveryInfoLabel}>
                      Estimated delivery
                    </Text>
                    <Text style={styles.deliveryInfoValue}>July 29, 2023</Text>
                  </View>
                  <View>
                    <Text style={styles.deliveryInfoLabel}>Shipper</Text>
                    <Text style={styles.deliveryInfoValue}>DHL Express</Text>
                  </View>
                </View>
              </View>
              </View>
              {/* Delivery status timeline */}
              <View style={styles.timelineContainer}>
                <Text style={styles.timelineHeader}>Delivery status</Text>

                <View style={styles.timelineWrapper}>
                  {/* Timeline vertical line - split into completed and remaining */}
                  <View style={styles.timelineLineContainer}>
                    {/* Gray line for entire height */}
                    <View style={styles.timelineGrayLine} />

                    {/* Animated blue line overlay to show progress */}
                    <Animated.View
                      style={[
                        styles.timelineActiveLine,
                        {
                          height: lineHeightAnim.interpolate({
                            inputRange: [0, 25, 50, 75, 100],
                            outputRange: ["0%", "25%", "50%", "75%", "100%"],
                          }),
                        },
                      ]}
                    />
                  </View>

                  {/* Render steps in reverse order (top to bottom) */}
                  {[...steps].reverse().map((step, index) => {
                    const isLast = index === steps.length - 1;

                    // Generate appropriate styles based on status
                    const iconContainerStyle = [
                      styles.timelineIconContainer,
                      step.status === "completed" && styles.completedIcon,
                      step.status === "active" && styles.activeIcon,
                      step.status === "upcoming" && styles.upcomingIcon,
                    ];

                    const titleStyle = [
                      styles.timelineTitle,
                      step.status === "active" && styles.activeTitle,
                    ];

                    // Create the step element
                    const stepContent = (
                      <View
                        key={`content-${step.id}`}
                        style={[styles.timelineStep, isLast && styles.lastStep]}
                      >
                        <View style={iconContainerStyle}>
                          {step.status === "completed" ? (
                            <Image
                              source={step.icon}
                              style={styles.timelineIcon}
                              contentFit="contain"
                            />
                          ) : (
                            <Image
                              source={step.icon}
                              style={[
                                styles.timelineIcon,
                                step.status === "active"
                                  ? styles.activeIconImage
                                  : styles.upcomingIconImage,
                              ]}
                              contentFit="contain"
                            />
                          )}
                        </View>
                        <View
                          style={[
                            styles.timelineContent,
                            isLast && styles.lastTimelineContent,
                          ]}
                        >
                          <Text style={titleStyle}>{step.title}</Text>
                          <Text style={styles.timelineSubtitle}>
                            {step.subtitle}
                          </Text>
                          <Text style={styles.timelineDate}>{step.date}</Text>
                        </View>
                      </View>
                    );

                    // If this is the upcoming step or it has no animation, just return the step
                    if (step.id === 4 || !step.animation) {
                      return stepContent;
                    }

                    // Otherwise wrap it in an animated view
                    return (
                      <Animated.View
                        key={step.id}
                        style={{
                          opacity: step.animation,
                          transform: [
                            {
                              translateY: step.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [20, 0],
                              }),
                            },
                          ],
                        }}
                      >
                        {stepContent}
                      </Animated.View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  rightContainer: {
    width: "40%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    overflow: "hidden",
    backgroundColor: "white",
  },
  contentContainer: {
    backgroundColor: "white",
  },
  headerContainer: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
    alignItems: "center",
  },
  trackingNumber: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 4,
  },
  trackingLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.main.Primary
  },
  deliveryInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deliveryInfoLabel: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 4,
  },
  deliveryInfoValue: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  timelineContainer: {
    padding: 24,
    marginHorizontal:30,
    marginBottom:30
  },
  timelineHeader: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  timelineWrapper: {
    position: "relative",
  },
  timelineLineContainer: {
    position: "absolute",
    left: 16,
    top: 16,
    bottom: 16,
    width: 1,
    zIndex: 1,
  },
  timelineGrayLine: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: appColors.GreyScale[200],
  },
  timelineActiveLine: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 1,
    backgroundColor: appColors.main.Primary,
  },
  timelineStep: {
    flexDirection: "row",
    marginBottom: 24,
    position: "relative",
    zIndex: 2,
  },
  lastStep: {
    marginBottom: 0,
  },
  timelineIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    zIndex: 2,
    position: "relative",
  },
  timelineIcon: {
    width: 18,
    height: 18,
  },
  activeIconImage: {
    tintColor: "white",
  },
  upcomingIconImage: {
    tintColor: appColors.GreyScale[500],
  },
  completedIcon: {
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: appColors.main.Primary,
  },
  activeIcon: {
    backgroundColor: appColors.main.Primary,
    borderWidth: 0,
  },
  upcomingIcon: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: appColors.GreyScale[300],
  },
  activeIconText: {
    color: "white",
    fontFamily: appFonts.UrbanistBold,
    fontSize: 14,
  },
  upcomingIconText: {
    color: appColors.GreyScale[500],
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 0,
    position: "relative",
  },
  lastTimelineContent: {
    paddingBottom: 0,
  },
  timelineTitle: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 4,
  },
  activeTitle: {
    color: appColors.main.Primary,
  },
  timelineSubtitle: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 4,
  },
  timelineDate: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[400],
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default TrackingProcess;
