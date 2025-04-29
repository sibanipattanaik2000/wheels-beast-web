import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { appColors } from '@/constants/Color'
import appFonts from '@/constants/Font'

interface Section {
  id: string;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    id: '1',
    title: '1. What information do we collect?',
    content: 'We obtain information about you through the means discussed below when we provide the Services. Please note that we need certain types of information to provide the Services to you. If you do not provide us with such information, or if you ask us to delete that information, you may no longer be able to access or use certain Services.'
  },
  {
    id: '2',
    title: '2. We Use Your Information For?',
    content: 'Your information is used to provide better services and improve user experience. We analyze usage patterns to enhance our platform functionality and security.'
  },
  {
    id: '3',
    title: '3. How Do We Protect?',
    content: 'We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.'
  },
  {
    id: '4',
    title: '4. Online Analytics',
    content: 'We use analytics tools to understand how users interact with our services and improve our offerings based on this data.'
  },
  {
    id: '5',
    title: '5. Children’s Privacy',
    content: 'We use analytics tools to understand how users interact with our services and improve our offerings based on this data.'
  },
  
];

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState<string>('1');
const router = useRouter();
  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection('');
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: appColors.AdditionalColor.white }]}>
      <SafeAreaView style={styles.safeArea}>
       

        <View style={styles.header}>
          <Text style={{fontSize:24,fontFamily:appFonts.UrbanistBold,color:"#EAB308"}}>Terms & Privacy Policy</Text>
          <Text style={styles.title}>WheelsBeast privacy policy</Text>
          <Text style={styles.lastUpdated}>Last updated: Apr 01, 2022</Text>
        </View>

        <ScrollView 
          style={[styles.contentContainer, { backgroundColor:appColors.AdditionalColor.white }]} 
          showsVerticalScrollIndicator={false}
        >
          {sections.map((section) => (
            <View key={section.id} style={styles.section}>
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => toggleSection(section.id)}
              >
                <Text style={[styles.sectionTitle, {color:appColors.GreyScale[900]}]}>{section.title}</Text>
                <Ionicons
                  name={expandedSection === section.id ? 'remove' : 'add'}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
              
              {expandedSection === section.id && (
                <View style={styles.sectionContent}>
                  <Text style={styles.sectionText}>{section.content}</Text>
                  {section.id === '1' && (
                    <TouchableOpacity style={styles.showMoreButton}>
                      <Text style={styles.showMoreText}>Show more</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 32,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginVertical: 16
  },
  lastUpdated: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color:appColors.GreyScale[500]
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#000',
  
    paddingTop: 20,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    flex: 1,
  },
  sectionContent: {
    padding: 20,
    paddingTop: 0,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[400],
    lineHeight: 24,
  },
  showMoreButton: {
    marginTop: 16,
  },
  showMoreText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: '#4318FF',
  },
});

export default PrivacyPolicy;