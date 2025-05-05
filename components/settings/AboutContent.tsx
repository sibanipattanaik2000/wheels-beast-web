import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: any;
}

const features: Feature[] = [
  {
    id: "1",
    title: "Financing Made Simple",
    description:
      "Get personalized loan terms and monthly payment in minutes without impacting your credit score.",
    icon: require("@/assets/images/about/card.png"),
  },
  {
    id: "2",
    title: "Secure Transactions",
    description:
      "Every transaction is protected with bank-level security and encryption.",
    icon: require("@/assets/images/about/shield.png"),
  },
  {
    id: "3",
    title: "Expert Support",
    description:
      "24/7 customer support to help you with any questions or concerns.",
    icon: require("@/assets/images/about/dollar.png"),
  },
];

const About = () => {
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: "#fff" }]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header with Menu and Profile */}

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Mission Section */}
          <View style={styles.missionSection}>
            <Text style={styles.missionLabel}>OUR MISSION</Text>
            <Text style={styles.missionTitle}>
              Make car purchase and ownership simple.
            </Text>
            <Text style={styles.missionDescription}>
              We bring you new markets, new customers and new opportunities for
              the purchase and sale of used cars. Now you can buy and sell a
              used car safely and comfortably online, with only a few easy
              clicks.
            </Text>
          </View>

          {/* Why Choose Us Section */}
          <View
            style={[
              styles.whyUsSection,
              { backgroundColor: appColors.AdditionalColor.white },
            ]}
          >
            <Text
              style={[styles.whyUsTitle, { color: appColors.GreyScale[900] }]}
            >
              Why choose us?
            </Text>
            <Text
              style={[
                styles.whyUsSubtitle,
                { color: appColors.GreyScale[500] },
              ]}
            >
              Used cars are an incredible value. But the process needed a
              makeover.
            </Text>

            {/* Feature Cards */}
            {features.map((feature) => (
              <View
                key={feature.id}
                style={[
                  styles.featureCard,
                  {
                    backgroundColor: "#F8FAFC",
                  },
                ]}
              >
                <View style={styles.featureIconContainer}>
                  <Image
                    source={feature.icon}
                    style={styles.featureIcon}
                    contentFit="contain"
                  />
                </View>
                <Text
                  style={[
                    styles.featureTitle,
                    { color: appColors.GreyScale[900] },
                  ]}
                >
                  {feature.title}
                </Text>
                <Text
                  style={[
                    styles.featureDescription,
                    { color: appColors.GreyScale[500] },
                  ]}
                >
                  {feature.description}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  logo: {
    width: 30,
    height: 30,
  },
  profileButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  scrollView: {
    flex: 1,
  },
  missionSection: {
    padding: 20,
    paddingTop: 40,
  },
  missionLabel: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: "#FFD700",
  },
  missionTitle: {
    fontSize: 32,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginVertical: 10,
  },
  missionDescription: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
    lineHeight: 24,
  },
  whyUsSection: {
    flex: 1,

    padding: 20,
  },
  whyUsTitle: {
    fontSize: 28,
    fontFamily: appFonts.UrbanistBold,
    marginBottom: 12,
  },
  whyUsSubtitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    marginBottom: 24,
    lineHeight: 24,
  },
  featureCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#4318FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  featureIcon: {
    width: 24,
    height: 24,
  },
  featureTitle: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    lineHeight: 20,
  },
});

export default About;
