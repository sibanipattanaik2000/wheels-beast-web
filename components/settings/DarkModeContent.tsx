import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface DarkModeContentProps {
  // Any props can be added here if needed
}

const DarkModeContent: React.FC<DarkModeContentProps> = () => {
  // State for dark mode settings
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemDefault, setIsSystemDefault] = useState(true);
  const [isScheduled, setIsScheduled] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    if (!isDarkMode) {
      setIsSystemDefault(false);
      setIsScheduled(false);
    }
  };
  
  const toggleSystemDefault = () => {
    setIsSystemDefault(prev => !prev);
    if (!isSystemDefault) {
      setIsDarkMode(false);
      setIsScheduled(false);
    }
  };
  
  const toggleScheduled = () => {
    setIsScheduled(prev => !prev);
    if (!isScheduled) {
      setIsDarkMode(false);
      setIsSystemDefault(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dark Mode</Text>
      <Text style={styles.subtitle}>Choose the appearance for your app</Text>
      
      <View style={styles.optionsList}>
        {/* Dark mode option */}
        <TouchableOpacity 
          style={styles.optionItem}
          onPress={toggleDarkMode}
        >
          <View style={styles.optionLeft}>
            <View style={styles.optionIcon}>
              <Ionicons name="moon-outline" size={24} color={appColors.GreyScale[900]} />
            </View>
            <View>
              <Text style={styles.optionTitle}>Dark mode</Text>
              <Text style={styles.optionDescription}>App will always use dark theme</Text>
            </View>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
            thumbColor={appColors.AdditionalColor.white}
          />
        </TouchableOpacity>
        
        {/* System default option */}
        <TouchableOpacity 
          style={styles.optionItem}
          onPress={toggleSystemDefault}
        >
          <View style={styles.optionLeft}>
            <View style={styles.optionIcon}>
              <Ionicons name="phone-portrait-outline" size={24} color={appColors.GreyScale[900]} />
            </View>
            <View>
              <Text style={styles.optionTitle}>Use system default</Text>
              <Text style={styles.optionDescription}>App will use your device settings</Text>
            </View>
          </View>
          <Switch
            value={isSystemDefault}
            onValueChange={toggleSystemDefault}
            trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
            thumbColor={appColors.AdditionalColor.white}
          />
        </TouchableOpacity>
        
        {/* Scheduled option */}
        <TouchableOpacity 
          style={styles.optionItem}
          onPress={toggleScheduled}
        >
          <View style={styles.optionLeft}>
            <View style={styles.optionIcon}>
              <Ionicons name="time-outline" size={24} color={appColors.GreyScale[900]} />
            </View>
            <View>
              <Text style={styles.optionTitle}>Scheduled</Text>
              <Text style={styles.optionDescription}>Dark from 7:00 PM to 7:00 AM</Text>
            </View>
          </View>
          <Switch
            value={isScheduled}
            onValueChange={toggleScheduled}
            trackColor={{ false: appColors.GreyScale[200], true: appColors.main.Primary }}
            thumbColor={appColors.AdditionalColor.white}
          />
        </TouchableOpacity>
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

export default DarkModeContent; 