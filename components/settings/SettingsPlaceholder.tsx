import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface SettingsPlaceholderProps {
  title: string;
  description?: string;
}

const SettingsPlaceholder: React.FC<SettingsPlaceholderProps> = ({
  title,
  description = 'This settings section will be available soon.'
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholderContent}>
        <Text style={styles.placeholderText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 24,
  },
  placeholderContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.GreyScale[50],
    borderRadius: 8,
    padding: 40,
    marginTop: 40,
  },
  placeholderText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    textAlign: 'center',
  },
});

export default SettingsPlaceholder; 