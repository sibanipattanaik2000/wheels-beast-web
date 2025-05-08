import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
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
  const {height,width} =useWindowDimensions()

  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
       overflow: "hidden",
      // borderColor: appColors.GreyScale[200],
      height :"100%",
      width :"100%",
      backgroundColor:appColors.AdditionalColor.white,
      // borderWidth:1
    },
    imageContainer: {
      position: "relative",
      height:width/4.6,
      width:width/4.13,
      borderRadius:16,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius:16

    },
    categoryPill: {
      position: "absolute",
      top: 16,
      left: 16,
      backgroundColor: "white",
      padding:12,
      borderRadius: 30,
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
      fontFamily: appFonts.UrbanistMedium,
      fontSize: 20,
      color: appColors.GreyScale[900],
    },
    metaContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap:10
    },
    metaText: {
      fontFamily: appFonts.UrbanistRegular,
      fontSize: 15,
      color: appColors.main.Primary,
    }
  })
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} contentFit="contain" />
        <View style={styles.categoryPill}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
       
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>{author}  </Text>
          <Image style={{height:4,width:4,borderRadius:2,backgroundColor:appColors.GreyScale[400]}} source={require('@/assets/images/brand/dot.png')}/>
          <Text style={styles.metaText}>{date}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    </View>
  );
};



export default BlogCard; 