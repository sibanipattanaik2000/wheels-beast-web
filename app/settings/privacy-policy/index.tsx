import React, { useState } from 'react'
import { Href, router } from 'expo-router'
import SettingsSidebar, { SettingsSection } from '@/components/SettingsSidebar'
import SidebarContentLayout from '@/components/layout/SidebarContentLayout'
import CustomSafeArea from '@/components/CustomSafeArea'
import Header from '@/components/Header'
import { ScrollView } from 'react-native'
import Footer from '@/components/Footer'
import PrivacyPolicyContent from '@/components/settings/PrivacyPolicyContent'

export default function PrivacyPolicyPage() {
  const [activeSetting, setActiveSetting] = useState<SettingsSection>('privacy_policy')

  const handleSelectSetting = (setting: SettingsSection) => {
    if (setting === 'privacy_policy') return; // Already on this page
    
    // Navigate based on the selected setting
    try {
      switch(setting) {
        case 'payment_method':
          router.replace('/settings/payment-method');
          break;
        case 'link_account':
          router.replace('/settings/link-account');
          break;
        case 'dark_mode':
          router.replace('/settings/dark-mode');
          break;
        case 'language':
          router.replace('/settings/language');
          break;
        case 'push_notifications':
          router.replace('/settings/push-notifications');
          break;
        case 'security':
          router.replace('/settings/security');
          break;
        case 'about':
          router.replace('/settings/about');
          break;
        case 'get_help':
          router.replace('/settings/help');
          break;
        default:
          router.replace('/settings' as Href);
      }
    } catch (error) {
      // Fallback to index if navigation fails
      router.replace('/settings' as Href);
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
      content={<PrivacyPolicyContent />}
    />
    <Footer />
    </ScrollView>
    </CustomSafeArea>
  )
} 