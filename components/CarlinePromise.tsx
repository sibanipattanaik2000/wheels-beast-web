import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';
 
const CarlinePromise: React.FC = () => {
 
const styles = StyleSheet.create({
    container: {
      padding: 15,
      borderRadius: 16,
      gap:10,
      marginTop:10
    },
    title: {
      fontSize: 16,
      fontFamily: appFonts.UrbanistBold,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      gap:10
    },
    text: {
      fontSize: 12,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900]
    },
  });
 
  return (
    <View style={[styles.container, { backgroundColor:appColors.GreyScale[50]}]}>
      <Text style={[styles.title, { color: appColors.GreyScale[900]}]}>Carline Promise</Text>
      <View style={styles.item}>
        <Ionicons name="checkmark-circle-outline" size={16} color={appColors.alert.Success} />
        <Text style={styles.text}>Fixed Price, No Hidden Fees</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="checkmark-circle-outline" size={16} color={appColors.alert.Success} />
        <Text style={styles.text}>Proof of car insurance</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="checkmark-circle-outline" size={16} color={appColors.alert.Success} />
        <Text style={styles.text}>Proof of address, as recent as 30 days</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="checkmark-circle-outline" size={16} color={appColors.alert.Success} />
        <Text style={styles.text}>Any additional owners present</Text>
      </View>
    </View>
  );
};
 
 
export default CarlinePromise;