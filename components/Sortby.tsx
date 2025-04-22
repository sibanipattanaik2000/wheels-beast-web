import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Modal, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import appFonts from '@/constants/Font';
import { appColors } from '@/constants/Color';
import { Ionicons } from '@expo/vector-icons';

const Sortby = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Latest saved');
  const sortOptions = ['Latest saved', 'Longest saved', 'Most reviews','Highest price','Lowest price'];

 
  return (

    <View>
      {/* Sort Button */}
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: appFonts.UrbanistBold,
            color: appColors.GreyScale[500],
          }}
        >
          Sort
        </Text>
        <Image
          source={require('@/assets/images/sort/sort.png')}
          style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
      </Pressable>

      {/* Modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
          <View style={{ flex: 1,backgroundColor:"rgba(0,0,0,0.5)",justifyContent:"flex-end",paddingVertical:24 }}>
            <View
              style={{
                position: 'absolute',
                right: 10, 
                width: '30%',
                backgroundColor: 'white',
                borderRadius: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                alignSelf:"center",
                justifyContent:"space-between",
               
                
              }}
            >
                <View style={{padding:24,justifyContent:"space-between",flexDirection:"row", borderBottomWidth:1,
                borderBottomColor:appColors.GreyScale[200],}}>
                <Text style={{fontFamily:appFonts.UrbanistBold,fontSize:18,color:appColors.GreyScale[900]}}>Sort by</Text>
                <TouchableOpacity style={{height:24,width:24}} onPress={() => setModalVisible(false)}>  
                <Ionicons
                  name="close"
                  size={24}
                  color={appColors.GreyScale[700]}
                />
              </TouchableOpacity>
              </View>
              {sortOptions.map((option,index) => {
                const isActive = selectedOption === option;
                const isLast = index === sortOptions.length - 1;

                return (
                  <Pressable
                    key={option}
                    onPress={() => {
                      setSelectedOption(option);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding:24,
                      justifyContent:"space-between",
                      borderBottomWidth: isLast ?0:1,
                      borderBottomColor:appColors.GreyScale[200],   
                    }}
                  >
                      <Text
                      style={{
                        fontFamily: appFonts.UrbanistBold,
                        fontSize: 16,
                        color: appColors.GreyScale[900],
                      }}
                    >
                      {option}
                    </Text>
                    <View
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: isActive ? appColors.main.Primary: appColors.GreyScale[300],
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isActive && (
                        <View
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor:appColors.main.Primary,
                          }}
                        />
                      )}
                    </View>
                  
                  </Pressable>
                );
              })}
            </View>
          </View>
      </Modal>
    </View>
  );
};

export default Sortby;
