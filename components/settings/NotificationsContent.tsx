import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import ToggleButton from '../ToggleButton';
import { Image } from 'expo-image';

interface NotificationsContentProps {}

const notificationOptions = [
  {
    icon: require('@/assets/images/notification/like.png'),
    title: 'Recommendation',
    description: 'Receive recommendations based on your activities',
  },
  {
    icon: require('@/assets/images/notification/msg.png'),
    title: 'Communication',
    description: 'Receive updates, offers and more',
  },
  {
    icon: require('@/assets/images/notification/receipt.png'),
    title: 'Promotion',
    description: 'Receive offers based on your activity',
  },
  {
    icon: require('@/assets/images/notification/mail.png'),
    title: 'Get alert in your email',
    description: 'Get updates in your email inbox',
  },
  {
    icon: require('@/assets/images/notification/news.png'),
    title: 'Newsletter',
    description: 'Receive email with cars recommendation',
  },
];

const NotificationsContent: React.FC<NotificationsContentProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push notifications</Text>

      <View style={styles.section}>
        <View style={styles.optionsList}>
          {notificationOptions.map((option, index) => (
            <View key={index} style={styles.optionItem}>
              <View style={styles.optionLeft}>
                <View style={styles.optionIcon}>
                  <Image source={option.icon} style={{height:24,width:24,resizeMode:'contain'}}/>
                </View>
                <View>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
              </View>
              <ToggleButton />
            </View>
          ))}
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
    fontSize: 26,
    paddingTop:32,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 15,
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
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
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
    fontSize: 15,
    paddingBottom:5,
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
