import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface LinkAccountContentProps {
  // Any props can be added here if needed
}

const LinkAccountContent: React.FC<LinkAccountContentProps> = () => {
  // Mock data for connected accounts
  const accounts = [
    {
      id: 'google',
      name: 'Google',
      username: 'saski.ropokova@gmail.com',
      icon: require('@/assets/images/brand/Car.png'),
      isConnected: true,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      username: '',
      icon: require('@/assets/images/brand/Car.png'),
      isConnected: false,
    },
    {
      id: 'apple',
      name: 'Apple',
      username: 'saski.ropokova@icloud.com',
      icon: require('@/assets/images/brand/Car.png'),
      isConnected: true,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      username: '',
      icon: require('@/assets/images/brand/Car.png'),
      isConnected: false,
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link Account</Text>
      <Text style={styles.subtitle}>Connect your accounts for a better experience</Text>
      
      <View style={styles.accountList}>
        {accounts.map((account) => (
          <TouchableOpacity key={account.id} style={styles.accountItem}>
            <View style={styles.accountLeft}>
              <View style={styles.accountIcon}>
                <Image 
                  source={account.icon} 
                  style={styles.iconImage} 
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text style={styles.accountName}>{account.name}</Text>
                {account.isConnected && account.username ? (
                  <Text style={styles.accountUsername}>{account.username}</Text>
                ) : null}
              </View>
            </View>
            
            <View style={styles.accountRight}>
              {account.isConnected ? (
                <TouchableOpacity style={styles.disconnectButton}>
                  <Text style={styles.disconnectText}>Disconnect</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.connectButton}>
                  <Text style={styles.connectText}>Connect</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 24,
  },
  accountList: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    overflow: 'hidden',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: appColors.GreyScale[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  accountName: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  accountUsername: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
  accountRight: {
    
  },
  disconnectButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
  },
  disconnectText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[500],
  },
  connectButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: appColors.main.Primary,
  },
  connectText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.AdditionalColor.white,
  },
});

export default LinkAccountContent; 