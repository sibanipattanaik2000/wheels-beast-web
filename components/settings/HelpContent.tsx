import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";

interface Category {
  id: string;
  title: string;
}

interface Question {
  id: string;
  title: string;
  likes: number;
  comments: number;
  category: string;
}

const categories: Category[] = [
  { id: "general", title: "General" },
  { id: "buy", title: "Buy Car" },
  { id: "sell", title: "Sell Car" },
  { id: "finance", title: "Financing" },
];

const questions: Question[] = [
  {
    id: "1",
    title: "What is Carline?",
    likes: 56,
    comments: 120,
    category: "general",
  },
  {
    id: "2",
    title: "How do I get in contact with Carline?",
    likes: 23,
    comments: 14,
    category: "general",
  },
  {
    id: "3",
    title: "Do you offer referral bonusess?",
    likes: 0,
    comments: 100,
    category: "general",
  },
  {
    id: "4",
    title: "Is Carline hiring?",
    likes: 23,
    comments: 14,
    category: "general",
  },
];

const Faq = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = questions.filter(
    (q) =>
      q.category === selectedCategory &&
      (searchQuery === "" ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View
      style={[styles.container, { backgroundColor: appColors.AdditionalColor.white}]}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={{fontSize:24,fontFamily:appFonts.UrbanistBold,color:"#EAB308"}}>FAQ</Text>
          <Text style={styles.title}>How can we help you today?</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, { color: appColors.GreyScale[900] }]}
            placeholder="Search question"
            placeholderTextColor={ appColors.GreyScale[500]}
            value={searchQuery}
            onChangeText={setSearchQuery}
            
          />
          <Ionicons
            name="search"
            size={24}
            color={ appColors.GreyScale[900] }
            style={styles.searchIcon}
          />
        </View>

        {/* Questions List */}
        <ScrollView
          style={[
            styles.questionsContainer,
            { backgroundColor: appColors.AdditionalColor.white },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && {
                    backgroundColor: appColors.GreyScale[900],
                  },
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text
                  style={[
                    { color: appColors.GreyScale[900] },
                    selectedCategory === category.id && {
                      color: appColors.AdditionalColor.white,
                    },
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {filteredQuestions.map((question) => (
            <TouchableOpacity
              key={question.id}
              style={[styles.questionCard, { backgroundColor: "#F8FAFC" }]}
              onPress={() => {
                /* Handle question press */
              }}
            >
              <Text
                style={[
                  styles.questionTitle,
                  { color: appColors.GreyScale[900] },
                ]}
              >
                {question.title}
              </Text>
              <View style={styles.questionStats}>
                <View style={styles.stat}>
                  <MaterialCommunityIcons
                    name="thumb-up-outline"
                    size={20}
                    color="#8E8E93"
                  />
                  <Text style={styles.statText}>{question.likes}</Text>
                </View>
                <View style={styles.stat}>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={20}
                    color="#8E8E93"
                  />
                  <Text style={styles.statText}>{question.comments}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  profileButton: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    position: "relative",
     width:'40%'
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    paddingRight: 50,
   
  },
  searchIcon: {
    position: "absolute",
    right: 20,
    top: "20%",
   // transform: [{ translateY: -12 }],
  },
  categoriesContainer: {
    width: "100%",

    marginBottom: 18,
  },
  categoryButton: {
    paddingHorizontal: 20,

    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 12,
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  categoryButtonActive: {
    backgroundColor: "#fff",
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
  },
  categoryTextActive: {
    color: "#4318FF",
  },
  questionsContainer: {
    flex: 1,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  questionCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  questionTitle: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: "#fff",
    marginBottom: 12,
  },
  questionStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  statText: {
    color: "#8E8E93",
    marginLeft: 8,
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
  },
});

export default Faq;
