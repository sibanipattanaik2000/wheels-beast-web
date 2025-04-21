import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.column}>
          <Text style={styles.header}>Company</Text>
          <Text style={styles.link}>About Us</Text>
          <Text style={styles.link}>Blog</Text>
          <Text style={styles.link}>Services</Text>
          <Text style={styles.link}>FAQs</Text>
          <Text style={styles.link}>Terms</Text>
          <Text style={styles.link}>Contact Us</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.header}>Quick Links</Text>
          <Text style={styles.link}>Get in Touch</Text>
          <Text style={styles.link}>Help center</Text>
          <Text style={styles.link}>Live chat</Text>
          <Text style={styles.link}>How it works</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.header}>Our Brands</Text>
          <Text style={styles.link}>BMW</Text>
          <Text style={styles.link}>Ferrari</Text>
          <Text style={styles.link}>Mercedes</Text>
          <Text style={styles.link}>Audi</Text>
          <Text style={styles.link}>Mini Cooper</Text>
          <Text style={styles.link}>Tesla</Text>
          <Text style={styles.link}>Jaguar</Text>
          <Text style={styles.link}>Toyota</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.header}>Vehicles Type</Text>
          <Text style={styles.link}>Sedan</Text>
          <Text style={styles.link}>Hatchback</Text>
          <Text style={styles.link}>SUV</Text>
          <Text style={styles.link}>Hybrid</Text>
          <Text style={styles.link}>Electric</Text>
          <Text style={styles.link}>Coupe</Text>
          <Text style={styles.link}>Truck</Text>
          <Text style={styles.link}>Convertible</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.header}>Our Mobile App</Text>
          <View style={{backgroundColor:'#ffffff07',borderRadius:16,width:'80%',flexDirection:'row',gap:10,padding:10}}>
          <Image
            source={require('@/assets/images/Footer/apple.png')}
            style={styles.storeIcon}
          />
          <View>
            <Text style={{fontSize:12,fontFamily:appFonts.UrbanistRegular,color:appColors.AdditionalColor.white}}>Download on the App Store</Text>
            <Text style={{fontSize:15,fontFamily:appFonts.UrbanistMedium,color:appColors.AdditionalColor.white}}>Apple Store</Text>
          </View>
          </View>
          <View style={{backgroundColor:'#ffffff07',borderRadius:16,width:'80%',flexDirection:'row',gap:10,padding:10,marginTop:10}}>
          <Image
            source={require('@/assets/images/Footer/app.png')}
            style={styles.storeIcon}
          />
          <View>
            <Text style={{fontSize:12,fontFamily:appFonts.UrbanistRegular,color:appColors.AdditionalColor.white}}>Get it on</Text>
            <Text style={{fontSize:15,fontFamily:appFonts.UrbanistMedium,color:appColors.AdditionalColor.white}}>Google Play</Text>
          </View>
          </View>
        
          <Text style={[styles.header, { marginTop: 20 }]}>Connect With Us</Text>
          <View style={styles.socialRow}>
            <FontAwesome name="facebook" size={20} color="white" />
            <Feather name="twitter" size={20} color="white" />
            <AntDesign name="instagram" size={20} color="white" />
            <AntDesign name="linkedin-square" size={20} color="white" />
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.bottomLeft}>© 2025 WheelsBeast.com. All rights reserved.</Text>
        <View style={styles.bottomRight}>
          <Text style={styles.bottomLink}>Terms & Conditions</Text>
          <Text style={styles.bottomLink}> • </Text>
          <Text style={styles.bottomLink}>Privacy Notice</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:appColors.GreyScale[900],
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 20,
    marginBottom: 30,
  },
  column: {
    width: '18%',
    minWidth: 150,
  },
  header: {
    color: 'white',
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    marginBottom: 10,
  },
  link: {
    color: 'white',
    fontSize: 12,
    marginBottom: 6,
    fontFamily: appFonts.UrbanistMedium,
  },
  storeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#C3D4E966',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  bottomLeft: {
    color: 'white',
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
  },
  bottomRight: {
    flexDirection: 'row',
  },
  bottomLink: {
    color: 'white',
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
  },
});

export default Footer;
