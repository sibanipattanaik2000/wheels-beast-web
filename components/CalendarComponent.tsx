import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import DateTimePicker from '@react-native-community/datetimepicker';

interface CalendarComponentProps {
  onSelectDateTime: (date: string, time: string) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onSelectDateTime }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [tempDate, setTempDate] = useState(new Date());
  const [tempTime, setTempTime] = useState(new Date());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    // Calculate 40min later for time range
    const endDate = new Date(date);
    endDate.setMinutes(endDate.getMinutes() + 40);
    const endHours = endDate.getHours();
    const endMinutes = endDate.getMinutes();
    const formattedEndHours = endHours % 12 === 0 ? 12 : endHours % 12;
    const endPeriod = endHours >= 12 ? 'PM' : 'AM';
    const formattedEndMinutes = endMinutes < 10 ? `0${endMinutes}` : endMinutes;
    
    return `${formattedHours}:${formattedMinutes} ${period} - ${formattedEndHours}:${formattedEndMinutes} ${endPeriod}`;
  };

  const handleDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setTempDate(date);
      if (Platform.OS === 'ios') {
        // On iOS we don't hide the picker, so we only commit when user presses done
      } else {
        // On Android the picker is hidden after selection, so we commit immediately
        setSelectedDate(date);
        setShowTimePicker(true);
      }
    }
  };

  const handleTimeChange = (event: any, time?: Date) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (time) {
      setTempTime(time);
      if (Platform.OS === 'ios') {
        // On iOS we don't hide the picker, so we only commit when user presses done
      } else {
        // On Android the picker is hidden after selection, so we commit immediately
        setSelectedTime(time);
        commitSelection(selectedDate, time);
      }
    }
  };

  const openDatePicker = () => {
    setShowModal(true);
    if (Platform.OS === 'ios') {
      setTempDate(selectedDate);
      setTempTime(selectedTime);
    } else {
      setShowDatePicker(true);
    }
  };

  const commitSelection = (date: Date, time: Date) => {
    const finalDate = new Date(date);
    finalDate.setHours(time.getHours(), time.getMinutes());
    setSelectedDate(date);
    setSelectedTime(time);
    onSelectDateTime(formatDate(date), formatTime(time));
    setShowModal(false);
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.iconContainer} 
        onPress={openDatePicker}
      >
        <Ionicons name="calendar-outline" size={24} color={appColors.GreyScale[900]} />
      </TouchableOpacity>

      {/* Android date picker */}
      {Platform.OS === 'android' && showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
          minimumDate={new Date()}
        />
      )}

      {/* Android time picker */}
      {Platform.OS === 'android' && showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
          minuteInterval={10}
        />
      )}

      {/* iOS Modal with pickers */}
      {Platform.OS === 'ios' && (
        <Modal
          transparent={true}
          visible={showModal}
          animationType="slide"
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Date & Time</Text>
              
              <View style={styles.pickerContainer}>
                {showDatePicker ? (
                  <DateTimePicker
                    value={tempDate}
                    mode="date"
                    display="spinner"
                    onChange={handleDateChange}
                    minimumDate={new Date()}
                    style={styles.picker}
                  />
                ) : (
                  <DateTimePicker
                    value={tempTime}
                    mode="time"
                    display="spinner"
                    onChange={handleTimeChange}
                    minuteInterval={10}
                    style={styles.picker}
                  />
                )}
              </View>
              
              <View style={styles.buttonRow}>
                <TouchableOpacity 
                  style={[styles.button, styles.cancelButton]} 
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                {showDatePicker ? (
                  <TouchableOpacity 
                    style={[styles.button, styles.nextButton]} 
                    onPress={() => setShowDatePicker(false)}
                  >
                    <Text style={styles.nextButtonText}>Next</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                    style={[styles.button, styles.doneButton]} 
                    onPress={() => commitSelection(tempDate, tempTime)}
                  >
                    <Text style={styles.doneButtonText}>Done</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: appColors.AdditionalColor.white,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: appColors.AdditionalColor.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 18,
    color: appColors.GreyScale[900],
    textAlign: 'center',
    marginBottom: 16,
  },
  pickerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: appColors.GreyScale[100],
  },
  nextButton: {
    backgroundColor: appColors.main.Primary,
  },
  doneButton: {
    backgroundColor: appColors.main.Primary,
  },
  cancelButtonText: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 16,
    color: appColors.GreyScale[800],
  },
  nextButtonText: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 16,
    color: appColors.AdditionalColor.white,
  },
  doneButtonText: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 16,
    color: appColors.AdditionalColor.white,
  },
});

export default CalendarComponent; 