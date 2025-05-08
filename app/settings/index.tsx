import React, { useState } from "react";
import SettingsSidebar, { SettingsSection } from "@/components/SettingsSidebar";
import PaymentMethodContent from "@/components/settings/PaymentMethodContent";
import LinkAccountContent from "@/components/settings/LinkAccountContent";
import DarkModeContent from "@/components/settings/DarkModeContent";
import SecurityContent from "@/components/settings/Review";
import AboutContent from "@/components/settings/AboutContent";
import SidebarContentLayout from "@/components/layout/SidebarContentLayout";
import PageLayout from "@/components/layout/PageLayout";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import { ScrollView, useWindowDimensions, View } from "react-native";
import Footer from "@/components/Footer";
import { navigateToSettingPage } from "@/components/settings/SettingsNavHelper";
import LanguageContent from "@/components/settings/LanguageContent";
import NotificationsContent from "@/components/settings/NotificationsContent";
import HelpContent from "@/components/settings/HelpContent";
import PrivacyPolicyContent from "@/components/settings/PrivacyPolicyContent";
import { appColors } from "@/constants/Color";

const Settings = () => {
  const [activeSetting, setActiveSetting] =
    useState<SettingsSection>("payment_method");
  const { height, width } = useWindowDimensions();
  const handleSelectSetting = (setting: SettingsSection) => {
    setActiveSetting(setting);
  };

  // Render the selected content directly
  const renderContent = () => {
    switch (activeSetting) {
      case "payment_method":
        return <PaymentMethodContent />;
      case "link_account":
        return (
          <LinkAccountContent
            userName={"sibani "}
            userRole={"Buyer's Account"}
            userImage={require('@/assets/images/Profile/avtar.png')}
          />
        );
      case "dark_mode":
      case "dark_mode_app":
        return <DarkModeContent />;
      case "language":
        return <LanguageContent />;
      case "push_notifications":
        return <NotificationsContent />;
      case "about":
        return <AboutContent />;
      case "get_help":
        return <HelpContent />;
      case "privacy_policy":
        return <PrivacyPolicyContent />;
      default:
        return <PaymentMethodContent />;
    }
  };

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
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            {/* Left sidebar */}
            <View style={{ width: width / 3.6, height: "100%" }}>
              <SettingsSidebar
                activeSetting={activeSetting}
                onSelectSetting={handleSelectSetting}
              />
            </View>

            {/* Right content */}
            <View
              style={{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                flex: 1,
                overflow:"hidden",
              }}

            >
              {renderContent()}
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default Settings;
