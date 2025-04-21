import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import * as Location from 'expo-location';
import { Image } from 'expo-image';

interface MapComponentProps {
  style?: object;
  initialRegion?: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

const MapComponent = ({ style, initialRegion }: MapComponentProps) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.error('Error getting location:', error);
        setErrorMsg('Could not get your location');
        setLocation({
          coords: {
            latitude: initialRegion?.latitude || 37.78825,
            longitude: initialRegion?.longitude || -122.4324,
            altitude: null,
            accuracy: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
          },
          timestamp: Date.now(),
        });
      }
    })();
  }, []);

  const region = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : initialRegion || {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  // Web version using iframe (don't use react-native-maps here)
  if (Platform.OS === 'web') {
    return (
      <View style={[styles.container, style]}>
        <iframe
          src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY_HERE&center=${region.latitude},${region.longitude}&zoom=15`}
          style={{ width: '100%', height: '100%', border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </View>
    );
  }

  // Native version using react-native-maps
  const MapView = require('react-native-maps').default;
  const Marker = require('react-native-maps').Marker;
  const PROVIDER_GOOGLE = require('react-native-maps').PROVIDER_GOOGLE;

  return (
    <View style={[styles.container, style]}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        region={region}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <Image
              source={require('@/assets/images/icons/location-pin-blue.png')}
              style={{ width: 40, height: 40 }}
              contentFit="contain"
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    borderRadius: 16,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapComponent;
