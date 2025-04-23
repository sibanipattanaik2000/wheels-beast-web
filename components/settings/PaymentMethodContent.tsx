import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [savedCards, setSavedCards] = useState<CardData[]>([
    {
      id: '1',
      number: '3950',
      name: 'Omie Kawabata',
      expiryDate: '06/25'
    }
  ]);

  const handleAddCard = () => {
    // Basic validation
    if (!cardNumber || !cardName || !expiryDate || !cvc) {
      return;
    }

    // Format the card number to show only last 4 digits
    const last4Digits = cardNumber.slice(-4);

    // Create a new card object
    const newCard: CardData = {
      id: Date.now().toString(),
      number: last4Digits,
      name: cardName,
      expiryDate: expiryDate
    };

    // Add the new card to saved cards
    setSavedCards([...savedCards, newCard]);

    // Reset form and close modal
    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvc('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment method</Text>
      
      {/* Add new card section */}
      <View style={styles.section}>
        <TouchableOpacity 
          style={styles.addCardButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle-outline" size={20} color={appColors.main.Primary} />
          <Text style={styles.addCardText}>Add new card</Text>
        </TouchableOpacity>
      </View>

      {/* Saved cards section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved cards</Text>
        
        {savedCards.map((card) => (
          <View key={card.id} style={styles.creditCard}>
            <View style={styles.creditCardContent}>
              <View style={styles.cardLogo}>
                <Image 
                  source={require('@/assets/images/brand/Car.png')} 
                  style={styles.cardLogoImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.cardNumber}>**** **** **** {card.number}</Text>
              <View style={styles.cardDetails}>
                <Text style={styles.cardName}>{card.name}</Text>
                <Text style={styles.expiryDate}>Expiry: {card.expiryDate}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Other payment methods section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other payment method</Text>
        
        <View style={styles.paymentMethodList}>
          {/* Apple Pay */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentMethodLeft}>
              <View style={styles.paymentIcon}>
                <Ionicons name="logo-apple" size={24} color="#000" />
              </View>
              <Text style={styles.paymentName}>Apple Pay</Text>
            </View>
            <Text style={styles.notConnected}>Not connected</Text>
            <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
          </TouchableOpacity>
          
          {/* PayPal */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentMethodLeft}>
              <View style={[styles.paymentIcon, { backgroundColor: '#0070BA' }]}>
                <Text style={styles.paypalLogo}>P</Text>
              </View>
              <Text style={styles.paymentName}>Paypal</Text>
            </View>
            <Text style={styles.notConnected}>Not connected</Text>
            <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
          </TouchableOpacity>
          
          {/* Google Pay */}
          <TouchableOpacity style={styles.paymentMethod}>
            <View style={styles.paymentMethodLeft}>
              <View style={styles.paymentIcon}>
                <Image 
                  source={require('@/assets/images/brand/Car.png')} 
                  style={styles.googleLogo}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.paymentName}>Google Pay</Text>
            </View>
            <Text style={styles.notConnected}>Not connected</Text>
            <Ionicons name="chevron-forward" size={20} color={appColors.GreyScale[300]} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Add Card Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Card</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color={appColors.GreyScale[500]} />
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              {/* Card Number Input */}
              <Text style={styles.inputLabel}>Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder="0000 0000 0000 0000"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={setCardNumber}
                maxLength={19}
              />

              {/* Card Holder Name */}
              <Text style={styles.inputLabel}>Card Holder Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={cardName}
                onChangeText={setCardName}
              />

              {/* Expiry Date and CVC */}
              <View style={styles.rowInputs}>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.inputLabel}>Expiry Date</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="MM/YY"
                    keyboardType="numeric"
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    maxLength={5}
                  />
                </View>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.inputLabel}>CVC</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="000"
                    keyboardType="numeric"
                    value={cvc}
                    onChangeText={setCvc}
                    maxLength={3}
                  />
                </View>
              </View>

              {/* Add Card Button */}
              <TouchableOpacity 
                style={styles.addButton}
                onPress={handleAddCard}
              >
                <Text style={styles.addButtonText}>Add Card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  addCardText: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.main.Primary,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
    marginBottom: 16,
  },
  creditCard: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: appColors.main.Primary,
    padding: 24,
    marginBottom: 16,
  },
  creditCardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardLogo: {
    alignItems: 'flex-end',
  },
  cardLogoImage: {
    width: 50,
    height: 30,
  },
  cardNumber: {
    fontSize: 18,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.AdditionalColor.white,
    letterSpacing: 2,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.AdditionalColor.white,
  },
  expiryDate: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.AdditionalColor.white,
  },
  paymentMethodList: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.GreyScale[100],
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[100],
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: appColors.GreyScale[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  paymentName: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  notConnected: {
    fontSize: 12,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[500],
    marginRight: 8,
  },
  paypalLogo: {
    color: 'white',
    fontSize: 18,
    fontFamily: appFonts.UrbanistBold,
  },
  googleLogo: {
    width: 20,
    height: 20,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: appFonts.UrbanistBold,
    color: appColors.GreyScale[900],
  },
  formContainer: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: appFonts.UrbanistMedium,
    color: appColors.GreyScale[700],
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: appFonts.UrbanistMedium,
    marginBottom: 16,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  addButton: {
    backgroundColor: appColors.main.Primary,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    fontSize: 16,
    fontFamily: appFonts.UrbanistBold,
    color: 'white',
  },
});

export default PaymentMethodContent; 