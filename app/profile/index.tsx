import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Href, router } from 'expo-router';
import { appColors } from '@/constants/Color';
import PageLayout from '@/components/layout/PageLayout';

// This is the main entry point for the profile section
// It automatically redirects to the edit profile page
const Profile = () => {
  useEffect(() => {
    // Redirect to the edit profile page
    router.replace('/profile/edit-profile' as Href);
  }, []);

  return (
    <PageLayout headerType="home">
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: appColors.GreyScale[50] }}>
      <ActivityIndicator size="large" color={appColors.main.Primary} />
    </View>
    </PageLayout>
  );
};

export default Profile; 