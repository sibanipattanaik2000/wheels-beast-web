import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import { Image } from "expo-image";
import ToggleButton from "./ToggleButton";

export type SettingsSection =
  | "payment_method"
  | "link_account"
  | "dark_mode"
  | "language"
  | "push_notifications"
  | "dark_mode_app"
  | "about"
  | "get_help"
  | "privacy_policy";

interface SettingsSidebarProps {
  activeSetting: SettingsSection;
  onSelectSetting: (setting: SettingsSection) => void;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeSetting,
  onSelectSetting,
}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Settings</Text>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account Settings</Text>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "payment_method" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("payment_method")}
        >
          <Ionicons
            name="card-outline"
            size={20}
            color={
              activeSetting === "payment_method"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "payment_method" && styles.activeMenuText,
            ]}
          >
            Payment method
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "link_account" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("link_account")}
        >
          <Ionicons
            name="link-outline"
            size={20}
            color={
              activeSetting === "link_account"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "link_account" && styles.activeMenuText,
            ]}
          >
            Link Account
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "dark_mode" && styles.activeMenuItem,
          ]}
        >
          <Ionicons
            name="moon-outline"
            size={20}
            color={
              activeSetting === "dark_mode"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "dark_mode" && styles.activeMenuText,
            ]}
          >
            Dark mode
          </Text>
          <ToggleButton />
        </TouchableOpacity> */}
      </View>

      {/* App Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>App Settings</Text>

        {/* <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "language" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("language")}
        >
          <Ionicons
            name="globe-outline"
            size={20}
            color={
              activeSetting === "language"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "language" && styles.activeMenuText,
            ]}
          >
            Language
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "push_notifications" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("push_notifications")}
        >
          <Ionicons
            name="notifications-outline"
            size={20}
            color={
              activeSetting === "push_notifications"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "push_notifications" && styles.activeMenuText,
            ]}
          >
            Push notifications
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "dark_mode_app" && styles.activeMenuItem,
          ]}
         
        >
          <Ionicons
            name="moon-outline"
            size={20}
            color={
              activeSetting === "dark_mode_app"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "dark_mode_app" && styles.activeMenuText,
            ]}
          >
            Dark mode
          </Text>
          <ToggleButton />
        </TouchableOpacity> */}
      </View>

      {/* Support */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Support</Text>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "about" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("about")}
        >
          <Ionicons
            name="information-circle-outline"
            size={20}
            color={
              activeSetting === "about"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "about" && styles.activeMenuText,
            ]}
          >
            About WheelBeast
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "get_help" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("get_help")}
        >
          <Ionicons
            name="help-circle-outline"
            size={20}
            color={
              activeSetting === "get_help"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "get_help" && styles.activeMenuText,
            ]}
          >
            Get help
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.menuItem,
            activeSetting === "privacy_policy" && styles.activeMenuItem,
          ]}
          onPress={() => onSelectSetting("privacy_policy")}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={
              activeSetting === "privacy_policy"
                ? appColors.main.Primary
                : appColors.GreyScale[500]
            }
          />
          <Text
            style={[
              styles.menuText,
              activeSetting === "privacy_policy" && styles.activeMenuText,
            ]}
          >
            Privacy policy
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={appColors.GreyScale[300]}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutButton}>
        <Ionicons
          name="log-out-outline"
          size={20}
          color={appColors.alert.Error}
        />
        <Text style={styles.signOutText}>Sign out</Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={appColors.GreyScale[300]}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.AdditionalColor.white,
    padding: 20,
    shadowColor: appColors.GreyScale[300],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRightWidth: 1,
    borderColor: appColors.GreyScale[200],
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[400],
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  activeMenuItem: {
    backgroundColor: appColors.GreyScale[50],
  },
  menuText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginLeft: 12,
    flex: 1,
  },
  activeMenuText: {
    color: appColors.main.Primary,
    fontFamily: appFonts.UrbanistBold,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  signOutButton: {
    flexDirection: "row",
    gap: 5,
  },
  signOutText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.alert.Error,
    textAlign: "center",
  },
});

export default SettingsSidebar;
