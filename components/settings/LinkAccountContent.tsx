import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import ToggleButton from '../ToggleButton';

interface LinkAccountContentProps {
  userName: string;
  userRole: string;
  userImage: any;
}

const LinkAccountContent: React.FC<LinkAccountContentProps> = ({ userName, userRole, userImage }) => {
  const linkAccounts = [
    { name: 'Google', image: require('@/assets/images/link/google.png') },
    { name: 'Apple', image: require('@/assets/images/link/apple.png') },
    { name: 'Twitter', image: require('@/assets/images/link/twitter.png') },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appColors.AdditionalColor.white,
      padding: 24,
    },
    userName: {
      fontSize: 18,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
    },
    userRole: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[500],
    },
    profileSection: {
      alignItems: 'center',
      paddingVertical: 20,
      gap: 10,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    title: {
      fontSize: 20,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      paddingVertical: 20,
    },
    linkItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16,
      borderWidth:1,
      borderColor:appColors.GreyScale[200],
      borderRadius:16,
      padding:16
    },
    linkImage: {
      width: 48,
      height: 48,
    },
    linkText: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistBold,
      color: appColors.GreyScale[900],
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={userImage} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userRole}>{userRole}</Text>
      </View>

      <Text style={styles.title}>Link Account</Text>

      {linkAccounts.map((account, index) => (
        <View key={index} style={styles.linkItem}>
          <Image source={account.image} style={styles.linkImage} />
          <Text style={styles.linkText}>{account.name}</Text>
          <ToggleButton />
        </View>
      ))}
    </View>
  );
};

export default LinkAccountContent;
