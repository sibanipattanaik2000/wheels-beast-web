import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface PrivacyPolicyContentProps {
  // Any props can be added here if needed
}

const PrivacyPolicyContent: React.FC<PrivacyPolicyContentProps> = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.subtitle}>Last updated: May 20, 2023</Text>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          WheelBeast ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by WheelBeast.
        </Text>
        <Text style={styles.paragraph}>
          This Privacy Policy applies to our website, mobile application, and related services (collectively, our "Service"), and describes the types of information we may collect from you or that you may provide when you use our Service and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </Text>
      </View>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          We collect several types of information from and about users of our Service, including:
        </Text>
        <Text style={styles.bulletPoint}>• Personal information such as name, email address, phone number, and payment information.</Text>
        <Text style={styles.bulletPoint}>• Information about your location when you use our Service.</Text>
        <Text style={styles.bulletPoint}>• Information about your device and internet connection.</Text>
        <Text style={styles.bulletPoint}>• Usage details and preferences.</Text>
      </View>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          We use the information we collect about you or that you provide to us, including any personal information:
        </Text>
        <Text style={styles.bulletPoint}>• To provide, maintain, and improve our Service.</Text>
        <Text style={styles.bulletPoint}>• To process transactions and send related information.</Text>
        <Text style={styles.bulletPoint}>• To send notifications and updates related to our Service.</Text>
        <Text style={styles.bulletPoint}>• To personalize your experience and deliver content and product offerings relevant to your interests.</Text>
        <Text style={styles.bulletPoint}>• To respond to your comments, questions, and requests.</Text>
      </View>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Disclosure of Your Information</Text>
        <Text style={styles.paragraph}>
          We may disclose personal information that we collect or you provide as described in this Privacy Policy:
        </Text>
        <Text style={styles.bulletPoint}>• To contractors, service providers, and other third parties we use to support our business.</Text>
        <Text style={styles.bulletPoint}>• To comply with any court order, law, or legal process.</Text>
        <Text style={styles.bulletPoint}>• To enforce our terms of service and other agreements.</Text>
        <Text style={styles.bulletPoint}>• If we believe disclosure is necessary to protect the rights, property, or safety of WheelBeast, our users, or others.</Text>
      </View>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.paragraph}>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
        </Text>
        <Text style={styles.paragraph}>
          Unfortunately, the transmission of information via the internet and mobile platforms is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted through our Service.
        </Text>
      </View>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Changes to Our Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update our Privacy Policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on our website or mobile application.
        </Text>
        <Text style={styles.paragraph}>
          The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Service and this Privacy Policy to check for any changes.
        </Text>
      </View>
      
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.paragraph}>
          If you have any questions or comments about this Privacy Policy and our privacy practices, please contact us at:
        </Text>
        <Text style={styles.contact}>privacy@wheelbeast.com</Text>
        <Text style={styles.contact}>123 WheelBeast Street, San Francisco, CA 94107</Text>
        <Text style={styles.contact}>+1 (555) 123-4567</Text>
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
  contentSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[700],
    lineHeight: 22,
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[700],
    lineHeight: 22,
    marginBottom: 8,
    paddingLeft: 12,
  },
  contact: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
    marginBottom: 4,
  },
});

export default PrivacyPolicyContent; 