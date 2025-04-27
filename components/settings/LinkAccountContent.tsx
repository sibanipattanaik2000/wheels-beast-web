import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface LinkAccountContentProps {
  // Any props can be ad userName,
  userName: string;
  userRole: string;
  userImage: any;
}

const LinkAccountContent: React.FC<LinkAccountContentProps> = ({ userName, userRole, userImage }) => {
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    padding:24
  }, 
   userName: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  userRole: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
    gap: 10
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    paddingVertical:10
  },
})
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={userImage} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userRole}>{userRole}</Text>
      </View>

      <Text style={styles.title}>Link Account</Text>
     <View style={{flexDirection:'row',gap:10}}>
      <Image source={require('@/assets/images/Profile/google.png')} style={{width:20,height:20}} />
      <Text>Google</Text>
      {/* add toggle button component here */}
     </View>
      
     
      </View>
  );
};


export default LinkAccountContent; 