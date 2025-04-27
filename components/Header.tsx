import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import SearchBar from '@/components/Searchbar';
import Button from './Button';
import NotificationModal from './NotificationModal';
import { Href, router } from 'expo-router';

// Sample notification data
const sampleNotifications = [
  {
    id: '1',
    type: 'discount' as const,
    title: 'Discount Available',
    description: 'We recommend a 5% discount for Tesla Model X in San Francisco.',
    time: '09:00 AM',
    isToday: true,
  },
  {
    id: '2',
    type: 'test_drive' as const,
    title: 'Test Drive',
    description: 'You have a scheduled test drive for tomorrow.',
    time: '07:45 AM',
    isToday: true,
  },
  {
    id: '3',
    type: 'message' as const,
    title: 'New Message',
    description: 'Florencio dorrance sent you a new message',
    time: 'Jun 12, 2025 at 02:00 PM',
    sender: 'Florencio dorrance',
    isToday: false,
  },
  {
    id: '4',
    type: 'sold' as const,
    title: 'Units already sold',
    description: 'The car on your favorites list sold for $47,805 to California',
    time: 'Jun 12, 2025 at 08:45 AM',
    price: '$47,805',
    location: 'California',
    isToday: false,
  },
  {
    id: '5',
    type: 'discount' as const,
    title: 'Discount Available',
    description: 'We recommend a 5% discount for Tesla Model X in San Francisco.',
    time: '09:00 AM',
    isToday: false,
  },
];

interface HeaderProps {
  type: 'home' | 'default' | string;
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  const styles = StyleSheet.create({
    text: {
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900],
      fontSize: 16,
    },
    notificationBadge: {
      position: 'absolute',
      right: -6,
      top: -3,
      backgroundColor: appColors.alert.Error,
      borderRadius: 10,
      width: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: appColors.AdditionalColor.white,
      fontSize: 10,
      fontFamily: appFonts.UrbanistBold,
    },
  });

  if (type === 'default') {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          gap: 7,
        }}
      >
        <Image
          source={require('@/assets/images/Signup/wheel.png')}
          style={{ height: 40, width: 40 }}
        />
        <Text
          style={{
            fontSize: 24,
            color: appColors.main.SecondaryBase,
            fontFamily: appFonts.UrbanistBold,
          }}
        >
          WheelsBeast
        </Text>
      </View>
    );
  }

  if (type !== 'home') return null;

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 7,
            alignItems: 'center',
          }}
        >
          <Image
            source={require('@/assets/images/Signup/wheel.png')}
            style={{ height: 40, width: 40 }}
          />
          <Text
            style={{
              fontSize: 24,
              color: appColors.main.SecondaryBase,
              fontFamily: appFonts.UrbanistBold,
            }}
          >
            WheelsBeast
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 44,
              width: 44,
              borderColor: appColors.GreyScale[300],
              borderWidth: 1,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('@/assets/images/carlist/location.png')}
              style={{ height: 24, width: 24 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: appFonts.UrbanistMedium,
                color: appColors.GreyScale[500],
                fontSize: 12,
              }}
            >
              Location
            </Text>
            <Text
              style={{
                fontFamily: appFonts.UrbanistMedium,
                color: appColors.GreyScale[900],
                fontSize: 14,
              }}
            >
              San Fransisco
            </Text>
          </View>
        </View>

        <TouchableOpacity style={{ width: '30%', justifyContent: 'center' }} onPress={()=> router.push('/searchcar' as Href)}>
          <SearchBar />
        </TouchableOpacity>

        <Button
          title="Login/ SignUp"
          variant="outlined"
          borderColor={appColors.main.Primary}
          width="20%"
          color={appColors.main.Primary}
          onPress={()=> router.push('/Auth/SignIn' as Href)}
        />
      </View>

      <View
        style={{
          borderTopWidth: 2,
          borderColor: '#C3D4E966',
          padding: 24,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            gap: 20,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity onPress={()=> router.push('/home' as Href)}>

          <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.push('/favourites' as Href)}>

          <Text style={styles.text}>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.push('/favourites' as Href)}>

          <Text style={styles.text}>Favourite</Text>
          </TouchableOpacity>
          
         
          
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={togglePrivacy}
            >
              <Text style={styles.text}>Profile </Text>
              <AntDesign name={showPrivacy ? 'up' : 'down'} size={16} />
            </TouchableOpacity>

            {showPrivacy && (
              <TouchableOpacity
                style={{
                  padding: 8,
                  borderRadius: 8,
                  width: '100%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}
                onPress={()=> router.push('/profile' as Href)}
              >
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                    fontSize: 14,
                  }}
                >
                Edit Profile 
                </Text>
              </TouchableOpacity>
            )}
          </View>
           {/* Notification Bell */}
           <TouchableOpacity 
            onPress={toggleNotifications}
          >
            <Ionicons name="notifications-outline" size={24} color={appColors.GreyScale[900]} />
            {/* Notification Badge */}
            { notificationCount> 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
             )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification Modal */}
      <NotificationModal
        isVisible={showNotifications}
        onClose={toggleNotifications}
        notifications={sampleNotifications}
      />
    </>
  );
};

export default Header;
