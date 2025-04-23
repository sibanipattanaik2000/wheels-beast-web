import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface ViewAllButtonProps {
  onPress: () => void;
  showAll: boolean;
  title: string;
}

const ViewAllButton = ({ onPress, showAll, title }: ViewAllButtonProps) => {
  //   if (showAll) return null;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text
        style={{
          color: appColors.GreyScale[900],
          fontSize: 28,
          fontFamily: appFonts.UrbanistBold,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: appColors.GreyScale[500],
            fontSize: 28,
            fontFamily: appFonts.UrbanistBold,
          }}
        >
          {showAll ? "View All" : "Show Less"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAllButton;
