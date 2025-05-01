import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Animated, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import SavedCard from '../SavedCard';

interface PaymentMethodContentProps {
  // Any props can be added here if needed
}

interface CardData {
  id: string;
  number: string;
  name: string;
  expiryDate: string;
}

const PaymentMethodContent: React.FC<PaymentMethodContentProps> = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState('card'); // 'card' or 'paypal'
  const [savedCards, setSavedCards] = useState<CardData[]>([
    {
      id: '1',
      number: '3950',
      name: 'Omie Kawabata',
      expiryDate: '06/25'
    }
  ]);
  const [errors, setErrors] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  // Animation for dropdown
  const [dropdownHeight] = useState(new Animated.Value(0));

  const toggleAddCardDropdown = () => {
    if (showAddCard) {
      // Close dropdown animation
      Animated.timing(dropdownHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        setShowAddCard(false);
      });

      // Reset form when closing
      resetForm();
    } else {
      // Open dropdown animation
      setShowAddCard(true);
      Animated.timing(dropdownHeight, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }).start();
    }
  };

  const resetForm = () => {
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
    setAgreeTerms(false);
    setErrors({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    });
  };

  // Format card number with spaces for display
  const formatCardNumber = (text: string) => {
    // Remove all non-digits
    const cleanText = text.replace(/\D/g, '');
    // Add a space after every 4 digits
    const formatted = cleanText.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted;
  };

  // Format expiry date (MM/YY)
  const formatExpiryDate = (text: string) => {
    // Remove all non-digits
    const cleanText = text.replace(/\D/g, '');
    // Add a slash after the month
    if (cleanText.length > 2) {
      return `${cleanText.slice(0, 2)}/${cleanText.slice(2, 4)}`;
    }
    return cleanText;
  };

  const handleCardNumberChange = (text: string) => {
    const formatted = formatCardNumber(text);
    setCardNumber(formatted);
    
    // Clear error when user types
    if (errors.cardNumber) {
      setErrors(prev => ({ ...prev, cardNumber: '' }));
    }
  };

  const handleExpiryDateChange = (text: string) => {
    const formatted = formatExpiryDate(text);
    setExpiryDate(formatted);
    
    // Clear error when user types
    if (errors.expiryDate) {
      setErrors(prev => ({ ...prev, expiryDate: '' }));
    }
  };

  const handleAddCard = () => {
    // Validate fields
    const newErrors = {
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    };
    
    let hasError = false;
    
    if (activePaymentMethod === 'card') {
      if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
        newErrors.cardNumber = 'Please enter a valid card number';
        hasError = true;
      }
      
      if (!cardName) {
        newErrors.cardName = 'Please enter the card holder name';
        hasError = true;
      }
      
      if (!expiryDate || expiryDate.length < 5) {
        newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
        hasError = true;
      }
      
      if (!cvv || cvv.length < 3) {
        newErrors.cvv = 'Please enter a valid CVV';
        hasError = true;
      }
    }
    
    if (!agreeTerms) {
      // Could add a terms error here if needed
      hasError = true;
    }
    
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Get last 4 digits for display
    const last4Digits = cardNumber.replace(/\s/g, '').slice(-4);

    // Create a new card object
    const newCard: CardData = {
      id: Date.now().toString(),
      number: last4Digits,
      name: cardName,
      expiryDate: expiryDate
    };

    // Add the new card to saved cards
    setSavedCards([...savedCards, newCard]);

    // Reset form and close dropdown
    resetForm();
    toggleAddCardDropdown();
  };

  const handleDeleteCard = (id: string) => {
    setSavedCards(savedCards.filter(card => card.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment method</Text>
      
      {/* Add new card section */}
      <View style={styles.section}>
        <TouchableOpacity 
          style={[
            styles.addCardButton,
            showAddCard && styles.addCardButtonActive
          ]}
          onPress={toggleAddCardDropdown}
        >
          <Ionicons 
            name={showAddCard ? "remove-circle-outline" : "add-circle-outline"} 
            size={20} 
            color={showAddCard ? appColors.GreyScale[500] : appColors.main.Primary} 
          />
          <Text style={[
            styles.addCardText,
            showAddCard && { color: appColors.GreyScale[500] }
          ]}>
            {showAddCard ? "Add new card" : "Add new card"}
          </Text>
          <Ionicons 
            name={showAddCard ? "chevron-up" : "chevron-down"} 
            size={20} 
            color={appColors.GreyScale[500]} 
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* Add Card Dropdown */}
        {showAddCard && (
          <Animated.View 
            style={[
              styles.addCardDropdown,
              { 
                maxHeight: dropdownHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500]
                }),
                opacity: dropdownHeight
              }
            ]}
          >
            {/* Payment Method Tabs */}
            <View style={styles.paymentTabs}>
              <TouchableOpacity 
                style={[
                  styles.paymentTab, 
                  activePaymentMethod === 'paypal' && styles.activePaymentTab
                ]}
                onPress={() => setActivePaymentMethod('paypal')}
              >
                <View style={styles.paypalContainer}>
                  <Text style={styles.paypalText}>Paypal</Text>
                  <Text style={styles.onlinePayment}>Online payment</Text>
                </View>
                <Ionicons name="logo-paypal" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {activePaymentMethod === 'card' ? (
              <View style={styles.formContainer}>
                {/* Card Number Input */}
                <Text style={styles.inputLabel}>Card number</Text>
                <View style={styles.inputContainer}>
                {/* <Ionicons name="card-outline" size={20} color={appColors.GreyScale[400]} style={styles.inputIcon} /> */}
                  <TextInput
                    style={[styles.input, errors.cardNumber ? styles.inputError : null]}
                    placeholder="0000 0000 0000 0000"
                    keyboardType="numeric"
                    value={cardNumber}
                    onChangeText={handleCardNumberChange}
                    maxLength={19}
                  />
                </View>
                {errors.cardNumber ? <Text style={styles.errorText}>{errors.cardNumber}</Text> : null}

                {/* Expiry Date and CVC */}
                <View style={styles.rowInputs}>
                  <View style={styles.halfInputContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 4,marginBottom:8}}>
                    <Text style={styles.inputLabel}>Expiry date</Text>
                    <Ionicons name="help-circle-outline" size={16} color={appColors.GreyScale[400]} />
                    </View>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={[styles.input, errors.expiryDate ? styles.inputError : null]}
                        placeholder="MM/YY"
                        keyboardType="numeric"
                        value={expiryDate}
                        onChangeText={handleExpiryDateChange}
                        maxLength={5}
                      />
                     
                    </View>
                    {errors.expiryDate ? <Text style={styles.errorText}>{errors.expiryDate}</Text> : null}
                  </View>

                  <View style={styles.halfInputContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 4,marginBottom:8}}> 
                    <Text style={styles.inputLabel}>CVV</Text>
                    <Ionicons name="help-circle-outline" size={16} color={appColors.GreyScale[400]} style={{justifyContent:'center'}} />
                    </View>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={[styles.input, errors.cvv ? styles.inputError : null]}
                        placeholder="000"
                        keyboardType="numeric"
                        value={cvv}
                        onChangeText={(text) => {
                          setCvv(text);
                          if (errors.cvv) setErrors(prev => ({ ...prev, cvv: '' }));
                        }}
                        maxLength={3}
                      />
                    </View>
                    {errors.cvv ? <Text style={styles.errorText}>{errors.cvv}</Text> : null}
                  </View>
                </View>

                {/* Card Holder Name */}
                <Text style={styles.inputLabel}>Card holder</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, errors.cardName ? styles.inputError : null]}
                    placeholder="Full name"
                    value={cardName}
                    onChangeText={(text) => {
                      setCardName(text);
                      if (errors.cardName) setErrors(prev => ({ ...prev, cardName: '' }));
                    }}
                  />
               </View>
                {errors.cardName ? <Text style={styles.errorText}>{errors.cardName}</Text> : null}
              </View>
            ) : (
              <View style={styles.paypalFormContainer}>
                {/* PayPal form could go here if needed */}
              </View>
            )}

            {/* Terms and Conditions - shown for both payment methods */}
            <View style={styles.termsContainer}>
              <TouchableOpacity 
                style={styles.checkbox}
                onPress={() => setAgreeTerms(!agreeTerms)}
              >
                {agreeTerms ? (
                  <Ionicons name="checkbox" size={20} color={appColors.main.Primary} />
                ) : (
                  <Ionicons name="square-outline" size={20} color={appColors.GreyScale[400]} />
                )}
              </TouchableOpacity>
              <Text style={styles.termsText}>
                I agree with <Text style={styles.termsLink}>general terms and conditions</Text>
              </Text>
            </View>

            {/* Connect Button - shown for both payment methods */}
            <TouchableOpacity 
              style={[
                styles.connectButton,
                (!agreeTerms || (activePaymentMethod === 'card' && (!cardNumber || !cardName || !expiryDate || !cvv))) && styles.disabledButton
              ]}
              onPress={handleAddCard}
              disabled={!agreeTerms || (activePaymentMethod === 'card' && (!cardNumber || !cardName || !expiryDate || !cvv))}
            >
              <Text style={styles.connectButtonText}>Connect to Paypal</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
      
      {/* Saved cards section */}
      {savedCards.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your saved cards</Text>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.savedCardsContainer}
          >
            {savedCards.map((card) => (
              <View key={card.id} style={styles.cardWrapper}>
                <SavedCard 
                  cardNumber={card.number} 
                  expiry={card.expiryDate} 
                  cardHolder={card.name} 
                  style={{ width: 300 }}
                />
                {/* <TouchableOpacity 
                  style={styles.deleteCardBtn}
                  onPress={() => handleDeleteCard(card.id)}
                >
                  <Ionicons name="trash-outline" size={20} color={appColors.alert.Error} />
                </TouchableOpacity> */}
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Other payment methods section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other payment method</Text>
        
        <View style={styles.paymentMethodList}>
          {/* Apple Pay */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentMethodLeft}>
              <Image source={require('@/assets/images/link/apple.png')} style={{height:48,width:48}}/>
              <Text style={styles.paymentName}>Apple Pay</Text>
            </View>
            <View style={{flexDirection:'row',gap:20}}>
              <Text style={styles.notConnected}>Not connected</Text>
              <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
            </View>
          </TouchableOpacity>
          
          {/* PayPal */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentMethodLeft}>
              <View style={{backgroundColor:appColors.main.Primary,justifyContent:"center",alignItems:'center',height:48,width:48,borderRadius:10}}>
            <Ionicons name="logo-paypal" size={24} color="#ffffff" />
            </View>
              <Text style={styles.paymentName}>Paypal</Text>
            </View>
            <View style={{flexDirection:'row',gap:20}}>
              <Text style={styles.notConnected}>Not connected</Text>
              <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
            </View>
          </TouchableOpacity>
          
          {/* Google Pay */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentMethodLeft}>
            <Image source={require('@/assets/images/link/google.png')} style={{height:48,width:48}}/>
              <Text style={styles.paymentName}>Google Pay</Text>
            </View>
            <View style={{flexDirection:'row',gap:20}}>
              <Text style={styles.notConnected}>Not connected</Text>
              <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.AdditionalColor.white,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  savedCardsContainer: {
    paddingBottom: 10,
  },
  cardWrapper: {
    marginRight: 16,
    position: 'relative',
  },
  deleteCardBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 15,
    padding: 5,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    backgroundColor: appColors.AdditionalColor.white,
  },
  addCardButtonActive: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  addCardText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.main.Primary,
    marginLeft: 8,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  addCardDropdown: {
    backgroundColor: appColors.AdditionalColor.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: appColors.GreyScale[200],
    padding: 16,
    overflow: 'hidden',
  },
  paymentTabs: {
    marginBottom: 16,
  },
  paymentTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: appColors.main.Primary,
    padding: 16,
    borderRadius: 8,
  },
  activePaymentTab: {
    backgroundColor: appColors.main.Primary,
  },
  paypalContainer: {
    flexDirection: 'column',
  },
  paypalText: {
    color: appColors.AdditionalColor.white,
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
  },
  onlinePayment: {
    color: appColors.AdditionalColor.white,
    fontSize: 12,
    fontFamily: appFonts.UrbanistRegular,
    opacity: 0.8,
  },
  paymentMethodList: {
    gap: 12,
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: appColors.GreyScale[50],
    borderRadius: 8,
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: appColors.GreyScale[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentName: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[900],
  },
  notConnected: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[400],
  },
  paypalLogo: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: '#FFF',
  },
  googleLogo: {
    width: 24,
    height: 24,
  },
  formContainer: {
    gap: 16,
  },
  paypalFormContainer: {
    paddingTop: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'flex-start',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    backgroundColor: appColors.GreyScale[50],
    flex: 1,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },

    }),
  },
  inputIcon: {
    position: 'absolute',
    resizeMode: 'contain',
    paddingHorizontal: 12,
  },
  inputError: {
    borderColor: appColors.alert.Error,
  },
  errorText: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.alert.Error,
    marginTop: 4,
  },
  rowInputs: {
    flexDirection: 'row',
    gap: 16,
  },
  halfInputContainer: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkbox: {
    marginRight: 8,
  },
  termsText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistRegular,
    color: appColors.GreyScale[800],
  },
  termsLink: {
    color: appColors.main.Primary,
    fontFamily: appFonts.UrbanistMedium,
  },
  connectButton: {
    height: 48,
    backgroundColor: appColors.main.Primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: appColors.main.Primary
  },
  connectButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.AdditionalColor.white,
  },
});

export default PaymentMethodContent; 