import { appColors } from '@/constants/Color';
import appFonts from '@/constants/Font';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

type Props = {
  label: string;
  icon: ImageSourcePropType;
  selected: boolean;
  onPress: () => void;
};

const CategoryButton: React.FC<Props> = ({ label, icon, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: appColors.GreyScale[200],
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: selected ? appColors.main.Primary : 'transparent',
      }}
    >
      <Image
        source={icon}
        style={{
          height: 24,
          width: 24,
          tintColor: selected ? 'white' : appColors.GreyScale[900],
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontFamily: appFonts.UrbanistMedium,
          color: selected ? 'white' : appColors.GreyScale[900],
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
