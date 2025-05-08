import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import TextInput from '@/components/TextInput';
import CustomSafeArea from '@/components/CustomSafeArea';
import Button from '@/components/Button';
import Dots from '@/components/Dots';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Header from '@/components/Header';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  // State for password validation
  const [hasMinChars, setHasMinChars] = useState(false);
  const [hasSymbolOrNumber, setHasSymbolOrNumber] = useState(false);
  const [noNameOrEmail, setNoNameOrEmail] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // For slider
  
  const validatePassword = (text: string) => {
    setPassword(text);
    
    // Check if password has minimum 8 characters
    setHasMinChars(text.length >= 8);
    
    // Check if password contains a symbol or number
    setHasSymbolOrNumber(/[0-9!@#$%^&*(),.?":{}|<>]/.test(text));
    
    // Assuming this would check for name/email - simplified for demo
    setNoNameOrEmail(text.length > 0);
    
    // Check if passwords match
    setPasswordsMatch(text === confirmPassword);
  };
  
  const validateConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    // Check if passwords match
    setPasswordsMatch(password === text);
  };
  
  // Handle index change from Dots component
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handleResetPassword = () => {
    // Implement password reset logic here
    if (password === confirmPassword && hasMinChars && hasSymbolOrNumber && noNameOrEmail) {
      // Success - navigate to login page or confirm page
      router.push("/Auth/login" as any);
    }
  };
  
  return (
    <CustomSafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          {/* Left side with the slider */}
          <View style={{ width: "50%" }}>
            <Dots onIndexChange={handleIndexChange} />
          </View>
          
          {/* Right side with the form */}
          <View style={{ width: "50%", paddingHorizontal: 64 }}>
            {/* Logo */}
           <Header type='default'/>
            
            {/* Content */}
            <View style={{ paddingVertical: 40, gap: 32}}>
              <Text style={{
                fontSize: 48,
                fontFamily: appFonts.UrbanistBold,
                textAlign: "center",
                color: appColors.GreyScale[900]
              }}>
                Create your new password
              </Text>
              
              <Text style={{
                fontSize: 24,
                fontFamily: appFonts.UrbanistMedium,
                textAlign: "center",
                color: appColors.GreyScale[500]
              }}>
                Your new password must be different from previous password
              </Text>
              <View style={{alignSelf:"center",width:"100%",paddingHorizontal:56,gap:24}}>
              <TextInput 
                icon="password" 
                placeholder="New Password" 
                value={password} 
                onChangeText={validatePassword} 
                secureTextEntry={true} 
               // width={'60%'}
              />
              
              <TextInput 
                icon="password" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChangeText={validateConfirmPassword} 
                secureTextEntry={true} 
                //width={'60%'}
              />
             
              <View style={{ width: "100%", gap: 16 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Ionicons 
                    name="checkmark-circle" 
                    size={24} 
                    color={noNameOrEmail ? appColors.alert.Success : appColors.GreyScale[400]} 
                  />
                  <Text style={{
                    color: noNameOrEmail ? appColors.alert.Success : appColors.GreyScale[400], 
                    fontFamily: appFonts.UrbanistMedium
                  }}>
                    Must not contain your name or email
                  </Text>
                </View>
                
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Ionicons 
                    name="checkmark-circle" 
                    size={24} 
                    color={hasMinChars ? appColors.alert.Success : appColors.GreyScale[400]} 
                  />
                  <Text style={{
                    color: hasMinChars ? appColors.alert.Success : appColors.GreyScale[400], 
                    fontFamily: appFonts.UrbanistMedium
                  }}>
                    At least 8 characters
                  </Text>
                </View>
                
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Ionicons 
                    name="checkmark-circle" 
                    size={24} 
                    color={hasSymbolOrNumber ? appColors.alert.Success : appColors.GreyScale[400]} 
                  />
                  <Text style={{
                    color: hasSymbolOrNumber ? appColors.alert.Success : appColors.GreyScale[400], 
                    fontFamily: appFonts.UrbanistMedium
                  }}>
                    Contains a symbol or a number
                  </Text>
                </View>
              </View>
              
              <Button 
                title="Reset Password" 
                onPress={() => router.push("/Auth/password-changed" as any)} 
                variant="filled" 
                color={appColors.AdditionalColor.white} 
                style={{ backgroundColor: appColors.main.Primary }}
              />
            </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default ResetPassword;