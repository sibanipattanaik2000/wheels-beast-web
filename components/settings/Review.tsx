import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Href, useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import TextInput from "@/components/TextInput";
import { appColors } from "@/constants/Color";
import Rating from "./Rating";
import UserReviews from "../UserReviews";

const Reviews = () => {
  const router = useRouter();
  // const reviews = [
  //     {
  //       id: '1',
  //       userName: 'John Doe',
  //       userImage: 'https://example.com/profile1.jpg',
  //       rating: 2,
  //       date: 'March 15, 2024',
  //       content: 'Great experience! The interface is intuitive and the features are exactly what I needed.',
  //       likeCount: 10,
  //       dislikeCount: 5,
  //     },
  //     {
  //         id: '2',
  //         userName: 'John Doe',
  //         userImage: 'https://example.com/profile1.jpg',
  //         rating: 4,
  //         date: 'March 15, 2024',
  //         content: 'Great experience! The interface is intuitive and the features are exactly what I needed.',
  //         likeCount: 10,
  //         dislikeCount: 5,
  //       },
  //     // ... more reviews
  //   ];
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      padding: 16,
    },
    continueButton: {
      marginBottom: 35,
    },
    input: {
      marginBottom: 16,
    },
    voucherList: {
      flex: 1,
      marginTop: 15,
    },
  });
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: appColors.AdditionalColor.white },
      ]}
    >
    
      <SafeAreaView style={styles.safeArea}>
  

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Rating overallRating={2.9} totalRatings={100} totalReviews={50} ratingDistribution={{ 1: 10, 2: 20, 3: 30, 4: 25, 5: 15 }} />
          <UserReviews/>
        
         
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Reviews;