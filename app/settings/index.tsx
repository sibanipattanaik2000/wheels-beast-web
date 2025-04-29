import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import PaymentMethodContent from '@/components/settings/PaymentMethodContent'
import LinkAccountContent from '@/components/settings/LinkAccountContent'
import DarkModeContent from '@/components/settings/DarkModeContent'
import SecurityContent from '@/components/settings/Review'
import AboutContent from '@/components/settings/AboutContent'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import { ScrollView, View } from 'react-native'
import Footer from '@/components/Footer'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'
import LanguageContent from '@/components/settings/LanguageContent'
import NotificationsContent from '@/components/settings/NotificationsContent'
import HelpContent from '@/components/settings/HelpContent'
import PrivacyPolicyContent from '@/components/settings/PrivacyPolicyContent'
import { appColors } from '@/constants/Color'

const Settings = () => {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('payment_method')

  const handleSelectSetting = (setting: SettingsSection) => {
    setActiveSetting(setting)
    navigateToSettingPage(setting, activeSetting)
  }

  // Render the selected content directly
  const renderContent = () => {
    switch (activeSetting) {
      case 'payment_method':
        return <PaymentMethodContent />;
      case 'link_account':
        return <LinkAccountContent userName={''} userRole={''} userImage={undefined} />;
      case 'dark_mode':
      case 'dark_mode_app':
        return <DarkModeContent />;
      case 'language':
        return <LanguageContent />;
      case 'push_notifications':
        return <NotificationsContent />;
      case 'about':
        return <AboutContent />;
      case 'get_help':
        return <HelpContent />;
      case 'privacy_policy':
        return <PrivacyPolicyContent />;
      default:
        return <PaymentMethodContent />;
    }
  }

  return (
    <CustomSafeArea>
    <Header type="home" />
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal:70,paddingVertical:47,backgroundColor:appColors.GreyScale[100]}}>
    <SidebarContentLayout 
        sidebar={
          <SettingsSidebar 
            activeSetting={activeSetting} 
            onSelectSetting={handleSelectSetting} 
          />
        }
        content={renderContent()}
      />
      </View>
      <Footer />
    </ScrollView>
   </CustomSafeArea>
  )
}

export default Settings