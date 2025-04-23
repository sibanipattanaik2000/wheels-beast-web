import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';

interface MyTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  isVerified?: boolean;
  isUnverified?: boolean;
  icon?: React.ReactNode;
  editable?: boolean;
  onVerifyPress?: () => void;
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  isVerified = false,
  isUnverified = false,
  icon,
  editable = true,
  onVerifyPress,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = secureTextEntry;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, !editable && styles.disabledInput]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={appColors.GreyScale[400]}
          secureTextEntry={isPassword && !showPassword}
          editable={editable}
        />
        {isPassword && (
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons 
              name={showPassword ? 'eye-off-outline' : 'eye-outline'} 
              size={24} 
              color={appColors.GreyScale[500]}
            />
          </TouchableOpacity>
        )}
        
        {isVerified && (
          <View style={styles.verificationStatus}>
            <Text style={styles.verifiedText}>Verified</Text>
            <Ionicons name="checkmark-circle" size={20} color="green" />
          </View>
        )}
        
        {isUnverified && (
          <TouchableOpacity style={styles.verificationStatus} onPress={onVerifyPress}>
            <Text style={styles.unverifiedText}>Unverified</Text>
            <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[400]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: appColors.GreyScale[500],
    marginBottom: 8,
    fontFamily: appFonts.UrbanistMedium,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 12,
    backgroundColor: appColors.AdditionalColor.white,
    paddingHorizontal: 12,
    height: 50,
  },
  disabledInput: {
    backgroundColor: appColors.GreyScale[50],
  },
  iconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: appColors.GreyScale[900],
    fontFamily: appFonts.UrbanistRegular,
  },
  eyeIcon: {
    padding: 5,
  },
  verificationStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  verifiedText: {
    fontSize: 12,
    color: 'green',
    fontFamily: appFonts.UrbanistMedium,
  },
  unverifiedText: {
    fontSize: 12,
    color: appColors.alert.Error,
    fontFamily: appFonts.UrbanistMedium,
  },
});

export default MyTextInput; 