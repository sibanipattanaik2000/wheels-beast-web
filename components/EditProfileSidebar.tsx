import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import { router, usePathname, useRouter } from "expo-router";

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  route: string;
  notification?: number;
};

interface EditProfileSidebarProps {
  userName: string;
  userRole: string;
  userImage: any;
  onContentPress:(tab:string)=>void;
}

const EditProfileSidebar: React.FC<EditProfileSidebarProps> = ({
  userName,
  userRole,
  userImage,
  onContentPress
}) => {
  const pathname = usePathname();
  const router =useRouter()
  const [active, setActive]= useState("editprofile");
  const sidebarItems: SidebarItem[] = [
    {
      id: "editprofile",
      label: "Edit Profile",
      icon: (
        <Image
          source={require("@/assets/images/purchase/edit.png")}
          //source={require("@/assets/images/Profile/edit.png")}
          style={{ height: 24, width: 24, tintColor: appColors.GreyScale[400] }}
        />
      ),
      route: "/profile/edit-profile",
    },
    {
      id: "appointment",
      label: "Appointment",
      icon: (
        <Image
          source={require("@/assets/images/Profile/note.png")}
          style={{ height: 24, width: 24, tintColor: appColors.GreyScale[400] }}
        />
      ),
      route: "/profile/appointment",
    },
    {
      id: "testdrive",
      label: "Test Drive",
      icon: (
        <Image
          source={require("@/assets/images/Profile/gear.png")}
          style={{ height: 24, width: 24, tintColor: appColors.GreyScale[400] }}
        />
      ),
      route: "/profile/test-drive",
    },
    {
      id: "myvoucher",
      label: "My vouchers",
      icon: (
        <Image
          source={require("@/assets/images/Profile/voucher.png")}
          style={{ height: 24, width: 24, tintColor: appColors.GreyScale[400] }}
        />
      ),
      route: "/profile/my-voucher",
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <Image
          source={require("@/assets/images/Profile/voucher.png")}
          style={{ height: 24, width: 24, tintColor: appColors.GreyScale[400] }}
        />
      ),
      route: "/settings",
    },
  ];

  const signOut = () => {
    console.log("Signing out...");
    router.push("/home");
  };

  const isActive = (route: string) => {
    return pathname === route;
  };

  const navigateTo = (route: string) => {
    router.navigate(route as any);
  };

  return (
    <ScrollView style={styles.container} >
      <View style={styles.profileSection}>
        <Image source={userImage} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userRole}>{userRole}</Text>
      </View>

      <View style={styles.navigationSection}>
        {/* My Purchases - separated */}
        <TouchableOpacity
          style={[
            styles.navigationItem,
            isActive("/order-progress") && styles.activeItem,
            {
              borderWidth: 1,
              borderColor: appColors.GreyScale[200],
              borderRadius: 14,
            },
          ]}
          onPress={() => router.push("/order-progress")}
        >
          <View style={styles.iconAndLabel}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: appColors.main.Primary,
              }}
            >
              <Ionicons
                name="cart-outline"
                size={24}
                color={appColors.AdditionalColor.white}
              />
            </View>
            <Text
              style={[
                styles.navigationLabel,
                isActive("/order-progress") && styles.activeLabel,
              ]}
            >
              My purchases
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>1</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={appColors.GreyScale[400]}
            />
          </View>
        </TouchableOpacity>

        {/* Remaining items */}
        <Text
          style={{
            fontFamily: appFonts.UrbanistBold,
            fontSize: 14,
            color: appColors.GreyScale[400],
          }}
        >
          General
        </Text>
        {sidebarItems
          .filter((item) => item.id !== "my-purchases")
          .map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.navigationItem,
                active===item.id && styles.activeItem,
              ]}
              onPress={() => {
                
                setActive(item.id)
                onContentPress(item.id)}}
            >
              <View style={styles.iconAndLabel}>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: appColors.GreyScale[50],
                  }}
                >
                  {item.icon}
                </View>
                <Text
                  style={[
                    styles.navigationLabel,
                    isActive(item.route) && styles.activeLabel,
                  ]}
                >
                  {item.label}
                </Text>
              </View>
              {item.notification && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>
                    {item.notification}
                  </Text>
                </View>
              )}
              <Ionicons
                name="chevron-forward"
                size={20}
                color={appColors.GreyScale[400]}
              />
            </TouchableOpacity>
          ))}
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFF0F0",
          }}
        >
          <Ionicons
            name="log-out-outline"
            size={24}
            color={appColors.alert.Error}
          />
        </View>
        <Text style={styles.signOutText}>Sign out</Text>
        <View style={{ flex: 1 }} />
        <Ionicons
          name="chevron-forward"
          size={20}
          color={appColors.GreyScale[400]}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.AdditionalColor.white,
    paddingHorizontal: 36,
    paddingVertical: 14,
    height:"100%",
    width:"100%",
    borderRadius: 10,
    borderRightWidth:1,
    borderColor:appColors.GreyScale[200]
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  navigationSection: {
    flex: 1,
    gap: 20,
  },
  navigationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 14,
    justifyContent: "space-between",
    gap: 30,
  },
  activeItem: {
    backgroundColor: appColors.GreyScale[200],
  },
  iconAndLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  navigationLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  activeLabel: {
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    fontSize: 14,
  },
  notificationBadge: {
    backgroundColor: appColors.GreyScale[900],
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: appColors.AdditionalColor.white,
    fontSize: 12,
    fontFamily: appFonts.UrbanistBold,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 12,
    marginTop: 20,
    paddingVertical: 12,
  },
  signOutText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.alert.Error,
  },
});

export default EditProfileSidebar;
