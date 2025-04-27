import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import { router, usePathname } from "expo-router";

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
}

const EditProfileSidebar: React.FC<EditProfileSidebarProps> = ({
  userName,
  userRole,
  userImage,
}) => {
  const pathname = usePathname();

  const sidebarItems: SidebarItem[] = [
    {
      id: "my-purchases",
      label: "My purchases",
      icon: (
        <Ionicons
          name="cart-outline"
          size={24}
          color={appColors.GreyScale[600]}
        />
      ),
      route: "/profile/my-purchase",
      notification: 1,
    },
    {
      id: "edit-profile",
      label: "Edit Profile",
      icon: (
        <Ionicons
          name="person-outline"
          size={24}
          color={appColors.GreyScale[600]}
        />
      ),
      route: "/profile/edit-profile",
    },
    {
      id: "appointment",
      label: "Appointment",
      icon: (
        <Ionicons
          name="calendar-outline"
          size={24}
          color={appColors.GreyScale[600]}
        />
      ),
      route: "/profile/appointment",
    },
    {
      id: "test-drive",
      label: "Test Drive",
      icon: (
        <Ionicons
          name="car-outline"
          size={24}
          color={appColors.GreyScale[600]}
        />
      ),
      route: "/profile/test-drive",
    },
    {
      id: "my-vouchers",
      label: "My vouchers",
      icon: (
        <Ionicons
          name="ticket-outline"
          size={24}
          color={appColors.GreyScale[600]}
        />
      ),
      route: "/profile/my-voucher",
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <Ionicons
          name="settings-outline"
          size={24}
          color={appColors.GreyScale[600]}
        />
      ),
      route: "/settings",
    },
  ];

  const signOut = () => {
    // Implement sign out logic here
    console.log("Signing out...");
    router.navigate("/home");
  };

  const isActive = (route: string) => {
    return pathname === route;
  };

  const navigateTo = (route: string) => {
    router.navigate(route as any);
  };

  return (
    <View style={styles.container}>
      {/* User profile section */}
      <View style={styles.profileSection}>
        <Image source={userImage} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userRole}>{userRole}</Text>
      </View>

      <View style={styles.divider} />

      {/* Navigation items */}
      <View style={styles.navigationSection}>
        {sidebarItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.navigationItem,
              isActive(item.route) && styles.activeItem,
            ]}
            onPress={() => navigateTo(item.route)}
          >
            <View style={styles.iconAndLabel}>
              {item.icon}
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
                <Text style={styles.notificationText}>{item.notification}</Text>
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

      <View style={styles.divider} />

      {/* Sign out button */}
      <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
        <Ionicons
          name="log-out-outline"
          size={24}
          color={appColors.alert.Error}
        />
        <Text style={styles.signOutText}>Sign out</Text>
        <View style={{ flex: 1 }} />
        <Ionicons
          name="chevron-forward"
          size={20}
          color={appColors.GreyScale[400]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.AdditionalColor.white,
    paddingHorizontal: 36,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: appColors.GreyScale[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  divider: {
    height: 1,
    backgroundColor: appColors.main.Primary,
    marginVertical: 16,
    width: "50%",
    alignSelf: "flex-end",
  },
  navigationSection: {
    flex: 1,
    gap: 36,
  },
  navigationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 14,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    gap: 30,
  },
  activeItem: {
    backgroundColor: appColors.GreyScale[100],
  },
  iconAndLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  navigationLabel: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
  },
  activeLabel: {
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  notificationBadge: {
    backgroundColor: appColors.main.Primary,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontFamily: appFonts.UrbanistBold,
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    gap: 12,
  },
  signOutText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.alert.Error,
  },
});

export default EditProfileSidebar;
