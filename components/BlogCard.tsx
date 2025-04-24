import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface BlogCardProps {
  image: any;
  category: string;
  title: string;
  date: string;
  author: string;
  onPress?: () => void;
}

const BlogCard = ({
  image,
  category,
  title,
  date,
  author,
  onPress,
}: BlogCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} contentFit="cover" />
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
       
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>{author} • </Text>
          <Text style={styles.metaText}>{date}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    width: "100%",
    backgroundColor:appColors.AdditionalColor.white
  },
  imageContainer: {
    position: "relative",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  categoryPill: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  categoryText: {
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
    color: appColors.GreyScale[900],
  },
  contentContainer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 20,
    color: appColors.GreyScale[900],
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    fontFamily: appFonts.UrbanistRegular,
    fontSize: 14,
    color: appColors.main.Primary,
  }
});

export default BlogCard; 