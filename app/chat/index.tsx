import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  Image,
  ScrollView,
  useWindowDimensions,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { appColors } from "@/constants/Color";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import MessageScreen from "@/components/MessageScreen";
import Footer from "@/components/Footer";

type MessageType = {
  id: string;
  content: string;
  sender: "user" | "other";
  timestamp: string;
  isAudio?: boolean;
  audioDuration?: string;
  isImage?: boolean;
  imageUri?: string;
  viewed?: boolean;
};

const Chat = () => {
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const { height, width } = useWindowDimensions();

  // Sample chat data
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      content: "Hello!",
      sender: "user",
      timestamp: "04:00",
      viewed: true,
    },
    {
      id: "2",
      content: "",
      sender: "user",
      timestamp: "04:00",
      isAudio: true,
      audioDuration: "00:20",
      viewed: true,
    },
    {
      id: "3",
      content: "Hello! 👋",
      sender: "other",
      timestamp: "04:15",
    },
    {
      id: "4",
      content: "",
      sender: "other",
      timestamp: "04:15",
      isAudio: true,
      audioDuration: "00:24",
    },
    {
      id: "5",
      content: "Is there insurance for car maintenance?",
      sender: "user",
      timestamp: "04:20",
      viewed: true,
    },
    {
      id: "6",
      content: "Yes, of course. We will make it easy for you 😊",
      sender: "other",
      timestamp: "04:21",
    },
  ]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage: MessageType = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      viewed: false,
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate reply
    setTimeout(() => {
      const reply: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "Got your message. Our team will assist you soon.",
        sender: "other",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, reply]);
      // Scroll to bottom
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 2000);
  };

  const toggleRecording = () => {
    setRecording(!recording);
    if (recording) {
      // Simulate sending audio message
      const newAudioMessage: MessageType = {
        id: Date.now().toString(),
        content: "",
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isAudio: true,
        audioDuration: "00:15",
        viewed: false,
      };

      setMessages([...messages, newAudioMessage]);
    }
  };

  const handleCameraPress = () => {
    alert("Camera functionality is currently unavailable.");
  };

  const sendImageMessage = (imageUri: string) => {
    const newImageMessage: MessageType = {
      id: Date.now().toString(),
      content: "",
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isImage: true,
      imageUri: imageUri,
      viewed: false,
    };

    setMessages([...messages, newImageMessage]);

    // Simulate reply
    setTimeout(() => {
      const reply: MessageType = {
        id: (Date.now() + 1).toString(),
        content: "I received your image. Thanks for sharing!",
        sender: "other",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, reply]);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 2000);
  };

  const renderMessage = ({ item }: { item: MessageType }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={[
          styles.messageContainer,
          isUser
            ? [styles.userMessage, { backgroundColor: appColors.main.Primary }]
            : [
                styles.otherMessage,
                { backgroundColor: appColors.GreyScale[100] },
              ],
        ]}
      >
        {item.isAudio ? (
          <View style={styles.audioContainer}>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons
                name="play"
                size={16}
                color={isUser ? "white" : appColors.GreyScale[900]}
              />
            </TouchableOpacity>
            <View style={styles.waveformContainer}>
              <View style={styles.fakeWaveform}>
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.waveformBar,
                        {
                          height: 4 + Math.random() * 12,
                          backgroundColor: isUser
                            ? "rgba(255,255,255,0.8)"
                            : appColors.main.Primary,
                        },
                      ]}
                    />
                  ))}
              </View>
            </View>
            <Text
              style={[
                styles.audioDuration,
                {
                  color: isUser
                    ? appColors.AdditionalColor.white
                    : appColors.GreyScale[900],
                },
              ]}
            >
              {item.audioDuration}
            </Text>
          </View>
        ) : item.isImage ? (
          <Image
            source={{ uri: item.imageUri }}
            style={styles.messageImage}
            resizeMode="cover"
          />
        ) : (
          <Text
            style={[
              styles.messageText,
              {
                color: isUser
                  ? appColors.AdditionalColor.white
                  : appColors.GreyScale[900],
              },
            ]}
          >
            {item.content}
          </Text>
        )}

        {item.viewed && isUser && (
          <View style={styles.viewedContainer}>
            <Ionicons
              name="eye-outline"
              size={12}
              color="rgba(255,255,255,0.7)"
            />
            <Text style={styles.viewedText}>Viewed</Text>
          </View>
        )}
      </View>
    );
  };

  const renderTimestamp = ({
    item,
    index,
  }: {
    item: MessageType;
    index: number;
  }) => {
    // Only show timestamp if it's the first message of a time group
    if (
      index === 0 ||
      messages[index - 1].timestamp.split(":")[0] !==
        item.timestamp.split(":")[0]
    ) {
      return (
        <Text style={[styles.timestamp, { color: appColors.GreyScale[500] }]}>
          {index === 0 ? "Today" : `${item.timestamp}`}
        </Text>
      );
    }
    return null;
  };

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: appColors.GreyScale[100],
          paddingHorizontal: 70,
          paddingVertical: 50,
          maxHeight:height
        }}
      >
        <View
          style={{
            width: width/3.22,
            borderRightWidth: 1,
            borderColor: appColors.GreyScale[300],
            height: "100%",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            overflow: "hidden",
          }}
        >
          <MessageScreen />
        </View>


        <View style={{flex:1}}>
          {/* Header */}
          <View
            style={[
              styles.header,
              { backgroundColor: appColors.AdditionalColor.white },
            ]}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={appColors.GreyScale[900]}
              />
            </TouchableOpacity>

            <View style={styles.userInfo}>
              <View
                style={[
                  styles.avatarPlaceholder,
                  { backgroundColor: appColors.main.Primary },
                ]}
              >
                <Text style={styles.avatarText}>FD</Text>
              </View>
              <View>
                <Text
                  style={[styles.userName, { color: appColors.GreyScale[900] }]}
                >
                  Florencio Dorrance
                </Text>
                <View style={styles.onlineContainer}>
                  <View style={styles.onlineBadge} />
                  <Text
                    style={[
                      styles.onlineText,
                      { color: appColors.GreyScale[500] },
                    ]}
                  >
                    Online
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.callButton}>
              <Ionicons
                name="call-outline"
                size={22}
                color={appColors.GreyScale[500]}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton}>
              <Feather
                name="more-vertical"
                size={22}
                color={appColors.GreyScale[500]}
              />
            </TouchableOpacity>
          </View>
        <ScrollView
          style={[
            styles.container,
            { backgroundColor: appColors.AdditionalColor.white },
          ]}
          showsHorizontalScrollIndicator={false}
        >

          {/* Messages */}
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={(props) => (
              <>
                {renderTimestamp(props)}
                {renderMessage(props)}
              </>
            )}
            contentContainerStyle={styles.messagesContainer}
            onLayout={() =>
              flatListRef.current?.scrollToEnd({ animated: false })
            }
          />

    
        </ScrollView>
          {/* Input area */}
          <View
            style={[
              styles.inputContainer,
              { backgroundColor: appColors.AdditionalColor.white },
            ]}
          >
            <View style={[styles.inputWrapper, { backgroundColor: "#F1F5F9" }]}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons
                  name="happy-outline"
                  size={22}
                  color={appColors.GreyScale[500]}
                />
              </TouchableOpacity>

              <TextInput
                style={[styles.input, { color: appColors.GreyScale[900], }]}
                placeholder="Write message"
                placeholderTextColor={appColors.GreyScale[500]}
                value={message}
                onChangeText={setMessage}
              />

              <TouchableOpacity style={styles.iconButton}>
                <Ionicons
                  name="attach-outline"
                  size={22}
                  color={appColors.GreyScale[500]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleCameraPress}
              >
                <Ionicons
                  name="camera-outline"
                  size={22}
                  color={appColors.GreyScale[500]}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                styles.sendButton,
                { backgroundColor: appColors.main.Primary },
              ]}
              onPress={
                recording
                  ? toggleRecording
                  : message.trim()
                  ? sendMessage
                  : toggleRecording
              }
            >
              <Ionicons
                name={recording ? "stop" : message.trim() ? "send" : "mic"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>

          </View>
        
      </View>
      </ScrollView>
    </CustomSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  backButton: {
    padding: 5,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  userName: {
    fontWeight: "600",
    fontSize: 16,
  },
  onlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  onlineBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 5,
  },
  onlineText: {
    fontSize: 12,
  },
  callButton: {
    padding: 8,
    marginRight: 5,
  },
  menuButton: {
    padding: 8,
  },
  messagesContainer: {
    padding: 16,
    paddingTop: 10,
  },
  timestamp: {
    alignSelf: "center",
    fontSize: 12,
    marginTop: 20,
    marginBottom: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
  },
  otherMessage: {
    alignSelf: "flex-start",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  audioContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    borderColor: appColors.GreyScale[200],
  },
  playButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  waveformContainer: {
    flex: 1,
    height: 24,
    justifyContent: "center",
  },
  fakeWaveform: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
    width: "100%",
  },
  waveformBar: {
    width: 3,
    marginHorizontal: 2,
    borderRadius: 1.5,
  },
  audioDuration: {
    fontSize: 12,
    marginLeft: 8,
  },
  viewedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  viewedText: {
    fontSize: 10,
    color: "rgba(255,255,255,0.7)",
    marginLeft: 3,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 15,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 4,
    maxHeight: 100,
    textAlignVertical: "center",
    ...Platform.select({
      web: { 
        outlineStyle: "none",
       }})
  },
  iconButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  messageImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
});

export default Chat;
