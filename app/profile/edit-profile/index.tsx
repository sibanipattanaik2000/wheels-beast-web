import React from "react";
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

const EditProfile = () => {
  // Sample user data
  const userData = {
    name: "Saski Ropokova",
    role: "Buyer's Account",
    image: require("@/assets/images/Profile/avtar.png"), // Make sure this image exists
  };
  const { height, width } = useWindowDimensions();
  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: appColors.GreyScale[50],
            paddingHorizontal: 70,
            paddingVertical: 47,
            width: width,
          }}
        >
          {/* Left sidebar */}
          <View style={{ maxHeight: height }}>
            <EditProfileSidebar
              userName={userData.name}
              userRole={userData.role}
              userImage={userData.image}
            />
          </View>

          {/* Right content */}
          <View
            style={{
              shadowColor: appColors.GreyScale[500],
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              maxHeight: height,
              width: "80%",
            }}
          >
            <ProfileEdit
              userName={userData.name}
              userRole={userData.role}
              userImage={userData.image}
            />
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
