import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
  Platform,
} from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, useRouter } from "expo-router";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";

// Define message item type
interface MessageItem {
  id: string;
  name: string;
  message: string;
  time: string;
  unread: boolean;
  avatar: any;
  isOnline?: boolean;
}

// Sample data for message list
const messageData: MessageItem[] = [
  {
    id: "1",
    name: "Florencio Dorrance",
    message: "Yes, of course. We will make it eas...",
    time: "04:00 PM",
    unread: true,
    isOnline: true,
    avatar: require("@/assets/images/Profile/avtar.png"),
  },
  {
    id: "2",
    name: "Phyllis Godley",
    message: "Hey there's a promo waiting for yo...",
    time: "12:00 PM",
    unread: false,
    isOnline: true,
    avatar: require("@/assets/images/Profile/avtar.png"),
  },
  {
    id: "3",
    name: "Maryland Winkles",
    message: "No problem 😊",
    time: "June 15",
    unread: false,
    isOnline: false,
    avatar: require("@/assets/images/Profile/avtar.png"),
  },
  {
    id: "4",
    name: "Darron Kulikowski",
    message: "Hey there's a promo waiting for yo...",
    time: "May 30",
    unread: true,
    isOnline: false,
    avatar: require("@/assets/images/Profile/avtar.png"),
  },
  {
    id: "5",
    name: "Jamel Eusebio",
    message: "Hey there's a promo waiting for yo...",
    time: "May 29",
    unread: true,
    isOnline: false,
    avatar: require("@/assets/images/Profile/avtar.png"),
  },
  {
    id: "6",
    name: "Aileen Fullbright",
    message: "Okay!",
    time: "May 25",
    unread: false,
    isOnline: true,
    avatar: require("@/assets/images/Profile/avtar.png"),
  },
];

export default function MessageScreen() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const router = useRouter();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "unread">("all");

  // Filter the messages based on the selected filter type
  const filteredMessages =
    filterType === "all"
      ? messageData
      : messageData.filter((item) => item.unread);

  const renderMessageItem = ({ item, index }: { item: MessageItem, index:number }) => (
    <TouchableOpacity
      style={[
        styles.messageItem,
        {
          borderBottomWidth:index=== filteredMessages.length-1?0: 1,
          borderColor: appColors.GreyScale[200],
          backgroundColor: appColors.AdditionalColor.white,
        },
      ]}
      onPress={() => router.push("/chat" as Href)}
      activeOpacity={0.7}
    >
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} contentFit="cover" />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>

      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text
            style={[styles.messageName, { color: appColors.GreyScale[900] }]}
          >
            {item.name}
          </Text>
          <Text
            style={[styles.messageTime, { color: appColors.GreyScale[400] }]}
          >
            {item.time}
          </Text>
        </View>
        <View style={styles.messagePreview}>
          <Text
            style={[
              styles.messageText,
              {
                fontFamily: item.unread
                  ? appFonts.UrbanistBold
                  : appFonts.UrbanistMedium,
                color: item.unread
                  ? appColors.main.Primary
                  : appColors.GreyScale[500],
              },
            ]}
            numberOfLines={1}
          >
            {item.message}
          </Text>

          {item.unread && (
            <View style={styles.unreadIndicator}>
              <Text style={styles.unreadText}>1</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: appColors.AdditionalColor.white },
      ]}
    >
     {/* header section*/}
      <View style={{flexDirection:'row',justifyContent:"space-between",paddingHorizontal:20,paddingVertical:30}}>
      <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
        <Text style={{fontFamily:appFonts.UrbanistSemiBold,fontSize:20,color:appColors.GreyScale[900]}}>Message</Text>
        <Ionicons name="chevron-down" size={20}/>
        <View style={{padding:6,borderRadius:10,backgroundColor:appColors.GreyScale[200],justifyContent:'center',alignItems:'center',width:40}}>
            <Text  style={{fontFamily:appFonts.UrbanistSemiBold,fontSize:12,color:appColors.GreyScale[900]}}>12</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor:appColors.main.Primary,height:30,width:30,borderRadius:20,justifyContent:'center',alignItems:"center"}}>
        <Ionicons name="add" color={appColors.AdditionalColor.white} size={20}/>
      </TouchableOpacity>
      </View>
      {/* Search bar */}
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: appColors.GreyScale[50],
            borderWidth: isSearchFocused ? 1 : 0,
            borderColor: isSearchFocused
              ? appColors.main.Primary
              : "transparent",
          },
        ]}
      >
        <TextInput
          placeholder="Search message"
          placeholderTextColor={appColors.GreyScale[400]}
          style={[styles.searchInput, { color: appColors.GreyScale[900] }]}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        <Ionicons name="search" size={20} color={appColors.GreyScale[400]} />
      </View>

      {/* Messages list */}
      {filteredMessages.length > 0 ? (
        <FlatList
          data={filteredMessages}
          keyExtractor={(item,) => item.id}
          renderItem={renderMessageItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: appColors.GreyScale[500] }]}>
            {filterType === "unread"
              ? "You don't have any unread messages"
              : "You don't have any messages yet"}
          </Text>
        </View>
      )}

      {/* Floating action button
      <TouchableOpacity style={styles.fabButton}>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity> */}

      {/* Filter Modal */}
      <Modal
        visible={filterModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setFilterModalVisible(false)}
        >
          <View style={[styles.modalContainer, { backgroundColor: "#FFFFFF" }]}>
            <View style={styles.modalHeader}>
              <Text
                style={[styles.modalTitle, { color: appColors.GreyScale[500] }]}
              >
                Filter
              </Text>
              <TouchableOpacity
                onPress={() => setFilterModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons
                  name="close"
                  size={24}
                  color={appColors.alert.Error}
                />
              </TouchableOpacity>
            </View>

            {/* Filter Options */}
            <TouchableOpacity
              style={styles.filterOption}
              onPress={() => {
                setFilterType("all");
                setFilterModalVisible(false);
              }}
            >
              <Text
                style={[styles.filterText, { color: appColors.GreyScale[900] }]}
              >
                All messages
              </Text>
              <View style={styles.radioButton}>
                {filterType === "all" && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterOption}
              onPress={() => {
                setFilterType("unread");
                setFilterModalVisible(false);
              }}
            >
              <Text
                style={[styles.filterText, { color: appColors.main.Primary }]}
              >
                Unread messages
              </Text>
              <View style={styles.radioButton}>
                {filterType === "unread" && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  backButton: {
    padding: 5,
  },
  menuButton: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingHorizontal: 15,
    height: 56,
    borderRadius: 16,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
    ...Platform.select({
      web: { 
        outlineStyle: "none",
      },
    }),
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  messageItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderRadius: 12,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 3,
    right: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
  messageContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  messageName: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
  },
  messageTime: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistRegular,
  },
  messagePreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    flex: 1,
    paddingRight: 10,
  },
  unreadIndicator: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#4038FF",
    justifyContent: "center",
    alignItems: "center",
  },
  unreadText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: appFonts.UrbanistBold,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    textAlign: "center",
  },
  fabButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4038FF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
  },
  closeButton: {
    padding: 4,
  },
  filterOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  filterText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4038FF",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4038FF",
  },
});
