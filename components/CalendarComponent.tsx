import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Image } from "expo-image";

interface CalendarComponentProps {
  onSelectDateTime: (date: string, time: string) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  onSelectDateTime,
}) => {
  // State for date/time selection
  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format time for display
  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Calculate 40min later for time range
    const endDate = new Date(date);
    endDate.setMinutes(endDate.getMinutes() + 40);
    const endHours = endDate.getHours();
    const endMinutes = endDate.getMinutes();
    const formattedEndHours = endHours % 12 === 0 ? 12 : endHours % 12;
    const endPeriod = endHours >= 12 ? "PM" : "AM";
    const formattedEndMinutes = endMinutes < 10 ? `0${endMinutes}` : endMinutes;

    return `${formattedHours}:${formattedMinutes} ${period} - ${formattedEndHours}:${formattedEndMinutes} ${endPeriod}`;
  };

  // Handle opening the date picker
  const handleOpenCalendar = () => {
    if (Platform.OS === "ios") {
      // On iOS, show modal with picker
      setShowModal(true);
      setShowDatePicker(true);
      setShowTimePicker(false);
    } else {
      // On Android, show native date picker
      setShowDatePicker(true);
    }
  };

  // Handle date selection
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (event.type === "dismissed") {
      if (Platform.OS === "android") {
        setShowDatePicker(false);
      }
      return;
    }

    const newDate = selectedDate || new Date();
    setSelectedDate(newDate);

    if (Platform.OS === "android") {
      setShowDatePicker(false);
      // On Android, proceed to time picker after date selection
      setTimeout(() => {
        setShowTimePicker(true);
      }, 300);
    } else {
      // On iOS, user will press Next to move to time picker
    }
  };

  // Handle time selection
  const handleTimeChange = (event: any, selectedTime?: Date) => {
    if (event.type === "dismissed") {
      if (Platform.OS === "android") {
        setShowTimePicker(false);
      }
      return;
    }

    const newTime = selectedTime || new Date();
    setSelectedTime(newTime);

    if (Platform.OS === "android") {
      setShowTimePicker(false);
      // Commit the selection right away on Android
      commitSelection(selectedDate, newTime);
    }
  };

  // Move from date to time picker in iOS modal
  const handleNext = () => {
    setShowDatePicker(false);
    setShowTimePicker(true);
  };

  // Commit the final selection
  const commitSelection = (date: Date, time: Date) => {
    const finalDate = new Date(date);
    finalDate.setHours(time.getHours(), time.getMinutes());

    onSelectDateTime(formatDate(date), formatTime(time));
    setShowModal(false);
  };

  // Cancel selection
  const handleCancel = () => {
    setShowModal(false);
    setShowDatePicker(false);
    setShowTimePicker(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleOpenCalendar}
      >
        <Image
          style={{ height: 24, width: 24 }}
          source={require("@/assets/images/Profile/calendar.png")}
        />
      </TouchableOpacity>

      {/* Android date picker */}
      {Platform.OS === "android" && showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
          minimumDate={new Date()}
        />
      )}

      {/* Android time picker */}
      {Platform.OS === "android" && showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
          minuteInterval={10}
        />
      )}

      {/* iOS Modal with pickers */}
      <Modal
        transparent={true}
        visible={showModal}
        animationType="slide"
        onRequestClose={handleCancel}
      >
        <TouchableWithoutFeedback onPress={handleCancel}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>
                  {showDatePicker ? "Select Date" : "Select Time"}
                </Text>

                <View style={styles.pickerContainer}>
                  {showDatePicker ? (
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="spinner"
                      onChange={handleDateChange}
                      minimumDate={new Date()}
                      style={styles.picker}
                      themeVariant="light"
                    />
                  ) : (
                    <DateTimePicker
                      value={selectedTime}
                      mode="time"
                      display="spinner"
                      onChange={handleTimeChange}
                      minuteInterval={10}
                      style={styles.picker}
                      themeVariant="light"
                    />
                  )}
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelButton]}
                    onPress={handleCancel}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>

                  {showDatePicker ? (
                    <TouchableOpacity
                      style={[styles.button, styles.nextButton]}
                      onPress={handleNext}
                    >
                      <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={[styles.button, styles.doneButton]}
                      onPress={() =>
                        commitSelection(selectedDate, selectedTime)
                      }
                    >
                      <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                  )}
                </View>
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
    position: "relative",
    zIndex: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 18,
    color: appColors.GreyScale[900],
    textAlign: "center",
    marginBottom: 16,
  },
  pickerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  picker: {
    width: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
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
