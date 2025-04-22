import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import SearchBar from '@/components/Searchbar';
import Button from './Button';

interface HeaderProps {
  type: 'home' | 'default' | string;
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);

  const styles = StyleSheet.create({
    text: {
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900],
      fontSize: 16,
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

        <View style={{ width: '30%', justifyContent: 'center' }}>
          <SearchBar />
        </View>

        <Button
          title="Login/ SignUp"
          variant="outlined"
          borderColor={appColors.main.Primary}
          width="20%"
          color={appColors.main.Primary}
        />
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: '#C3D4E966',
          padding: 24,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            gap: 20,
          }}
        >
          <Text style={styles.text}>Home</Text>
          <Text style={styles.text}>Favourite</Text>
          <Text style={styles.text}>Favourite</Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={togglePrivacy}
            >
              <Text style={styles.text}>Privacy </Text>
              <AntDesign name={showPrivacy ? 'up' : 'down'} size={16} />
            </TouchableOpacity>

            {showPrivacy && (
              <View
                style={{
                  padding: 8,
                  borderRadius: 8,
                  width: '60%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                    fontSize: 14,
                  }}
                >
                  Privacy Policy
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                    fontSize: 14,
                  }}
                >
                  Terms & Conditions
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                    fontSize: 14,
                  }}
                >
                  Data Sharing
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
