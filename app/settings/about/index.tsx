import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import AboutContent from '@/components/settings/AboutContent'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import { ScrollView } from 'react-native'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'

export default function AboutPage() {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('about')

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
        content={<AboutContent />}
      />
      <Footer />
    </ScrollView>
   </CustomSafeArea>
      
  )
} 