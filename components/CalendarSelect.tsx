import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';

interface CalendarSelectProps {
  onDateSelect: (date: Date) => void;
  initialDate?: Date;
  primaryColor?: string;
}

const CalendarSelect = ({ 
  onDateSelect, 
  initialDate = new Date(), 
  primaryColor = appColors.main.Primary 
}: CalendarSelectProps) => {
  // Get current date/month
  const [currentMonth, setCurrentMonth] = useState(new Date(initialDate));
  const [selectedDate, setSelectedDate] = useState(initialDate);
  
  // Get month name and year
  const monthYearDisplay = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  // Generate dates for the current month (only next 7 days shown)
  const getDaysArray = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Show 7 days starting from today
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  // Handle month navigation
  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  // Day names mapping
  const getDayName = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  // Render day item
  const renderDayItem = ({ item }: { item: Date }) => {
    const isSelected = selectedDate.getDate() === item.getDate() && 
                      selectedDate.getMonth() === item.getMonth() &&
                      selectedDate.getFullYear() === item.getFullYear();
    
    return (
      <TouchableOpacity
        style={[
          styles.dayItem,
          isSelected && { 
            backgroundColor: primaryColor,
            borderColor: primaryColor
          }
        ]}
        onPress={() => handleDateSelect(item)}
      >
        <Text style={[
          styles.dayNumber,
          isSelected && styles.selectedText
        ]}>
          {item.getDate()}
        </Text>
        <Text style={[
          styles.dayName,
          isSelected && styles.selectedText
        ]}>
          {getDayName(item)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToPreviousMonth} style={styles.navButton}>
          <Ionicons name="chevron-back" size={24} color={appColors.GreyScale[700]} />
        </TouchableOpacity>
        
        <Text style={styles.monthYear}>{monthYearDisplay}</Text>
        
        <TouchableOpacity onPress={goToNextMonth} style={styles.navButton}>
          <Ionicons name="chevron-forward" size={24} color={appColors.GreyScale[700]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.navButton}>
          <Ionicons name="calendar-outline" size={24} color={appColors.GreyScale[700]} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={getDaysArray()}
        renderItem={renderDayItem}
        keyExtractor={(item) => item.toISOString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  navButton: {
    padding: 6,
  },
  monthYear: {
    fontFamily: appFonts.UrbanistSemiBold,
    fontSize: 16,
    color: appColors.GreyScale[800],
  },
  daysContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    gap: 8,
  },
  dayItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,    
  },
  dayNumber: {
    fontFamily: appFonts.UrbanistSemiBold,
    fontSize: 16,
    color: appColors.GreyScale[900],
  },
  dayName: {
    fontFamily: appFonts.UrbanistRegular,
    fontSize: 12,
    color: appColors.GreyScale[600],
  },
  selectedText: {
    color: appColors.AdditionalColor.white,
  },
});

export default CalendarSelect; 