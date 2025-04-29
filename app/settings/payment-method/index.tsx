import React, { useState } from "react";
import SettingsSidebar, { SettingsSection } from "@/components/SettingsSidebar";
import PaymentMethodContent from "@/components/settings/PaymentMethodContent";
import SidebarContentLayout from "@/components/layout/SidebarContentLayout";
import PageLayout from "@/components/layout/PageLayout";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollView, View } from "react-native";
import { navigateToSettingPage } from "@/components/settings/SettingsNavHelper";
import { appColors } from "@/constants/Color";
export default function PaymentMethodPage() {
  const [activeSetting, setActiveSetting] =
    useState<SettingsSection>("payment_method");

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
            content={<PaymentMethodContent />}
          />
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
}
