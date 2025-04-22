import { View, Text, ScrollView, Alert } from 'react-native'
import React from 'react'
import CustomSafeArea from '@/components/CustomSafeArea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestDriveScheduler from '@/components/TestDriveScheduler';
import { appColors } from '@/constants/Color';

const ScheduleDrive = () => {
  const handleSchedule = (scheduleData: {
    date: Date;
    timeSlot: string;
    location: string;
  }) => {
    console.log('Schedule data:', scheduleData);
    // Here you would typically make an API call to schedule the test drive
    Alert.alert(
      'Test Drive Scheduled',
      `Your test drive has been scheduled for ${scheduleData.date.toDateString()} at ${scheduleData.timeSlot} at ${scheduleData.location}.`
    );
  };

  return (
    <CustomSafeArea>
        <Header type="home" />
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        <View style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 30
        }}>
            {/* left */}
            <View style={{
              width: "45%",
              backgroundColor: appColors.GreyScale[100],
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Map View Will Be Here</Text>
              {/* Replace with Map component when ready */}
            </View>
            {/* right */}
            <View style={{
              width: "55%",
              paddingLeft: 30
            }}>
              <TestDriveScheduler 
                onSchedule={handleSchedule}
                primaryColor={appColors.main.Primary}
              />
            </View>
        </View>
        <Footer />
        </ScrollView>
    </CustomSafeArea>
  
  )
}

export default ScheduleDrive;
