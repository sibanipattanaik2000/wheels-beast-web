import React, { useState } from "react";
import SettingsSidebar, { SettingsSection } from "@/components/SettingsSidebar";
import SidebarContentLayout from "@/components/layout/SidebarContentLayout";
import PageLayout from "@/components/layout/PageLayout";
import { ScrollView, View } from "react-native";
import Header from "@/components/Header";
import CustomSafeArea from "@/components/CustomSafeArea";
import Footer from "@/components/Footer";
import { navigateToSettingPage } from "@/components/settings/SettingsNavHelper";
import HelpContent from "@/components/settings/HelpContent";
import { appColors } from "@/constants/Color";

export default function HelpPage() {
  const [activeSetting, setActiveSetting] =
    useState<SettingsSection>("get_help");

  const handleSelectSetting = (setting: SettingsSection) => {
    setActiveSetting(setting); // Update local state first
    navigateToSettingPage(setting, activeSetting);
  };

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: 70,
            paddingVertical: 47,
            backgroundColor: appColors.GreyScale[100],
          }}
        >
          <SidebarContentLayout
            sidebar={
              <SettingsSidebar
                activeSetting={activeSetting}
                onSelectSetting={handleSelectSetting}
              />
            }
            content={<HelpContent />}
          />
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
}
