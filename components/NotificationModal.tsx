import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";

interface NotificationItem {
  id: string;
  type: "discount" | "test_drive" | "message" | "sold" | "promo" | "offer";
  title: string;
  description: string;
  time: string;
  date?: string;
  icon?: any;
  carImage?: any;
  price?: string;
  location?: string;
  sender?: string;
  isToday?: boolean;
  isRead?: boolean;
}

interface NotificationModalProps {
  isVisible: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isVisible,
  onClose,
  notifications,
}) => {
  const [filterType, setFilterType] = useState<
    "all" | "unread" | "promo" | "offer"
  >("all");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "discount":
      case "promo":
        return (
          <View style={styles.circleIconBlue}>
            <Ionicons name="pricetag-outline" size={24} color="#FFFFFF" />
          </View>
        );
      case "test_drive":
        return (
          <View style={styles.circleIconDark}>
            <Ionicons name="car-outline" size={24} color="#FFFFFF" />
          </View>
        );
      case "message":
        return (
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.profileImage}
          />
        );
      case "sold":
        return (
          <Image
            source={require("@/assets/images/Signup/car.png")}
            style={styles.carImage}
          />
        );
      default:
        return (
          <View style={styles.circleIconBlue}>
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
          </View>
        );
    }
  };

  const renderNotificationItem = ({ item }: { item: NotificationItem }) => (
    <View style={styles.notificationItem}>
      {getIcon(item.type)}
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={16} color="#9CA3AF" />
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  const renderSectionHeader = (title: string) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const filteredNotifications = notifications.filter((notification) => {
    if (filterType === "all") return true;
    if (filterType === "unread") return !notification.isRead;
    return notification.type === filterType;
  });

  const todayNotifications = filteredNotifications.filter(
    (item) => item.isToday
  );
  const weekNotifications = filteredNotifications.filter(
    (item) => !item.isToday
  );

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
            style={styles.modalContent}
          >
            <View style={styles.header}>
              <Text style={styles.title}>Notifications</Text>
              <TouchableOpacity style={styles.checkAllButton}>
                <Ionicons name="checkmark-done" size={24} color="#4F46E5" />
              </TouchableOpacity>
              <View style={styles.headerRightSection}>
                <TouchableOpacity
                  style={styles.sortByContainer}
                  onPress={toggleSortOptions}
                >
                  <Text style={styles.title}>Sort by</Text>
                  <Ionicons
                    name={showSortOptions ? "chevron-up" : "chevron-down"}
                    size={20}
                    color="#6B7280"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Sort options */}
            {showSortOptions && (
              <View style={styles.sortOptionsContainer}>
                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={() => setFilterType("all")}
                >
                  <Text style={styles.filterOptionText}>All notifications</Text>
                  <View
                    style={[
                      styles.radioButton,
                      filterType === "all" && styles.radioButtonSelected,
                    ]}
                  >
                    {filterType === "all" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={() => setFilterType("unread")}
                >
                  <Text style={styles.filterOptionText}>
                    Unread notifications
                  </Text>
                  <View
                    style={[
                      styles.radioButton,
                      filterType === "unread" && styles.radioButtonSelected,
                    ]}
                  >
                    {filterType === "unread" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={() => setFilterType("promo")}
                >
                  <Text style={styles.filterOptionText}>Promo</Text>
                  <View
                    style={[
                      styles.radioButton,
                      filterType === "promo" && styles.radioButtonSelected,
                    ]}
                  >
                    {filterType === "promo" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.filterOption}
                  onPress={() => setFilterType("offer")}
                >
                  <Text style={styles.filterOptionText}>Offer</Text>
                  <View
                    style={[
                      styles.radioButton,
                      filterType === "offer" && styles.radioButtonSelected,
                    ]}
                  >
                    {filterType === "offer" && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <ScrollView style={styles.notificationList}>
              {todayNotifications.length > 0 && (
                <>
                  {renderSectionHeader("Today")}
                  {todayNotifications.map((item) =>
                    renderNotificationItem({ item })
                  )}
                </>
              )}

              {weekNotifications.length > 0 && (
                <>
                  {renderSectionHeader("This Week")}
                  {weekNotifications.map((item) =>
                    renderNotificationItem({ item })
                  )}
                </>
              )}
            </ScrollView>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalContainer: {
    height: "100%",
    width: "30%",
    backgroundColor: "white",
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerRightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  sortByContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingHorizontal:24,
    paddingVertical:12,
    borderWidth:1,
    borderColor:appColors.GreyScale[200],
    borderRadius:5,
  },

  title: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  checkAllButton: {
    padding: 5,
  },
 
  sortOptionsContainer: {
    position: "absolute",
    top: 65,
    right: 10,
    zIndex: 10,
    backgroundColor: "white",
    width: 250,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal:24,
    paddingVertical:12,


  },
  filterOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical:24
  },
  filterOptionText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: appColors.GreyScale[300],
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    borderColor: appColors.main.Primary,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: appColors.main.Primary,
  },
  notificationList: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 15,
    marginTop: 5,
  },
  notificationItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 2,
  },
  notificationDescription: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[700],
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[500],
    marginLeft: 4,
  },
  circleIconBlue: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#4F46E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  circleIconDark: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1F2937",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  carImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
});

export default NotificationModal;
