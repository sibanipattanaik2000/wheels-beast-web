import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import EditProfileSidebar from '@/components/EditProfileSidebar';
import { appColors } from '@/constants/Color';
import CustomSafeArea from '@/components/CustomSafeArea';
import appFonts from '@/constants/Font';
import TestDriveCard from '@/components/TestDriveCard';
import Search from '@/components/Searchbar';
import FilterDropdown from '@/components/FilterDropdown';
import CalendarComponent from '@/components/CalendarComponent';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Image } from 'expo-image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TestDrive = () => {
  // Sample user data
  const userData = {
    name: 'Saski Ropokova',
    role: 'Buyer\'s Account',
    image: require('@/assets/images/Profile/avtar.png'),
  };

  // Sample test drive data
  const [testDrives, setTestDrives] = useState([
    {
      id: '1',
      carName: 'Audi RS5 Coupe',
      location: 'Commerce Sir, California',
      distance: '10 KM',
      status: 'Active',
      date: 'July 15, 2025',
      time: '08:00 AM - 08:40 AM',
      carImage: require('@/assets/images/brand/Car.png'),
    },
    {
      id: '2',
      carName: 'Ford Mustang GT',
      location: 'Sacramento, California',
      distance: '10 KM',
      status: 'Completed',
      date: 'July 10, 2025',
      time: '10:40 AM - 11:40 AM',
      carImage: require('@/assets/images/brand/Car.png'),
    },
  ]);

  // Filter states
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showDatesDropdown, setShowDatesDropdown] = useState(false);
  const [showModelsDropdown, setShowModelsDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All status');
  const [selectedDate, setSelectedDate] = useState('All dates');
  const [selectedModel, setSelectedModel] = useState('All Models');

  // Date picker states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Filter options
  const statusOptions = ['All status', 'Active', 'Completed', 'Cancelled'];
  const dateOptions = ['All dates', 'Today', 'This Week', 'This Month', 'This Year'];
  const modelOptions = ['All Models', 'Audi', 'Ford', 'BMW', 'Mercedes'];

  // Handle date and time update
  const handleUpdateDateTime = (id: string, date: string, time: string) => {
    setTestDrives(prev => 
      prev.map(drive => 
        drive.id === id ? { ...drive, date, time } : drive
      )
    );
  };

  // Handle calendar icon click
  const handleCalendarClick = () => {
    setShowDatePicker(true);
  };

  // Handle date change
  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setCurrentDate(currentDate);
    
    // Format the date for display
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    // Update the first test drive with the new date
    if (testDrives.length > 0) {
      // Keep the time the same
      handleUpdateDateTime(testDrives[0].id, formattedDate, testDrives[0].time);
    }
  };

  return (
    <CustomSafeArea>
      <Header type='home'/>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View style={styles.container}>
          {/* Left sidebar */}
          <View>
            <EditProfileSidebar
              userName={userData.name}
              userRole={userData.role}
              userImage={userData.image}
            />
          </View>

          {/* Right content */}
          <View style={styles.contentContainer}>
            <View style={styles.contentCard}>
              {/* Header with title and calendar */}
              <View style={styles.header}>
                <Text style={styles.title}>Test drive</Text>
                
                {/* Replace CalendarComponent with direct DateTimePicker implementation */}
                <View>
                  <TouchableOpacity 
                 
                    onPress={handleCalendarClick}
                  >
                   <Image style={{height:24,width:24}} source={require('@/assets/images/Profile/calendar.png')}/>
                  </TouchableOpacity>
                  
                  {showDatePicker && (
                    <DateTimePicker
                      value={currentDate}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                </View>
              </View>

              {/* Search bar */}
              <View style={styles.searchContainer}>
                <Search 
                  placeholder="Search..." 
                  width="100%" 
                  onSearch={(text) => console.log('Searching:', text)}
                />
              </View>

              {/* Filters row - needs higher z-index to appear above cards */}
              <View style={styles.filtersContainer}>
                <View style={styles.filterItem}>
                  <Ionicons name="options-outline" size={24} color={appColors.GreyScale[500]} />
                </View>
                
                <FilterDropdown
                  filterLabel="Status"
                  options={statusOptions}
                  selectedOption={selectedStatus}
                  showDropdown={showStatusDropdown}
                  defaultOption="All status"
                  toggleDropdown={() => {
                    setShowStatusDropdown(!showStatusDropdown);
                    setShowDatesDropdown(false);
                    setShowModelsDropdown(false);
                  }}
                  applyFilter={(option) => {
                    setSelectedStatus(option);
                    setShowStatusDropdown(false);
                  }}
                />

                <FilterDropdown
                  filterLabel="Dates"
                  options={dateOptions}
                  selectedOption={selectedDate}
                  showDropdown={showDatesDropdown}
                  defaultOption="All dates"
                  toggleDropdown={() => {
                    setShowDatesDropdown(!showDatesDropdown);
                    setShowStatusDropdown(false);
                    setShowModelsDropdown(false);
                  }}
                  applyFilter={(option) => {
                    setSelectedDate(option);
                    setShowDatesDropdown(false);
                  }}
                />

                <FilterDropdown
                  filterLabel="Models"
                  options={modelOptions}
                  selectedOption={selectedModel}
                  showDropdown={showModelsDropdown}
                  defaultOption="All Models"
                  toggleDropdown={() => {
                    setShowModelsDropdown(!showModelsDropdown);
                    setShowStatusDropdown(false);
                    setShowDatesDropdown(false);
                  }}
                  applyFilter={(option) => {
                    setSelectedModel(option);
                    setShowModelsDropdown(false);
                  }}
                />
              </View>

              {/* Test drive cards */}
              <View style={styles.cardsContainer}>
                <FlatList
                  data={testDrives}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TestDriveCard
                      carName={item.carName}
                      location={item.location}
                      distance={item.distance}
                      status={item.status}
                      date={item.date}
                      time={item.time}
                      carImage={item.carImage}
                    />
                  )}
                  numColumns={2}
                  columnWrapperStyle={styles.cardRow}
                  contentContainerStyle={styles.cardsList}
                  scrollEnabled={false}
                />
              </View>
            </View>
          </View>
        </View>
        <Footer/>
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: appColors.GreyScale[50],
    paddingHorizontal: 70,
    paddingVertical: 47,
  },
  contentContainer: {
    flex: 1,
    shadowColor: appColors.GreyScale[500],
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentCard: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  searchContainer: {
    width:'60%',
    zIndex: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
    zIndex: 100, // High z-index to ensure filter dropdowns appear above cards
    position: 'relative',
  },
  filterItem: {
    padding: 8,
    backgroundColor: appColors.GreyScale[50],
    borderRadius: 8,
    shadowColor: appColors.GreyScale[300],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardsContainer: {
    zIndex: 1, // Lower z-index so cards appear below the filter dropdowns
    marginTop: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardsList: {
    paddingBottom: 20,
  }
});

export default TestDrive; 