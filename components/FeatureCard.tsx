import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; // or any icon library you prefer
import { appColors } from "@/constants/Color";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";

interface FeatureItem {
  src: string;
  line1: string;
  line2: string;
  line2Color?: string;
}

interface FeatureCardProps {
  title: string;
  items: FeatureItem[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, items }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.borderedBox}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <View
              style={{
                backgroundColor: appColors.GreyScale[50],
                height: 64,
                width: 64,
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={item.src}
                style={{ height: 26, width: 26, position: "absolute" }}
              />
            </View>

            <Text style={styles.lineText1}>{item.line1}</Text>
            <Text
              style={[
                styles.lineText2,
                { color: item.line2Color || appColors.GreyScale[900] },
              ]}
            >
              {item.line2}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 20,
    padding:14
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  borderedBox: {
    flexDirection: "row", // add this
    justifyContent: "space-between",
  },
  item: {
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 32,
    padding: 20,
    width: "30%",
    gap: 18,
  },
  lineText1: {
    fontSize: 20,
    color: appColors.GreyScale[500],
    fontFamily: appFonts.UrbanistMedium,
  },
  lineText2: {
    fontSize: 28,
    fontFamily: appFonts.UrbanistBold,
  },
});

export default FeatureCard;
