import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface AboutContentProps {
  // Any props can be added here if needed
}

const AboutContent: React.FC<AboutContentProps> = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About WheelBeast</Text>
      <Text style={styles.subtitle}>Learn more about our app</Text>
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/brand/Car.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>WheelBeast</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Information</Text>
        
        <View style={styles.infoList}>
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoLeft}>
              <View style={styles.infoIcon}>
                <Ionicons name="newspaper-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <Text style={styles.infoText}>Terms & Conditions</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoLeft}>
              <View style={styles.infoIcon}>
                <Ionicons name="document-text-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <Text style={styles.infoText}>Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoLeft}>
              <View style={styles.infoIcon}>
                <Ionicons name="star-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <Text style={styles.infoText}>Rate the App</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.infoLeft}>
              <View style={styles.infoIcon}>
                <Ionicons name="share-social-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <Text style={styles.infoText}>Share the App</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connect With Us</Text>
        
        <View style={styles.socialList}>
          <TouchableOpacity style={styles.socialItem}>
            <View style={[styles.socialIcon, { backgroundColor: '#3b5998' }]}>
              <Ionicons name="logo-facebook" size={24} color="#fff" />
            </View>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialItem}>
            <View style={[styles.socialIcon, { backgroundColor: '#00acee' }]}>
              <Ionicons name="logo-twitter" size={24} color="#fff" />
            </View>
            <Text style={styles.socialText}>Twitter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialItem}>
            <View style={[styles.socialIcon, { backgroundColor: '#E1306C' }]}>
              <Ionicons name="logo-instagram" size={24} color="#fff" />
            </View>
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  logoContainer: {
    alignItems: 'center',
    marginVertical: 32,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
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
  infoList: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    overflow: 'hidden',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: appColors.GreyScale[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  infoText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  socialList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialItem: {
    alignItems: 'center',
    width: '30%',
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  socialText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
  },
});

export default AboutContent; 