import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface CalendarComponentProps {
  onSelectDateTime: (date: string, time: string) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onSelectDateTime }) => {
  const [showModal, setShowModal] = useState(false);
  
  // Since we're simulating the functionality, we'll use predefined values
  const selectDateTime = () => {
    // Simulate selecting a date and time
    const selectedDate = "July 15, 2025";
    const selectedTime = "08:00 AM - 08:40 AM";
    
    onSelectDateTime(selectedDate, selectedTime);
    setShowModal(false);
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.iconContainer} 
        onPress={() => setShowModal(true)}
      >
        <Ionicons name="calendar-outline" size={24} color={appColors.GreyScale[900]} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1} 
          onPress={() => setShowModal(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Date & Time</Text>
            <Text style={styles.modalMessage}>
              This is a simplified calendar component.
              In a real implementation, this would include a full date and time picker.
            </Text>
            <TouchableOpacity 
              style={styles.selectButton} 
              onPress={selectDateTime}
            >
              <Text style={styles.selectButtonText}>
                Select July 15, 2025 at 08:00 AM
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 18,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  modalMessage: {
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
    color: appColors.GreyScale[600],
    marginBottom: 20,
    textAlign: 'center',
  },
  selectButton: {
    backgroundColor: appColors.main.Primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  selectButtonText: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 16,
    color: appColors.AdditionalColor.white,
  },
});

export default CalendarComponent; 