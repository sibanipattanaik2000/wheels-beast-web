import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import { Ionicons } from '@expo/vector-icons';

interface TestDriveCardProps {
  carName: string;
  location: string;
  distance: string;
  status: string;
  date: string;
  time: string;
  carImage: any;
}

const TestDriveCard: React.FC<TestDriveCardProps> = ({
  carName,
  location,
  distance,
  status,
  date,
  time,
  carImage,
}) => {
  // Determine status color
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return appColors.alert.Success;
      case 'completed':
        return appColors.main.Primary;
      default:
        return appColors.GreyScale[500];
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={carImage} style={styles.carImage} resizeMode="contain" />
        <View>
          <Text style={styles.carName}>{carName}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <View style={styles.detailsRow}>
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Distance</Text>
          <Text style={styles.detailValue}>{distance}</Text>
        </View>
        
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Status</Text>
          <Text style={[styles.statusValue, { color: getStatusColor() }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.detailsRow}>
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>{date}</Text>
        </View>
        
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Time</Text>
          <Text style={styles.detailValue}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.GreyScale[50],
    shadowColor: appColors.GreyScale[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '48%',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 16,
  },
  carImage: {
    width: 100,
    height: 60,
  },
  carName: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailColumn: {
    width: '48%',
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 8,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  statusValue: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
  },
});

export default TestDriveCard;