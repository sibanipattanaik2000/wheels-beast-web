import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import DarkModeContent from '@/components/settings/DarkModeContent'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'
import CustomSafeArea from '@/components/CustomSafeArea'
import { ScrollView } from 'react-native'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DarkModePage() {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('dark_mode')

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
        content={<DarkModeContent />}
      />
      <Footer />
    </ScrollView>
  </CustomSafeArea>
      
   
  )
} 