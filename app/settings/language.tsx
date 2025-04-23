import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import Footer from '@/components/Footer'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import { ScrollView } from 'react-native'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'
import LanguageContent from '@/components/settings/LanguageContent'

export default function LanguagePage() {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('language')

  const handleSelectSetting = (setting: SettingsSection) => {
    setActiveSetting(setting) // Update local state first
    navigateToSettingPage(setting, activeSetting)
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
        content={<LanguageContent />}
      />
      <Footer />
    </ScrollView>
   </CustomSafeArea>
  )
} 