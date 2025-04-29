import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { appColors } from '@/constants/Color';

interface Props {
    onPress?: () => void;
    offColor?: string;
    onColor?: string;
}

const ToggleButton: React.FC<Props> = ({ onPress, offColor = appColors.GreyScale[200], onColor = appColors.main.Primary}) => {
    const [isPressed, setIsPressed] = useState(false);
    const translateX = useRef(new Animated.Value(3.5)).current; // For inner circle movement
    const gradientInterpolation = useRef(new Animated.Value(0)).current; // For gradient transition

    const toggleSwitch = () => {
        const toValue = isPressed ? 3.5 : 23.5; // Move left or right
        const gradientToValue = isPressed ? 0 : 1; // Change gradient color

        Animated.timing(translateX, {
            toValue,
            duration: 300, // Smooth transition
            useNativeDriver: false,
        }).start();

        Animated.timing(gradientInterpolation, {
            toValue: gradientToValue,
            duration: 300, // Smooth transition
            useNativeDriver: false,
        }).start();

        setIsPressed(!isPressed);

        if (onPress) {
            onPress();
        }
    };

    const backgroundColor = gradientInterpolation.interpolate({
        inputRange: [0, 1],
        outputRange: [offColor, onColor],
    });

    return (
        <Pressable style={styles.container} onPress={toggleSwitch}>
            <Animated.View style={[styles.outerBox, { backgroundColor }]}>
                <Animated.View style={[styles.roundBox, { transform: [{ translateX }] }]} />
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 24,
        width: 45,
        borderRadius: 30,
    },
    outerBox: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 30,
        overflow: 'hidden',
        
    },
    roundBox: {
        width: 18,
        height: 18,
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 3.2,
    },
});

export default ToggleButton;