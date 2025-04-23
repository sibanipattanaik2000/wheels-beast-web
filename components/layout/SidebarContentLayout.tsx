import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { appColors } from '@/constants/Color';

interface SidebarContentLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

/**
 * A reusable layout component that displays a sidebar on the left and content on the right
 * For use in settings pages, profile pages, and other sections that need this layout.
 */
const SidebarContentLayout: React.FC<SidebarContentLayoutProps> = ({ 
  sidebar, 
  content 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        {sidebar}
      </View>
      <View style={styles.contentContainer}>
        {content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: appColors.GreyScale[50],
  },
  sidebarContainer: {
    width:'20%',
    // No explicit width since the sidebar component should have its own width
  },
  contentContainer: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default SidebarContentLayout; 