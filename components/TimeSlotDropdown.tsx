import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  FlatList,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';

interface TimeSlotDropdownProps {
  onTimeSelect: (time: string) => void;
  availableSlots?: string[];
  primaryColor?: string;
  label?: string;
  placeholder?: string;
}

const TimeSlotDropdown = ({
  onTimeSelect,
  availableSlots = ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM'],
  primaryColor = appColors.main.Primary,
  label = 'Select a time',
  placeholder = 'Click to select time'
}: TimeSlotDropdownProps) => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onTimeSelect(time);
    setIsDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{label}</Text>
      
      <View style={[
        styles.inputContainer,
        inputFocused && { borderColor: primaryColor }
      ]}>
        <TextInput
          style={styles.input}
          value={selectedTime}
          placeholder={placeholder}
          editable={false}
          onPressIn={toggleDropdown}
        />
        <TouchableOpacity 
          style={styles.iconContainer} 
          onPress={toggleDropdown}
        >
          <Ionicons 
            name="time-outline" 
            size={24} 
            color={primaryColor} 
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsDropdownVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsDropdownVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownHeader}>Select Time Slot</Text>
                <FlatList
                  data={availableSlots}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.timeSlotItem,
                        selectedTime === item && { 
                          backgroundColor: 'rgba(79, 70, 229, 0.05)',
                          borderLeftWidth: 3,
                          borderLeftColor: primaryColor
                        }
                      ]}
                      onPress={() => handleTimeSelect(item)}
                    >
                      <Text style={[
                        styles.timeSlotText,
                        selectedTime === item && { color: primaryColor, fontFamily: appFonts.UrbanistBold }
                      ]}>
                        {item}
                      </Text>
                      {selectedTime === item && (
                        <Ionicons name="checkmark" size={20} color={primaryColor} />
                      )}
                    </TouchableOpacity>
                  )}
                  style={styles.dropdownList}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  header: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 18,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 10,
    backgroundColor: appColors.AdditionalColor.white,
    height: 56,
  },
  input: {
    flex: 1,
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 16,
    color: appColors.GreyScale[800],
    height: '100%',
  },
  iconContainer: {
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dropdownContainer: {
    width: '90%',
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    maxHeight: 400,
    overflow: 'hidden',
  },
  dropdownHeader: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 18,
    color: appColors.GreyScale[900],
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  dropdownList: {
    maxHeight: 350,
  },
  timeSlotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  timeSlotText: {
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 16,
    color: appColors.GreyScale[800],
  }
});

export default TimeSlotDropdown; 