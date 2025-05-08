import { View, TextInput as RNTextInput, StyleSheet, Text, TouchableOpacity, Image, Animated, Platform, DimensionValue } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { appColors } from '@/constants/Color'
 
export type TextInputProps = {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  icon?: 'user' | 'email' | 'password'| 'card'
  style?: any
  filled?: boolean
  label?: string
  width?:DimensionValue
}
 
const TextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
  style,
  filled = false,
  label,
  width
}: TextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const animatedLabelPosition = useRef(new Animated.Value(value ? 1 : 0)).current
 
  useEffect(() => {
    Animated.timing(animatedLabelPosition, {
      toValue: (isFocused || value.length > 0) ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start()
  }, [isFocused, value])
 
  const renderIcon = () => {
    if (icon === 'user') {
      return (
        <Image
          source={require('@/assets/images/TextInput/user.png')}
          style={[styles.iconLeft, {
             //tintColor: colors.text.tertiary
             }]}
        />
      )
    }
    if (icon === 'email') {
      return (
        <Image
          source={require('@/assets/images/TextInput/email.png')}
          style={[styles.iconLeft, {
             //tintColor: colors.text.tertiary 
            }]}
            resizeMode="contain"

        />
      )
    }
    if (icon === 'password') {
      return (
        <Image
          source={require('@/assets/images/TextInput/lock.png')}
          style={[styles.iconLeft, {
             //tintColor: colors.text.tertiary 
            }]}
        />
      )
    }
    if (icon === 'card') {
      return (
        <Image
          source={require('@/assets/images/purchase/card.png')}
          style={[styles.iconLeft, {
             //tintColor: colors.text.tertiary 
            }]}
        />
      )
    }
    return null
  }
 
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
 
  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
 


  const styles = StyleSheet.create({
    container: {
      marginVertical: 8,
      width:width|| '100%',
      backgroundColor:'#F8FAFC',
      borderRadius: 16,
    },
    label: {
      fontSize: 14,
      marginBottom: 8,
      color: appColors.GreyScale[400],
      //fontFamily: appFonts.UrbanistMedium,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 56,
      borderRadius: 16,
      paddingHorizontal: 12,
      width: '100%',
      position: 'relative',
    },
    focusedContainer: {
      borderWidth: 1,
    },
    filledContainer: {
      borderColor: appColors.main.Primary,
    },
    input: {
      flex: 1,
      height: '100%',
      paddingLeft: 8,
      fontSize: 16,
      ...Platform.select({
              web:{
                outlineStyle: "none",
              }
            })
    },
    iconLeft: {
      width: 20,
      height: 20,
    },
    eyeIcon: {
      padding: 2,
    },
    icon: {
      width: 20,
      height: 20,
    },
  })
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, {
        color:appColors.GreyScale[400],
         }]}>{label}</Text>}
      <View style={[
        styles.inputContainer,
        {
             //backgroundColor: theme.colors.TextInput.background
            },
        isFocused && [styles.focusedContainer, {
            // borderColor: theme.colors.primary.main
             }],
      ]}>
        {renderIcon()}
        <Animated.Text
       
          style={{
            position: 'absolute' as const,
            left: icon ? 40 : 16,
            top: animatedLabelPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [15, 6]
            }),
            fontSize: animatedLabelPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [16, 11]
            }),
            color: animatedLabelPosition.interpolate({
              inputRange: [0, 1],
              outputRange:[appColors.GreyScale[400], appColors.main.Primary]
            }),
            backgroundColor: 'transparent',
            zIndex: 1
          }}
        >
          {!isFocused && value.length > 0 ? '':placeholder}
        </Animated.Text>
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.input,
            {
                // color: theme.colors.text.primary 
                },
            (!isFocused && value.length > 0) ? {
                 paddingBottom: 4,
                 }
                 : {
                  paddingTop: 10,
                 }
          ]}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Image
              source={isPasswordVisible
                ? require('@/assets/images/TextInput/eyeopen.png')
                : require('@/assets/images/TextInput/eyeclose.png')
              }
              style={[styles.icon, { 
                //tintColor: theme.colors.text.tertiary 
            }]}
            resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
 

 
export default TextInput