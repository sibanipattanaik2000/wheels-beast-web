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
    alignItems: 'stretch', // ✨ this ensures left and right have same height
    overflow: 'hidden',
    
  },
  sidebarContainer: {
    width: '20%',
    backgroundColor: appColors.AdditionalColor.white,
    borderTopLeftRadius:16,
    borderBottomLeftRadius:16,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    borderTopRightRadius: 16,
    borderBottomRightRadius:16,
    overflow: 'hidden',
    paddingVertical:20
  },
});

export default SidebarContentLayout;
