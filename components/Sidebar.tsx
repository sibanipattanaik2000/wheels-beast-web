// SidebarComponent.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';
import { appColors } from '@/constants/Color';
//import Slider from '@react-native-community/slider'; // Slider added for price range

const FilterSection = ({ title, options }: { title: string; options: string[] }) => {
  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const visibleOptions = showMore ? options : options.slice(0, 6);

  const toggleOption = (option: string) => {
    setSelected((prev) => prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.header}>{title}</Text>
      {visibleOptions.map((option, index) => (
        <View key={index} style={styles.optionRow}>
        <CheckBox
          value={selected.includes(option)}
          onValueChange={() => toggleOption(option)}
          style={[
            selected.includes(option) && { backgroundColor: "#3563E9",borderRadius:10 },  
          ]}  
        />
        <Text>{option}</Text>
      </View>
      ))}
      {options.length > 6 && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={styles.moreText}>{showMore ? 'Less' : 'More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};



export const SidebarComponent = () => {
    const [minValue, setMinValue] = useState(10000);
    const [maxValue, setMaxValue] = useState(250000);  
  return (
    <ScrollView style={styles.sidebar} showsHorizontalScrollIndicator={false}>
      <FilterSection title="TYPE" options={["Sport (10)", "SUV (20)", "MPV (12)", "Sedan (14)", "Coupe (6)", "Hatchback (11)", "Crossover (8)", "Convertible (5)"]} />
      <FilterSection title="BRAND" options={["BMW (10)", "Ferrari (10)", "Mercedes (10)", "Audi (10)", "Mini Cooper (10)", "Tesla (10)", "Jaguar (10)", "Toyota (10)"]} />
      <FilterSection title="MULTIMEDIA" options={["Android Auto", "Apple CarPlay", "Dab Radio", "HeadUp Dispaly", "On-Board Computer", "Navigation System", "WLAN/Wifi Hotsport"]} />
      <View style={{ marginTop: 20 }}>
      <Text style={styles.header}>PRICE RANGE</Text>
      {/* <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={10000}
        maximumValue={250000}
        step={1000}
        value={minValue}
        onValueChange={(value) => setMinValue(value)}
        minimumTrackTintColor="#0000ff"
        maximumTrackTintColor="#000000"
      /> */}
      <Text>${minValue.toLocaleString()} - ${maxValue.toLocaleString()}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sidebar: { padding: 16, width: '100%', maxWidth: 300, backgroundColor: appColors.AdditionalColor.white },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  optionRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 ,gap:8},
  moreText: { color: 'blue', marginTop: 5 },
});
