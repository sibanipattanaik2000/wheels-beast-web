import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import EditProfileSidebar from "@/components/EditProfileSidebar";
import { appColors } from "@/constants/Color";
import CustomSafeArea from "@/components/CustomSafeArea";
import appFonts from "@/constants/Font";

const Setting = () => {
  // Sample user data
  const userData = {
    name: "Saski Ropokova",
    role: "Buyer's Account",
    image: require("@/assets/images/Profile/avtar.png"), // Make sure this image exists
  };

  return (
    <CustomSafeArea>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: appColors.GreyScale[50],
            paddingHorizontal: 70,
            paddingVertical: 47,
          }}
        >
          {/* Left sidebar */}
          <View>
            <EditProfileSidebar
              userName={userData.name}
              userRole={userData.role}
              userImage={userData.image}
            />
          </View>

          {/* Right content */}
          <View style={styles.contentContainer}>
            <View style={styles.contentCard}>
              <Text style={styles.title}>Settings</Text>
              {/* Placeholder content */}
              <View style={styles.placeholderContent}>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flex: 1,
    shadowColor: appColors.GreyScale[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentCard: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 24,
  },
  placeholderContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.GreyScale[50],
    borderRadius: 8,
    padding: 24,
  },
  placeholderText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    textAlign: "center",
  },
});

export default Setting;
