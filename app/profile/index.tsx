import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import EditProfileSidebar from "@/components/EditProfileSidebar";
import ProfileEdit from "@/components/ProfileEdit";
import { appColors } from "@/constants/Color";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "expo-router";
import Appointment from "@/components/Appointment";
import TestDrive from "@/components/TestDrive";
import Myvoucher from "@/components/Myvoucher";

const EditProfile = () => {
  // Sample user data
  const userData = {
    name: "Saski Ropokova",
    role: "Buyer's Account",
    image: require("@/assets/images/Profile/avtar.png"), // Make sure this image exists
  };
  const { height, width } = useWindowDimensions();
  const [activetab, setActivetab] = useState("editprofile");
  const router = useRouter();

  const logOut = () => {};

  let rightContent;
  switch (activetab) {
    case "editprofile":
      rightContent = (
        <ProfileEdit
          userName={userData.name}
          userRole={userData.role}
          userImage={userData.image}
        />
      );
      break;
    case "appointment":
      rightContent = <Appointment />;
      break;
    case "testdrive":
      rightContent = <TestDrive />;
      break;
    case "myvoucher":
      rightContent = <Myvoucher />;
      break;
    case "settings":
      router.push("/settings");
      break;
    case "signout":
      logOut();
      break;
    default:
      rightContent = null; // Default content if no tab is selected
  }

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      >
        <View
          style={{
            paddingHorizontal: 120,
            maxHeight: height,
            justifyContent: "space-between",
            paddingVertical: 27,
            backgroundColor: appColors.GreyScale[100],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: appColors.GreyScale[50],
              width: "99%",
              height: "99%",
              boxShadow: "0px 0px 3px rgba(0,0,0,0.30)",
              // borderWidth:1,
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            {/* Left sidebar */}
            <View
              style={{ width: width / 3.6, height: "100%" }}
            >
              <EditProfileSidebar
                onContentPress={(id) => setActivetab(id)}
                userName={userData.name}
                userRole={userData.role}
                userImage={userData.image}
              />
            </View>

            {/* Right content */}
            <View
              style={{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                flex: 1,
              }}
            >
              {rightContent}
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {},
});

export default EditProfile;
