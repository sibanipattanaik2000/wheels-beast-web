import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';
import CalendarSelect from './CalendarSelect';
import TimeSlotDropdown from './TimeSlotDropdown';
import LocationSelect from './LocationSelect';
import Button from './Button';
import { Href, useRouter } from 'expo-router';

interface TestDriveSchedulerProps {
  onSchedule: (scheduleData: {
    date: Date;
    timeSlot: string;
    location: string;
  }) => void;
  defaultLocation?: string;
  primaryColor?: string;
}

const TestDriveScheduler = ({
  onSchedule,
  defaultLocation = 'Filbert street, San Francisco',
  primaryColor = appColors.main.Primary
}: TestDriveSchedulerProps) => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [location, setLocation] = useState<string>(defaultLocation);

  const handleSchedule = () => {
    onSchedule({
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      location: location
    });
    router.push('/car-details' as Href); // Example navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule a test drive</Text>

      {/* Calendar for date selection */}
      <CalendarSelect
        onDateSelect={setSelectedDate}
        initialDate={new Date()}
        primaryColor={primaryColor}
      />

      {/* Time slot selection */}
      <TimeSlotDropdown
        onTimeSelect={setSelectedTimeSlot}
        primaryColor={primaryColor}
        label="Select a time"
        placeholder="Click to select time slot"
      />

      {/* Location selection */}
      <LocationSelect
        location={location}
        primaryColor={primaryColor}
      />

      {/* Continue button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          variant="filled"
          color={appColors.AdditionalColor.white}
          fontWeight="UrbanistBold"
          style={{ backgroundColor: primaryColor }}
          width="100%"
          onPress={handleSchedule}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 24,
    color: appColors.GreyScale[900],
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 32,
  }
});

export default TestDriveScheduler; 