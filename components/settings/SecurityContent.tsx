import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface SecurityContentProps {
  // Any props can be added here if needed
}

const SecurityContent: React.FC<SecurityContentProps> = () => {
  // State for security settings
  const [faceId, setFaceId] = useState(true);
  const [rememberMe, setRememberMe] = useState(true);
  const [biometricAuth, setBiometricAuth] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Security</Text>
      <Text style={styles.subtitle}>Manage your security preferences</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication</Text>
        
        <View style={styles.optionsList}>
          {/* Face ID / Touch ID */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="finger-print-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Face ID / Touch ID</Text>
                <Text style={styles.optionDescription}>Use biometrics to unlock app</Text>
              </View>
            </View>
            <Switch
              value={faceId}
              onValueChange={setFaceId}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
            />
          </View>
          
          {/* Remember me */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="lock-closed-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Remember me</Text>
                <Text style={styles.optionDescription}>Stay signed in</Text>
              </View>
            </View>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
            />
          </View>
          
          {/* Biometric authentication */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="scan-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Biometric authentication</Text>
                <Text style={styles.optionDescription}>For payments and sensitive actions</Text>
              </View>
            </View>
            <Switch
              value={biometricAuth}
              onValueChange={setBiometricAuth}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
            />
          </View>
          
          {/* Two-factor authentication */}
          <View style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="shield-checkmark-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Two-factor authentication</Text>
                <Text style={styles.optionDescription}>Add an extra layer of security</Text>
              </View>
            </View>
            <Switch
              value={twoFactorAuth}
              onValueChange={setTwoFactorAuth}
              trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
              thumbColor={appColors.AdditionalColor.white}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security Options</Text>
        
        <View style={styles.optionsList}>
          {/* Change password */}
          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="key-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Change password</Text>
                <Text style={styles.optionDescription}>Update your account password</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
          
          {/* Trusted devices */}
          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="laptop-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Trusted devices</Text>
                <Text style={styles.optionDescription}>Manage devices that can access your account</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
          
          {/* Privacy policy */}
          <TouchableOpacity style={styles.optionItem}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIcon}>
                <Ionicons name="document-text-outline" size={24} color={appColors.GreyScale[900]} />
              </View>
              <View>
                <Text style={styles.optionTitle}>Privacy policy</Text>
                <Text style={styles.optionDescription}>Read our privacy policy</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
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
  logoutButton: {
    backgroundColor: appColors.AdditionalColor.white,
    borderWidth: 1,
    borderColor: appColors.alert.Error,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.alert.Error,
  },
});

export default SecurityContent; 