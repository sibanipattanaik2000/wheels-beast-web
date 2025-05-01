import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

type CalendarSelectProps = {
  onDateSelect: (date: Date) => void;
  initialDate?: Date;
  primaryColor?: string;
};

const CalendarSelect = ({
  onDateSelect,
  initialDate = new Date(),
  primaryColor = appColors.main.Primary,
}: CalendarSelectProps) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [startDate, setStartDate] = useState(today);

  const monthYearDisplay = startDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  const getDaysArray = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      // Prevent showing days from the next month
      if (date.getMonth() !== today.getMonth()) break;

      days.push(date);
    }
    return days;
  };

  const handleNextWeek = () => {
    const nextStart = new Date(startDate);
    nextStart.setDate(startDate.getDate() + 7);

    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    if (nextStart <= endOfMonth) {
      setStartDate(nextStart);
    }
  };

  const handlePrevWeek = () => {
    const prevStart = new Date(startDate);
    prevStart.setDate(startDate.getDate() - 7);

    if (prevStart >= today) {
      setStartDate(prevStart);
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const getDayName = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  const renderDayItem = ({ item }: { item: Date }) => {
    const isToday =
      item.getDate() === today.getDate() &&
      item.getMonth() === today.getMonth() &&
      item.getFullYear() === today.getFullYear();

    const isSelected =
      selectedDate.getDate() === item.getDate() &&
      selectedDate.getMonth() === item.getMonth() &&
      selectedDate.getFullYear() === item.getFullYear();

    const isDisabled = item < today;

    const containerStyle = [
      styles.dayItem,
      isSelected && { backgroundColor: primaryColor, borderColor: primaryColor },
      isToday && !isSelected && { borderColor: primaryColor },
    ];

    return (
      <View>
        <TouchableOpacity
          style={containerStyle}
          onPress={() => !isDisabled && handleDateSelect(item)}
          disabled={isDisabled}
        >
          <Text
            style={[
              styles.dayNumber,
              isSelected && styles.selectedText,
              isDisabled && styles.disabledText,
            ]}
          >
            {item.getDate()}
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.dayName,
            isSelected && styles.selectedTexts,
            isDisabled && styles.disabledText,
          ]}
        >
          {getDayName(item)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handlePrevWeek}>
            <Ionicons name="chevron-back" size={20} color={appColors.GreyScale[300]} />
          </TouchableOpacity>
          <Text style={styles.monthYear}>{monthYearDisplay}</Text>
          <TouchableOpacity onPress={handleNextWeek}>
            <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.navButton}>
          <Image
            source={require('@/assets/images/Profile/calendar.png')}
            style={{ height: 24, width: 24, tintColor: appColors.GreyScale[400] }}
            resizeMode="contain"
          />
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
    padding: 16,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  monthYear: {
    fontSize: 16,
    fontFamily:appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    textAlign: 'center',
  },
  navButton: {
    padding: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    width: 34,
  },
  daysContainer: {
    marginTop: 10,
    gap: 12,
  },
  dayItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: appColors.GreyScale[800],
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  dayName: {
    fontSize: 12,
    fontWeight: '500',
    color: appColors.GreyScale[400],
    textAlign: 'center',
    marginTop: 4,
  },
  selectedText: {
    color: 'white',
  },
  selectedTexts: {
    color: appColors.main.Primary,
    fontWeight: '600',
  },
  disabledText: {
    color: appColors.GreyScale[200],
  },
});

export default CalendarSelect;
