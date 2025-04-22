import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Expo for icons

interface ShareComponentProps {
  icon: string; // Icon name from Ionicons
  title: string; // Title text
}

const ShareComponent = ({ icon, title }: ShareComponentProps) => {
  return (
    <View style={styles.shareItem}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon as any} size={30} color="#fff" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shareItem: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Slight overlay for contrast
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2
  },
  title: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ShareComponent;