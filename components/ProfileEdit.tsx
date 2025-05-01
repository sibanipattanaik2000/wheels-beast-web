import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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

  return (
    <View style={styles.container}>
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
      <Button
        title="Save Changes"
        onPress={handleSaveChanges}
        variant="filled"
        color={appColors.AdditionalColor.white}
        style={{ backgroundColor: appColors.main.Primary }}
      />
      {/* <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Change</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    padding: 24,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    gap: 30
  },
  profileHeader: {
    gap: 10,
  },
  profileImage: {
    width: 64,
    height: 64,
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
  saveButton: {
    backgroundColor: appColors.main.Primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: appColors.AdditionalColor.white,
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
  },
});

export default ProfileEdit;
