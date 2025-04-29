import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CarViewer = () => {
  // Animation setup
  const rotationX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateCar = () => {
      Animated.loop(
        Animated.timing(rotationX, {
          toValue: 1,
          duration: 5000, // 5 seconds for one full rotation
          useNativeDriver: true,
        })
      ).start();
    };

    rotateCar();
  }, [rotationX]);

  // Interpolate rotation value for 0 to 360 degrees
  const rotateXInterpolate = rotationX.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Handle button presses (placeholder functionality)
  const handleClosePress = () => {
    alert('Close button pressed');
  };

  const handleSharePress = () => {
    alert('Share button pressed');
  };

  const handle360Press = () => {
    alert('360° button pressed');
  };

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <View style={styles.gradientBackground}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton} onPress={handleSharePress}>
          <Ionicons name="share-outline" size={24} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Audi Q7 50 Quattro</Text>

        {/* Dashed Border */}
        <View style={styles.dashedBorder}>
          {/* Car Image with Animation */}
          <Animated.Image
            source={require('@/assets/images/brand/whitecar.png')} // Replace with your car image
            style={[
              styles.carImage,
              {
                transform: [
                  { rotateX: rotateXInterpolate }, // Rotate along X-axis
                ],
              },
            ]}
            resizeMode="contain"
          />
        </View>

        {/* 360° Button */}
        <TouchableOpacity style={styles.rotateButton} onPress={handle360Press}>
          <Text style={styles.rotateButtonText}>360°</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black', 
    borderWidth:2,
    flex: 1,
    maxHeight: '100%',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: '#1A2526',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  shareButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
  title: {
    position: 'absolute',
    top: 38,
    left: 60,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dashedBorder: {
    position: 'absolute',
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '15%',
    borderWidth: 2,
    borderColor: '#00A3E0', // Light blue color
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carImage: {
    width: '80%',
    height: 200,
    position: 'absolute',
    alignSelf: 'center',
  },
  rotateButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#00A3E0', // Light blue button
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rotateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default CarViewer;