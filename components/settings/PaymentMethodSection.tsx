import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import { Ionicons } from '@expo/vector-icons';

const PaymentMethodSection = () => {
  // Sample payment methods
  const otherPaymentMethods = [
    { id: 'apple-pay', name: 'Apple Pay', icon: require('@/assets/images/brand/jaguar.png'), recommended: true },
    { id: 'paypal', name: 'Paypal', icon: require('@/assets/images/brand/jaguar.png') },
    { id: 'google-pay', name: 'Google Pay', icon: require('@/assets/images/brand/jaguar.png'), recommended: true },
  ];

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const savedCard = {
    number: '0000 0000 0000 0000',
    expiry: 'MM/YY',
    cvc: '000',
    holder: 'Full Name'
  };

  const handleSelectSavedCard = () => {
    setCardNumber(savedCard.number);
    setExpiryDate(savedCard.expiry);
    setCvc(savedCard.cvc);
    setCardHolder(savedCard.holder);
    setPaymentMethod('card');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment method</Text>
      
      {/* Add new card button */}
      <View style={styles.cont}>
      {/* Payment Methods */}
      <TouchableOpacity 
        style={[styles.section, paymentMethod === 'paypal' && styles.selectedSection]}
        onPress={() => setPaymentMethod('paypal')}
      >
        <Text style={styles.sectionTitle}>Paypal</Text>
        <Text style={styles.sectionSubtitle}>Online payment</Text>
      </TouchableOpacity>

      {paymentMethod === 'card' && (
        <>
          {/* Card Number */}
          <Text style={styles.sectionTitle}>Card number</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            placeholder="0000 0000 0000 0000"
          />

          {/* Expiry and CVC */}
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>MM/YY</Text>
              <TextInput
                style={[styles.input, styles.halfInput]}
                value={expiryDate}
                onChangeText={setExpiryDate}
                placeholder="MM/YY"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CVC</Text>
              <TextInput
                style={[styles.input, styles.halfInput]}
                value={cvc}
                onChangeText={setCvc}
                placeholder="000"
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Card Holder */}
          <Text style={styles.sectionTitle}>Card holder</Text>
          <TextInput
            style={styles.input}
            value={cardHolder}
            onChangeText={setCardHolder}
            placeholder="Full name"
          />
        </>
      )}

      {/* Terms Checkbox */}
      <View style={styles.checkboxContainer}>
        {/* <Checkbox
          status={agreeToTerms ? 'checked' : 'unchecked'}
          onPress={() => setAgreeToTerms(!agreeToTerms)}
          color="#007AFF"
        /> */}
        <Text style={styles.checkboxText}>I agree with general terms and conditions</Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => paymentMethod === 'paypal' ? console.log('Connect to PayPal') : console.log('Add Card')}
      >
        <Text style={styles.buttonText}>
          {paymentMethod === 'paypal' ? 'Connect to Paypal' : 'Add Card'}
        </Text>
      </TouchableOpacity>

      {/* Saved Card */}
      <TouchableOpacity style={styles.savedCard} onPress={handleSelectSavedCard}>
        <Text style={styles.savedCardTitle}>Saved Card</Text>
        <Text style={styles.savedCardNumber}>{savedCard.number}</Text>
      </TouchableOpacity>
    </View>
      
      {/* Saved cards section */}
      <View style={{}}>
        <Text style={styles.sectionTitle}>Saved cards</Text>
        <View style={{borderWidth:2,width:'20%'}}>
          <View style={styles.creditCard}>
            
            <Text style={styles.cardNumber}>**** **** **** 9582</Text>
            <Text style={styles.cardExpiration}>Expiry 06/25</Text>
          </View>
        </View>
      </View>
      
      {/* Other payment methods */}
      <View style={styles.otherPaymentsSection}>
        <Text style={styles.sectionTitle}>Other payment method</Text>
        
        {otherPaymentMethods.map((method) => (
          <TouchableOpacity key={method.id} style={styles.paymentMethodItem}>
            <View style={styles.paymentMethodIcon}>
              <Image source={method.icon} style={styles.paymentIcon} resizeMode="contain" />
            </View>
            <Text style={styles.paymentMethodName}>{method.name}</Text>
            {method.recommended && (
              <View style={styles.recommendedContainer}>
                <Text style={styles.recommendedText}>Recommended</Text>
              </View>
            )}
            <Ionicons name="chevron-forward" size={16} color={appColors.GreyScale[400]} style={styles.chevron} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 24,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 8,
    marginBottom: 24,
    shadowColor: appColors.GreyScale[300],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  addCardText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.main.Primary,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[700],
    marginBottom: 16,
  },
  cardContainer: {
  },
  creditCard: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: appColors.main.Primary,
    width: '100%',
    maxWidth: 330,
    height: 180,
    justifyContent: 'space-between',
  },
  cardBrand: {
    width: 50,
    height: 30,
    marginBottom: 60,
  },
  cardNumber: {
    color: appColors.AdditionalColor.white,
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    marginBottom: 8,
  },
  cardExpiration: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
  },
  otherPaymentsSection: {
    marginTop: 8,
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 8,
    marginBottom: 12,
    padding: 16,
    shadowColor: appColors.GreyScale[300],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  paymentMethodIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  paymentIcon: {
    width: 30,
    height: 30,
  },
  paymentMethodName: {
    flex: 1,
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
  },
  recommendedContainer: {
    backgroundColor: appColors.GreyScale[100],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  recommendedText: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[600],
  },
  chevron: {
    marginLeft: 'auto',
  },
  cont: {
    padding: 16,
    backgroundColor: 'white',
  },
  section: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
  },
  selectedSection: {
    borderColor: '#007AFF',
  },
  
  sectionSubtitle: {
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  inputGroup: {
    flex: 1,
  },
  halfInput: {
    marginBottom: 0,
  },
  label: {
    color: '#666',
    marginBottom: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  checkboxText: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  savedCard: {
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  savedCardTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  savedCardNumber: {
    color: '#666',
  },
});


export default PaymentMethodSection; 