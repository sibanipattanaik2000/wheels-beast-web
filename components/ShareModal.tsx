import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Share,
  Platform,
  TextInput,
  ToastAndroid,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import * as Clipboard from "expo-clipboard";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";

interface ShareModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  shareMessage: string;
  shareTitle: string;
  shareUrl: string;
}

interface ShareOptionType {
  id: string;
  icon: any;
  title: string;
}

const ShareModal = ({
  isVisible,
  onClose,
  title = "Share this item",
  shareMessage,
  shareTitle,
  shareUrl,
}: ShareModalProps) => {
  const [linkText, setLinkText] = useState(shareUrl);
  const shareInputRef = useRef<TextInput>(null);

  // Share options data with correct icons and titles
  const shareOptions: ShareOptionType[] = [
    {
      id: "airdrop",
      icon: require("@/assets/images/ShareModal/AirDrop.png"),
      title: "AirDrop",
    },
    {
      id: "message",
      icon: require("@/assets/images/ShareModal/message.png"),
      title: "Message",
    },
    {
      id: "mail",
      icon: require("@/assets/images/ShareModal/mail.png"),
      title: "Mail",
    },
    {
      id: "twitter",
      icon: require("@/assets/images/ShareModal/twitter.png"),
      title: "Twitter",
    },
    {
      id: "instagram",
      icon: require("@/assets/images/ShareModal/insta.png"),
      title: "Instagram",
    },
    {
      id: "facebook",
      icon: require("@/assets/images/ShareModal/fb.png"),
      title: "Facebook",
    },
    {
      id: "telegram",
      icon: require("@/assets/images/ShareModal/telegram.png"),
      title: "Telegram",
    },
    {
      id: "other",
      icon: require("@/assets/images/ShareModal/other.png"),
      title: "More",
    },
  ];

  const handleShare = async (platform: string) => {
    try {
      // Platform-specific sharing logic could be added here
      const result = await Share.share({
        message: shareMessage,
        title: shareTitle,
        url: shareUrl, // only available on iOS
      });

      if (result.action === Share.sharedAction) {
        console.log(`Shared via ${platform}`);
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await Clipboard.setStringAsync(linkText);
      if (Platform.OS === "web") {
        ToastAndroid.show("Link copied to clipboard!", ToastAndroid.SHORT);
      } else {
        Alert.alert("Success", "Link copied to clipboard!");
      }
    } catch (error) {
      console.log("Failed to copy text: ", error);
      Alert.alert("Error", "Failed to copy to clipboard");
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableWithoutFeedback>
          <View style={styles.shareModalContainer}>
            <View style={styles.shareModalHeader}>
              <Text style={styles.shareModalTitle}>{title}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons
                  name="close"
                  size={24}
                  color={appColors.GreyScale[700]}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.shareOptionsContainer}>
              {shareOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.shareOption}
                  onPress={() => handleShare(option.title)}
                >
                  <View style={styles.shareIconContainer}>
                    <Image source={option.icon} style={styles.shareIcon} />
                  </View>
                  <Text style={styles.shareOptionText}>{option.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.copyLinkContainer}>
              <TextInput
                ref={shareInputRef}
                style={styles.linkInput}
                value={linkText}
                onChangeText={setLinkText}
                placeholder="Copy link"
                selectTextOnFocus
              />
              <TouchableOpacity
                style={styles.copyButton}
                onPress={copyToClipboard}
              >
                <Image
                  source={require("@/assets/images/ShareModal/copy.png")}
                  style={styles.copyIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  shareModalContainer: {
    backgroundColor: appColors.AdditionalColor.white,
    borderRadius: 16,
    padding: 24,
    width: "40%",
    alignSelf: "center",
  },
  shareModalHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 24,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  shareModalTitle: {
    fontFamily: appFonts.UrbanistBold,
    fontSize: 20,
    color: appColors.GreyScale[900],
    textAlign: "center",
  },
  shareOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 24,
    justifyContent: "space-between",
  },
  shareOption: {
    width: "22%",
    alignItems: "center",
    marginBottom: 16,
  },
  shareIconContainer: {
    width: 84,
    height: 84,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#F5F5FF",
  },
  shareIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  shareOptionText: {
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
    color: appColors.GreyScale[700],
  },
  copyLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: appColors.GreyScale[200],
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: appColors.GreyScale[50],
    marginHorizontal: 20,
  },
  linkInput: {
    flex: 1,
    height: 50,
    fontFamily: appFonts.UrbanistMedium,
    fontSize: 14,
    color: appColors.GreyScale[900],
    paddingHorizontal: 16,
  },
  copyButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  copyIcon: {
    width: 20,
    height: 20,
  },
});

export default ShareModal;
