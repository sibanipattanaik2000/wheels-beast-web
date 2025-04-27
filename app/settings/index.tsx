import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import PaymentMethodContent from '@/components/settings/PaymentMethodContent'
import LinkAccountContent from '@/components/settings/LinkAccountContent'
import DarkModeContent from '@/components/settings/DarkModeContent'
import SecurityContent from '@/components/settings/SecurityContent'
import AboutContent from '@/components/settings/AboutContent'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import { ScrollView } from 'react-native'
import Footer from '@/components/Footer'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'
import LanguageContent from '@/components/settings/LanguageContent'
import NotificationsContent from '@/components/settings/NotificationsContent'
import HelpContent from '@/components/settings/HelpContent'
import PrivacyPolicyContent from '@/components/settings/PrivacyPolicyContent'

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
      case 'security':
        return <SecurityContent />;
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
    <SidebarContentLayout 
        sidebar={
          <SettingsSidebar 
            activeSetting={activeSetting} 
            onSelectSetting={handleSelectSetting} 
          />
        }
        content={renderContent()}
      />
      <Footer />
    </ScrollView>
   </CustomSafeArea>
  )
}

export default Settings