import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import MyTextInput from "./MyTextInput";
import { Image } from "react-native";
import Button from "./Button";

interface ProfileEditProps {
  userName: string;
  userImage: any;
  userRole: string;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({
  userName,
  userImage,
  userRole,
}) => {
  // State for form fields
  const [fullName, setFullName] = useState(userName);
  const [phoneNumber, setPhoneNumber] = useState("+1 756 7894 00");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveChanges = () => {
    console.log("Saving changes...");
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appColors.AdditionalColor.white,
      borderRadius: 12,
      justifyContent: "space-between",
      paddingTop:48,
      paddingHorizontal:24
    },
    content: {
      flex: 1,
      gap: 30
    },
    profileHeader: {
      gap: 10,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 32,
      alignSelf: "center",
    },
    profileInfo: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    userName: {
      fontSize: 18,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      marginBottom: 4,
    },
    userRole: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[500],
    },
    formSection: {
      marginTop: 10,
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    formColumn: {
      width: "48%",
    },
    sectionLabel: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[500],
      marginBottom: 8,
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {/* Profile header */}
        <View style={styles.profileHeader}>
          <Image source={userImage} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userRole}>{userRole}</Text>
          </View>
        </View>

        {/* Form fields */}
        <View style={styles.formSection}>
          <View style={styles.rowContainer}>
            <View style={styles.formColumn}>
              <Text style={styles.sectionLabel}>Full name</Text>
              <MyTextInput
                label=""
                value={fullName}
                onChangeText={setFullName}
                icon={
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color={appColors.GreyScale[500]}
                  />
                }
                placeholder="Enter Your Name"
              />
            </View>

            <View style={styles.formColumn}>
              <Text style={styles.sectionLabel}>Phone number</Text>
              <MyTextInput
                label=""
                value={phoneNumber}
                onChangeText={(text) => {
                  const numericText = text.replace(/[^0-9]/g, ""); // remove non-numeric characters
                  if (numericText.length <= 10) {
                    setPhoneNumber(numericText);
                  }
                }}
                icon={
                  <Ionicons
                    name="call-outline"
                    size={20}
                    color={appColors.GreyScale[500]}
                  />
                }
                isVerified={true}
                placeholder="Enter Your Phone Number"
                // isVerified={phoneNumber === signedInPhone}
              />
            </View>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.formColumn}>
              <Text style={styles.sectionLabel}>Email address</Text>
              <MyTextInput
                label=""
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                icon={
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={appColors.GreyScale[500]}
                  />
                }
                isUnverified={true}
                // isUnverified={email !== signedInEmail}
              />
            </View>

            <View style={styles.formColumn}>
              <Text style={styles.sectionLabel}>Password</Text>
              <MyTextInput
                label=""
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                icon={
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={appColors.GreyScale[500]}
                  />
                }
                placeholder="Enter Your Password"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Save button */}
      <View style={{width:'100%',justifyContent:'center',alignItems:"center",paddingBottom:48 }}>
      <Button
        title="Save Changes"
        onPress={handleSaveChanges}
        variant="filled"
        color={appColors.AdditionalColor.white}
        style={{ backgroundColor: appColors.main.Primary, }}
        width={"30%"}
        
      />
      </View>
    </ScrollView>
  );
};



export default ProfileEdit;
