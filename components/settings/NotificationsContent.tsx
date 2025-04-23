import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface NotificationsContentProps {
  // Any props can be added here if needed
}

const NotificationsContent: React.FC<NotificationsContentProps> = () => {
  // State for notification settings
  const [generalNotifications, setGeneralNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);
  const [promotions, setPromotions] = useState(false);
  const [updates, setUpdates] = useState(true);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push notifications</Text>
      <Text style={styles.subtitle}>Manage your notification preferences</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        
        <View style={styles.optionsList}>
          {/* General notifications */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="notifications-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Push notifications</Text>
                <Text style={styles.optionDescription}>Enable push notifications</Text>
              </View>
            </View>
            <Switch
              value={generalNotifications}
              onValueChange={setGeneralNotifications}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
            />
          </View>
          
          {/* Sound */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="volume-high-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Sound</Text>
                <Text style={styles.optionDescription}>Enable notification sounds</Text>
              </View>
            </View>
            <Switch
              value={sound}
              onValueChange={setSound}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
              disabled={!generalNotifications}
            />
          </View>
          
          {/* Vibration */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="phone-portrait-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Vibration</Text>
                <Text style={styles.optionDescription}>Enable vibration for notifications</Text>
              </View>
            </View>
            <Switch
              value={vibration}
              onValueChange={setVibration}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
              disabled={!generalNotifications}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Types</Text>
        
        <View style={styles.optionsList}>
          {/* Promotions */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="pricetag-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Promotions</Text>
                <Text style={styles.optionDescription}>Offers, discounts, and updates</Text>
              </View>
            </View>
            <Switch
              value={promotions}
              onValueChange={setPromotions}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
              disabled={!generalNotifications}
            />
          </View>
          
          {/* App updates */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="refresh-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>App updates</Text>
                <Text style={styles.optionDescription}>New features and improvements</Text>
              </View>
            </View>
            <Switch
              value={updates}
              onValueChange={setUpdates}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
              disabled={!generalNotifications}
            />
          </View>
        </View>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  optionsList: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: appColors.GreyScale[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  optionDescription: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
});

export default NotificationsContent; 