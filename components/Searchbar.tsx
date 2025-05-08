import { appColors } from "@/constants/Color";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  DimensionValue,
  Platform,
} from "react-native";

interface SearchBarProps {
  height?: number;
  width?: DimensionValue;
  placeholder?: string;
  onSearch?: (text: string) => void;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
}
const LANGUAGE_KEY = "selectedLanguage";

const Search: React.FC<SearchBarProps> = ({
  height = 56,
  width = "100%",
  onSearch,
  placeholder = "Search brand, or model",
  borderRadius ,
  borderWidth=0 ,
  borderColor,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchText(text); // ✅ update local state
    onSearch?.(text); // ✅ notify parent component
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F8FAFC",
      borderRadius: 32,
      paddingHorizontal: 8,
      justifyContent: "space-between",
      borderWidth: 0.5,
      alignSelf: "center",
      boxShadow :"0px 0px 2px rgba(0, 0, 0, 0.25)"
    },
    input: {
      flex: 1,
      height: "100%",
      fontSize: 16,
      marginLeft: 10,
      fontFamily: "SofiaProMedium",
      ...Platform.select({
        web:{
          outlineStyle: "none",
        }
      })
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 8,
    },
  });
  return (
    <View
      style={[
        styles.container,
        {
          height,
          width,
          borderColor: appColors.GreyScale[500] || borderColor,
          flexDirection: "row",
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          boxShadow:"0px 0px 2px rgba(0,0,0,0.25)"
        },
      ]}
    >
      <TextInput
        value={searchText}
        onChangeText={handleSearchChange}
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor={appColors.GreyScale[500]}
        cursorColor={appColors.GreyScale[500]}
      />
      <Image
        source={require("@/assets/images/carlist/Search.png")}
        style={{ width: 20, height: 20, marginRight: 8 }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Search;
