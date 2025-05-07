import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { appColors } from "@/constants/Color";
import appFonts from "@/constants/Font";
import ShareModal from "./ShareModal";

const { width, height } = Dimensions.get("window");

const carFrames = Array.from({ length: 36 }, (_, i) =>
  //  `https://cdn.360carmoving.com/audi-q7/frame${i + 1}.png`
  require("@/assets/images/carlist/View1.png")
);

export default function Car360Modal({
  visible,
  onClose,
   vehicle, 
}: {
  visible: boolean;
  onClose: () => void; 
  vehicle: { name: string; description: string; id: string };

}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];
//   const rotateCar = (direction: "left" | "right") => {
//     setFrameIndex((prev) =>
//       direction === "right"
//         ? (prev + 1) % carFrames.length
//         : (prev - 1 + carFrames.length) % carFrames.length
//     );
//   };


const rotateCar = (direction: 'left' | 'right') => {
    Animated.sequence([
      Animated.timing(rotation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();

    setFrameIndex((prev) =>
      direction === 'right' ? (prev + 1) % carFrames.length : (prev - 1 + carFrames.length) % carFrames.length
    );
  };
  const rotateY = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });
  return (
    <Modal visible={visible} transparent animationType="fade">
      <GestureHandlerRootView style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <TouchableOpacity
                onPress={onClose}
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 30,
                  backgroundColor: "#FFFFFF0D",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.title}>Audi Q7 50 Quattro</Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: appColors.GreyScale[700],
                padding: 10,
                borderRadius: 10,
                gap: 10,
                width: "10%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setShareModalVisible(true)}
            >
              <Image
                source={require("@/assets/images/Features/share.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  tintColor: appColors.AdditionalColor.white,
                }}
              />
              <Text
                style={{
                  color: appColors.AdditionalColor.white,
                  fontSize: 16,
                  fontFamily: appFonts.UrbanistBold,
                }}
              >
                Share
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.carContainer}>
            <Image
              // source={{ uri: carFrames[frameIndex] }}
              source={carFrames[frameIndex]}
              style={[
                styles.carImage,
                {
                  transform: [{ rotateY }],
                },
              ]}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity
            style={styles.rotateButton}
            onPress={() => rotateCar("right")}
          >
            <Text style={styles.rotateButtonText}>◀ 360 ▶</Text>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>

      {/* Share Modal Component */}
      <ShareModal
              isVisible={shareModalVisible}
              onClose={() => setShareModalVisible(false)}
              title="Share Car"
              shareMessage={`Check out this ${vehicle.name}: ${vehicle.description}`}
              shareTitle={vehicle.name}
              shareUrl={`https://wheelbeast.com/vehicle/${vehicle.id}`}
            />
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.8,
    height: height * 0.8,
    backgroundColor: "#0A1128",
    borderRadius: 16,
    padding: 81,
    gap: 43,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: appFonts.UrbanistBold,
    textAlignVertical: "center",
  },
  carContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carImage: {
    width: 300,
    height: 300,
    position: "absolute",
  },
  rotateButton: {
    alignSelf: "center",
    backgroundColor: "#3A2EFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 10,
  },
  rotateButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
