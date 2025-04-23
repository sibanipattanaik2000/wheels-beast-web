import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface LanguageContentProps {
  // Any props can be added here if needed
}

const LanguageContent: React.FC<LanguageContentProps> = () => {
  // Sample language options
  const languages = [
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'es', name: 'Spanish', flag: '🇪🇸' },
    { id: 'fr', name: 'French', flag: '🇫🇷' },
    { id: 'de', name: 'German', flag: '🇩🇪' },
    { id: 'it', name: 'Italian', flag: '🇮🇹' },
    { id: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { id: 'ru', name: 'Russian', flag: '🇷🇺' },
    { id: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { id: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { id: 'ko', name: 'Korean', flag: '🇰🇷' },
  ];
  
  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language</Text>
      <Text style={styles.subtitle}>Select your preferred language</Text>
      
      <ScrollView style={styles.languageList}>
        {languages.map(language => (
          <TouchableOpacity 
            key={language.id}
            style={[
              styles.languageItem,
              selectedLanguage === language.id && styles.selectedLanguageItem
            ]}
            onPress={() => setSelectedLanguage(language.id)}
          >
            <View style={styles.flagContainer}>
              <Text style={styles.flag}>{language.flag}</Text>
            </View>
            <Text style={[
              styles.languageName,
              selectedLanguage === language.id && styles.selectedLanguageName
            ]}>
              {language.name}
            </Text>
            {selectedLanguage === language.id && (
              <Ionicons 
                name="checkmark-circle" 
                size={20} 
                color={appColors.main.Primary}
                style={styles.checkIcon}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
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
  languageList: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    marginBottom: 24,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  selectedLanguageItem: {
    backgroundColor: appColors.GreyScale[50],
  },
  flagContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: appColors.GreyScale[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  flag: {
    fontSize: 22,
  },
  languageName: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
  },
  selectedLanguageName: {
    fontFamily: appFonts.UrbanistBold,
    color: appColors.main.Primary,
  },
  checkIcon: {
    marginLeft: 'auto',
  },
  applyButton: {
    backgroundColor: appColors.main.Primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.AdditionalColor.white,
  },
});

export default LanguageContent; 