import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import { Ionicons } from '@expo/vector-icons';

interface AppointmentCardProps {
  carName: string;
  location: string;
  date: string;
  time: string;
  carImage: any;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  carName,
  location,
  date,
  time,
  carImage,
}) => {
  return (
    <View style={styles.container}>
      {/* Car image and details */}
      <View style={styles.topSection}>
        <Image source={carImage} style={styles.carImage} resizeMode="contain" />
        <View style={{gap:4}}>
          <Text style={styles.carName}>{carName}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      
      {/* Date and time section */}
      <View style={styles.bottomSection}>
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Date</Text>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={16} color={appColors.main.Primary} />
            <Text style={styles.detailValue}>{date}</Text>
          </View>
        </View>
        
        <View style={styles.detailColumn}>
          <Text style={styles.detailLabel}>Time</Text>
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={16} color={appColors.main.Primary} />
            <Text style={styles.detailValue}>{time}</Text>
          </View>
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
    width: '40%',
    borderRadius: 16,
    padding: 14,
    gap:14,
    
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:18
  },
  carImage: {
    width: 120,
    height: 70,
    resizeMode: 'contain',
  },
  carInfo: {
    flex: 1,
  },
  carName: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  location: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailColumn: {
    width: '45%',
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginBottom: 8,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginLeft: 6,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppointmentCard; 