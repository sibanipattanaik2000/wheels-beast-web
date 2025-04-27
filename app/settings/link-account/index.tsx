import React, { useState } from 'react'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import LinkAccountContent from '@/components/settings/LinkAccountContent'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import PageLayout from '@/components/layout/PageLayout'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import { ScrollView } from 'react-native'
import Footer from '@/components/Footer'
import { navigateToSettingPage } from '@/components/settings/SettingsNavHelper'

export default function LinkAccountPage() {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('link_account')

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
        content={<LinkAccountContent userName={'Saski Ropokova'} userRole={'Saski Ropokova'} userImage={require('@/assets/images/Profile/avtar.png')} />}
      />
      <Footer />
    </ScrollView>
   </CustomSafeArea>
  )
} 