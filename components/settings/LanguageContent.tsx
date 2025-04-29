import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import { useTranslation } from 'react-i18next';

interface LanguageContentProps {
  // Any props can be added here if needed
}

const LanguageContent: React.FC<LanguageContentProps> = () => {
 // const { t, i18n } = useTranslation();

  // Sample language options with flag images
  const languages = [
    { id: 'en', name: 'English (US)', flag: require('@/assets/images/flags/us.png') },
    { id: 'eng', name: 'English (ENG)', flag: require('@/assets/images/flags/en.png') },
    { id: 'in', name: 'Indonesian', flag: require('@/assets/images/flags/in.png') },
    { id: 'ru', name: 'Russia', flag: require('@/assets/images/flags/ru.png') },
    { id: 'fr', name: 'French', flag: require('@/assets/images/flags/fr.png') }, 
    { id: 'ch', name: 'Chinese', flag: require('@/assets/images/flags/ch.png') }, 
    { id: 'ja', name: 'Japanese', flag: require('@/assets/images/flags/ja.png') }, 
    { id: 'ge', name: 'Germany', flag: require('@/assets/images/flags/ge.png') }, 
    { id: 'nl', name: 'Netherland', flag: require('@/assets/images/flags/nl.png') }, 
  ];

  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handle language selection and update i18next language
  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
   // i18n.changeLanguage(languageId); // Update app language
  };

  return (
    <View style={styles.container}>
      {/* Translated Title */}
      {/* <Text style={styles.title}>{t('welcome')}</Text> */}

      {/* Search Container */}
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: appColors.GreyScale[50],
            borderWidth: isSearchFocused ? 1 : 0,
            borderColor: isSearchFocused ? appColors.main.Primary : 'transparent',
            width: '40%',
          },
        ]}
      >
        <TextInput
          placeholder="Search message"
          placeholderTextColor={appColors.GreyScale[400]}
          style={[styles.searchInput, { color: appColors.GreyScale[900] }]}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        <Ionicons name="search" size={20} color={appColors.GreyScale[400]} />
      </View>

      {/* Translated Language Selection Message */}
      <Text style={styles.languageSelectionText}>
        {/* {t('language_selected', { language: languages.find(lang => lang.id === selectedLanguage)?.name })} */}
      </Text>

      <ScrollView style={styles.languageList}>
        {languages.map(language => (
          <TouchableOpacity
            key={language.id}
            style={[
              styles.languageItem,
              selectedLanguage === language.id && styles.selectedLanguageItem,
            ]}
            onPress={() => handleLanguageSelect(language.id)}
          >
            <View >
              <Image source={language.flag} style={styles.flag} />
            </View>
            <Text
              style={[
                styles.languageName,
                selectedLanguage === language.id && styles.selectedLanguageName,
              ]}
            >
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 56,
    borderRadius: 16,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
  },
  languageSelectionText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  languageList: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  selectedLanguageItem: {
    backgroundColor: appColors.GreyScale[50],
  },
  flag: {
    width: 30,
    height: 30,
    resizeMode:'contain'
  },
  languageName: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginLeft:10,
  },
  selectedLanguageName: {
    fontFamily: appFonts.UrbanistBold,
    color: appColors.main.Primary,
  },
  checkIcon: {
    marginLeft: 'auto',
  },
});

export default LanguageContent;