import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';

interface DropDownProps {
  label: string;
  options: string[];
  onSelect?: (value: string) => void;
}

const DropDownComponent: React.FC<DropDownProps> = ({ label, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    setOpen(!open);
    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
    if (onSelect) onSelect(value);
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, options.length * 40], // Adjust height per item
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.label}>
          {selected ? selected : `${label}`}
        </Text>
        <AntDesign name={open ? 'up' : 'down'} size={18} color={appColors.GreyScale[900]} />
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, { height: animatedHeight }]}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => handleSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

export default DropDownComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius:16,
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    padding:16,
    backgroundColor:'#fff'

  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   // padding:10,
    color:appColors.GreyScale[900]
  },
  label: {
    fontSize: 16,
    color:appColors.GreyScale[900],
    fontFamily:appFonts.UrbanistBold
  },
  dropdown: {
    overflow: 'hidden'
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: appColors.GreyScale[200],
  },
  optionText: {
    fontSize: 16,
  },
});
