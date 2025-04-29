import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import EditProfileSidebar from '@/components/EditProfileSidebar';
import { appColors } from '@/constants/Color';
import CustomSafeArea from '@/components/CustomSafeArea';
import MyPurchases from '@/components/MyPurchases';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MyPurchase = () => {
  // Sample user data
  const userData = {
    name: 'Saski Ropokova',
    role: 'Buyer\'s Account',
    image: require('@/assets/images/Profile/avtar.png'), // Make sure this image exists
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
            {/* <MyPurchases /> */}
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
    backgroundColor: appColors.AdditionalColor.white,
  },
});

export default MyPurchase; 