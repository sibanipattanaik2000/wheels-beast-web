import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface HelpContentProps {
  // Any props can be added here if needed
}

const HelpContent: React.FC<HelpContentProps> = () => {
  // State for the search input
  const [searchQuery, setSearchQuery] = useState('');
  
  // Common FAQs
  const faqs = [
    {
      id: '1',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login screen and tap on "Forgot Password". Follow the instructions sent to your email to create a new password.'
    },
    {
      id: '2',
      question: 'How do I update payment information?',
      answer: 'Go to Settings > Payment Method and tap on the card you want to update or "Add new card" to add a new payment method.'
    },
    {
      id: '3',
      question: 'How do I enable push notifications?',
      answer: 'Go to Settings > Push Notifications and toggle the switch for "Push Notifications" to enable them.'
    },
    {
      id: '4',
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team by filling out the contact form below, or by emailing support@wheelbeast.com.'
    }
  ];
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Get Help</Text>
      <Text style={styles.subtitle}>We're here to help you</Text>
      
      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={appColors.GreyScale[500]} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for help"
          placeholderTextColor={appColors.GreyScale[500]}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {/* FAQs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        <View style={styles.faqList}>
          {faqs.map(faq => (
            <View key={faq.id} style={styles.faqItem}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* Contact Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Name</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter your name"
              placeholderTextColor={appColors.GreyScale[500]}
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Enter your email"
              placeholderTextColor={appColors.GreyScale[500]}
              keyboardType="email-address"
            />
          </View>
          
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Message</Text>
            <TextInput
              style={[styles.formInput, styles.formTextarea]}
              placeholder="Describe your issue"
              placeholderTextColor={appColors.GreyScale[500]}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
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
  faqList: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    overflow: 'hidden',
  },
  faqItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  faqQuestion: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[700],
    lineHeight: 20,
  },
  formContainer: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    padding: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 8,
  },
  formInput: {
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
  },
  formTextarea: {
    minHeight: 100,
    paddingTop: 12,
  },
  submitButton: {
    backgroundColor: appColors.main.Primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.AdditionalColor.white,
  },
});

export default HelpContent; 