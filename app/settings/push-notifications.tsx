import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import CustomSafeArea from '@/components/CustomSafeArea'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ScrollView } from 'react-native'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'
import NotificationsContent from '@/components/settings/NotificationsContent'

export default function PushNotificationsPage() {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('push_notifications')

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
        content={<NotificationsContent />}
      />
      <Footer/>
      </ScrollView>
      </CustomSafeArea>
  )
} 