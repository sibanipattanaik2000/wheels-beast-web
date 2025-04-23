import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import EditProfileSidebar from '@/components/EditProfileSidebar';
import { appColors } from '@/constants/Color';
import CustomSafeArea from '@/components/CustomSafeArea';
import appFonts from '@/constants/Font';
import AppointmentCard from '@/components/AppointmentCard';
import CalendarComponent from '@/components/CalendarComponent';
import Search from '@/components/Searchbar';

const Appointment = () => {
  // Sample user data
  const userData = {
    name: 'Saski Ropokova',
    role: 'Buyer\'s Account',
    image: require('@/assets/images/Profile/avtar.png'),
  };

  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      carName: 'Audi RS5 Coupe',
      location: 'Commerce Sir, California',
      date: 'July 15, 2025',
      time: '08:00 AM - 08:40 AM',
      carImage: require('@/assets/images/brand/Car.png'), // Make sure this image exists
    },
    {
      id: '2',
      carName: 'Audi RS5 Coupe',
      location: 'Commerce Sir, California',
      date: 'July 15, 2025',
      time: '08:00 AM - 08:40 AM',
      carImage: require('@/assets/images/brand/Car.png'), // Make sure this image exists
    },
    {
      id: '3',
      carName: 'Audi RS5 Coupe',
      location: 'Commerce Sir, California',
      date: 'July 15, 2025',
      time: '08:00 AM - 08:40 AM',
      carImage: require('@/assets/images/brand/Car.png'), // Make sure this image exists
    },
    {
      id: '4',
      carName: 'Audi RS5 Coupe',
      location: 'Commerce Sir, California',
      date: 'July 15, 2025',
      time: '08:00 AM - 08:40 AM',
      carImage: require('@/assets/images/brand/Car.png'), // Make sure this image exists
    },
  ]);

  // Function to update appointment date and time
  const handleUpdateDateTime = (id: string, date: string, time: string) => {
    setAppointments(prev => 
      prev.map(app => 
        app.id === id ? { ...app, date, time } : app
      )
    );
  };

  return (
    <CustomSafeArea>
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
              <View style={styles.header}>
                <Text style={styles.title}>Appointment</Text>
                <CalendarComponent 
                  onSelectDateTime={(date, time) => {
                    // For demonstration purposes, we'll update the first appointment
                    if (appointments.length > 0) {
                      handleUpdateDateTime(appointments[0].id, date, time);
                    }
                  }} 
                />
              </View>

              <View style={styles.searchContainer}>
                <Search 
                  placeholder="Search..." 
                  onSearch={(text) => console.log('Searching:', text)}
                />
              </View>
              <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <AppointmentCard
                    carName={item.carName}
                    location={item.location}
                    date={item.date}
                    time={item.time}
                    carImage={item.carImage}
                  />
                )}
                numColumns={2}
                columnWrapperStyle={styles.appointmentRow}
                contentContainerStyle={styles.appointmentList}
                scrollEnabled={false}
              />
            </View>
          </View>
        </View>
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
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  searchContainer: {
    width: '60%'
  },
  appointmentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:20
  },
  appointmentList: {
    width: '100%',
  }
});

export default Appointment; 