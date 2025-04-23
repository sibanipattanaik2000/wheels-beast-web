import { router, Href } from 'expo-router';
import { SettingsSection } from '@/components/SettingsSidebar';

/**
 * Helper function to safely navigate between settings pages
 * @param setting The settings section to navigate to
 * @param currentSetting The current settings section (to avoid unnecessary navigation)
 */
export const navigateToSettingPage = (setting: SettingsSection, currentSetting: SettingsSection) => {
  if (setting === currentSetting) return; // Already on this page
  
  // Wrap in setTimeout to ensure it happens after render
  setTimeout(() => {
    try {
      switch(setting) {
        case 'payment_method':
          router.replace('/settings/payment-method' as Href);
          break;
        case 'link_account':
          router.replace('/settings/link-account' as Href);
          break;
        case 'dark_mode':
          router.replace('/settings/dark-mode' as Href);
          break;
        case 'language':
          router.replace('/settings/language' as Href);
          break;
        case 'push_notifications':
          router.replace('/settings/push-notifications' as Href);
          break;
        case 'security':
          router.replace('/settings/security' as Href);
          break;
        case 'about':
          router.replace('/settings/about' as Href);
          break;
        case 'get_help':
          router.replace('/settings/help' as Href);
          break;
        case 'privacy_policy':
          router.replace('/settings/privacy-policy' as Href);
          break;
        default:
          router.replace('/settings' as Href);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }, 0);
}; 