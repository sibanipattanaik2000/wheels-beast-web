import React, { ReactNode } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { appColors } from '@/constants/Color';

interface PageLayoutProps {
  children: ReactNode;
  headerType?: 'home' | 'default' | string;
  showFooter?: boolean;
}

/**
 * PageLayout component that includes Header and Footer
 * @param children - The content to display between header and footer
 * @param headerType - Type of header to display ('home' or 'default')
 * @param showFooter - Whether to show the footer (default: true)
 */
const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  headerType = 'home',
  showFooter = true 
}) => {
  return (
    <View style={styles.container}>
      <Header type={headerType} />
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {children}
        
        {showFooter && <Footer />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.GreyScale[50],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  }
});

export default PageLayout; 