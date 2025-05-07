import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { act, useState } from "react";
import CustomSafeArea from "@/components/CustomSafeArea";
import Header from "@/components/Header";
import appFonts from "@/constants/Font";
import { appColors } from "@/constants/Color";
import Button from "@/components/Button";
import DropDownComponent from "@/components/Dropdown";
import CarCard from "@/components/CarCard";
import ExploreBrand from "@/components/ExploreBrand";
import { Image } from "expo-image";
import BlogCard from "@/components/BlogCard";
import ViewAll from "@/components/ViewAll";
import Footer from "@/components/Footer";
import TextInput from "@/components/TextInput";
import { Href, router, useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { ResizeMode, Video } from "expo-av";
import { useRef, useEffect } from "react";
import { Dimensions } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const carData = [
  {
    image: require("@/assets/images/brand/blackcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$120,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    type: "home",
    engine: "540hp",
  },
  {
    image: require("@/assets/images/brand/blackcar.png"),
    brand: "Audi A8 Quattro",
    price: "$115,000",
    fuelType: "Manual",
    brandicon: require("@/assets/images/carlist/Audi.png"),
    type: "home",
    engine: "450 hp",
  },
  {
    image: require("@/assets/images/brand/blackcar.png"),
    brand: "Ferrari 488 Spider",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Ferrari.png"),
    type: "home",
    engine: "320 hp",
  },
  {
    image: require("@/assets/images/brand/blackcar.png"),
    brand: "Audi A8 Quattro",
    price: "$130,000",
    fuelType: "Automatic",
    brandicon: require("@/assets/images/carlist/Audi.png"),
    type: "home",
    engine: "320 hp",
  },
];

const blogData = [
  {
    image: require("@/assets/images/brand/blogcar.png"),
    category: "Sound",
    title: "The Future of Electric Vehicles: Trends to Watch",
    date: "May 15, 2023",
    author: "John Doe",
  },
  {
    image: require("@/assets/images/brand/blogcar.png"),
    category: "Accessories",
    title: "Essential Car Maintenance Tips for Every Driver",
    date: "June 2, 2023",
    author: "Jane Smith",
  },
  {
    image: require("@/assets/images/brand/blogcar.png"),
    category: "Exterior",
    title: "Top 10 Family SUVs of 2023: Comprehensive Guide",
    date: "July 10, 2023",
    author: "Mike Johnson",
  },
];

const items = [
  { title: "836 M", subtitle: "CARS FOR SALE" },
  { title: "738 M", subtitle: "DEALER REVIEWS" },
  { title: "100 M", subtitle: "VISITORS PER DAY" },
  { title: "238 M", subtitle: "VERIFIED DEALERS" },
];

const whyChooseUsData = [
  {
    icon: require("@/assets/images/icons/Trust.png"),
    title: "Trusted Dealers",
    description:
      "We partner only with verified dealers who meet our strict quality standards.",
  },
  {
    icon: require("@/assets/images/icons/price.png"),
    title: "Competitive Pricing",
    description:
      "Get the best deals with our price comparison and negotiation tools.",
  },
  {
    icon: require("@/assets/images/icons/service.png"),
    title: "Premium Service",
    description:
      "Enjoy personalized assistance throughout your car buying journey.",
  },
  {
    icon: require("@/assets/images/icons/finance.png"),
    title: "Flexible Financing",
    description:
      "Access multiple financing options tailored to your needs and budget.",
  },
];

const carTypes = [
  { title: "Sedan", icon: require("@/assets/images/brand/Car.png") },
  { title: "SUV", icon: require("@/assets/images/brand/Car.png") },
  { title: "Hatchback", icon: require("@/assets/images/brand/Car.png") },
  { title: "Convertible", icon: require("@/assets/images/brand/Car.png") },
  { title: "Coupe", icon: require("@/assets/images/brand/Car.png") },
];

const Home = () => {
  const { height, width } = useWindowDimensions();
  const screenHeight = Dimensions.get("window").height;
  const router = useRouter();
  const [selected, setSelected] = useState<"budget" | "brand">("budget");
  const [carFilter, setCarFilter] = useState<"new" | "used">("new");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const pickImage = async (index: number) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Permission to access media is required!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Not deprecated
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const updatedImages = [...images];
      updatedImages[index] = result.assets[0].uri;
      setImages(updatedImages);
    }
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      marginVertical: 16,
    },
    radioOption: {
      flexDirection: "row",
      alignItems: "center",
    },
    outerCircle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "gray",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 8,
    },
    outerCircleSelected: {
      borderColor: "blue",
    },
    innerCircle: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: "blue",
    },
    label: {
      fontSize: 16,
      color: "gray",
    },
    carFilterButton: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    carFilterButtonText: {
      fontFamily: appFonts.UrbanistBold,
      fontSize: 16,
    },
    carTypeItem: {
      alignItems: "center",
      padding: 16,
      borderRadius: 12,
      marginRight: 24,
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      width: 120,
    },
    carTypeIcon: {
      width: 64,
      height: 64,
      marginBottom: 8,
    },
    carTypeText: {
      fontFamily: appFonts.UrbanistMedium,
      fontSize: 16,
      color: appColors.GreyScale[900],
    },
    whyChooseUsItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      backgroundColor: "#FFFFFF",
    },
    whyChooseUsIcon: {
      width: 64,
      height: 64,
      marginRight: 16,
    },
    whyChooseUsTitle: {
      fontFamily: appFonts.UrbanistBold,
      fontSize: 20,
      color: appColors.GreyScale[900],
      marginBottom: 4,
    },
    whyChooseUsDescription: {
      fontFamily: appFonts.UrbanistRegular,
      fontSize: 16,
      color: appColors.GreyScale[600],
    },
    lookingForCarContainer: {
      flexDirection: "row",
      padding: 40,
      backgroundColor: appColors.GreyScale[100],
      borderRadius: 24,
      marginBottom: 40,
    },
    lookingForCarContent: {
      flex: 1,
      justifyContent: "center",
    },
    lookingForCarTitle: {
      fontFamily: appFonts.UrbanistBold,
      fontSize: 32,
      color: appColors.GreyScale[900],
      marginBottom: 16,
    },
    lookingForCarDescription: {
      fontFamily: appFonts.UrbanistRegular,
      fontSize: 18,
      color: appColors.GreyScale[700],
      marginBottom: 24,
      width: "80%",
    },
    button: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      borderWidth: 1,
      borderColor: appColors.GreyScale[200],
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    buttonActive: {
      backgroundColor: appColors.main.Primary,
    },
    text: {
      fontSize: 14,
      fontFamily: appFonts.UrbanistMedium,
      color: appColors.GreyScale[900],
    },
    textActive: {
      color: appColors.AdditionalColor.white,
    },
    image: {
      height: 24,
      width: 24,
    },
  });

  const videoRef = useRef<Video>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const offsetTop = event.nativeEvent.layoutMeasurement.height;
    const sectionY = event.nativeEvent.contentSize.height;

    // Adjust the visibility logic as per your layout
    if (scrollY + screenHeight >= sectionY - 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current?.playAsync();
    }
  }, [isVisible]);

  return (
    <CustomSafeArea>
      <Header type="home" />
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        {/* Top Section */}
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("@/assets/images/home/main.png")}
            style={{ height: height * 1.5, width: "100%" }}
            resizeMode="contain"
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              top: 150,
              left: 70,
              paddingVertical: 40,
              gap: 15,
              borderRadius: 30,
              width: "30%",
            }}
          >
            <Text
              style={{
                fontSize: 48,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.GreyScale[900],
                width: "100%",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Match with your perfect ride
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={[
                  styles.carFilterButton,
                  {
                    backgroundColor:
                      carFilter === "new" ? appColors.main.Primary : "#FFFFFF",
                    borderWidth: 1,
                    borderColor: appColors.main.Primary,
                    flex: 1,
                    marginRight: 8,
                  },
                ]}
                onPress={() => setCarFilter("new")}
              >
                <Text
                  style={[
                    styles.carFilterButtonText,
                    {
                      color:
                        carFilter === "new"
                          ? "#FFFFFF"
                          : appColors.main.Primary,
                    },
                  ]}
                >
                  New Car
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.carFilterButton,
                  {
                    backgroundColor:
                      carFilter === "used" ? appColors.main.Primary : "#FFFFFF",
                    borderWidth: 1,
                    borderColor: appColors.main.Primary,
                    flex: 1,
                    marginLeft: 8,
                  },
                ]}
                onPress={() => setCarFilter("used")}
              >
                <Text
                  style={[
                    styles.carFilterButtonText,
                    {
                      color:
                        carFilter === "used"
                          ? "#FFFFFF"
                          : appColors.main.Primary,
                    },
                  ]}
                >
                  Used Car
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setSelected("budget")}
              >
                <View
                  style={[
                    styles.outerCircle,
                    selected === "budget" && styles.outerCircleSelected,
                  ]}
                >
                  {selected === "budget" && <View style={styles.innerCircle} />}
                </View>
                <Text style={styles.label}>By Budget</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setSelected("brand")}
              >
                <View
                  style={[
                    styles.outerCircle,
                    selected === "brand" && styles.outerCircleSelected,
                  ]}
                >
                  {selected === "brand" && <View style={styles.innerCircle} />}
                </View>
                <Text style={styles.label}>By Brand</Text>
              </TouchableOpacity>
            </View>
            <DropDownComponent
              label="Select Budget"
              options={["5-10$", "10-15$", "15-20$", "20-25$"]}
              onSelect={(value) => console.log("Selected:", value)}
            />

            <DropDownComponent
              label="All Type Vehicle"
              options={["Model 1", "Model 2", "Model 3"]}
              onSelect={(value) => console.log("Selected:", value)}
            />
            <Button
              title="Search"
              variant="filled"
              fontWeight="UrbanistBold"
              color={appColors.AdditionalColor.white}
              style={{ backgroundColor: appColors.main.Primary }}
            />
          </View>
        </View>
        {/* Middle Section */}

        <View
          style={{
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            paddingHorizontal: 70,
            paddingTop: 100,
            gap: 34,
            position: "relative",
            top: -100,
            backgroundColor: "#fff",
          }}
        >
          <ExploreBrand title="Explore Our Pemium Brands" />
          <View
            style={{
              gap: 20,
              padding: 40,
              borderRadius: 20,
              marginBottom: 40,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
            }}
          >
            {/* <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Image
                  source={require("@/assets/images/brand/sedan.png")}
                  style={{ height: 24, width: 24 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                  }}
                >
                  sedan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Image
                  source={require("@/assets/images/brand/convertible.png")}
                  style={{ height: 24, width: 24 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Hatchnack
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Image
                  source={require("@/assets/images/brand/convertible.png")}
                  style={{ height: 24, width: 24 }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[900],
                  }}
                >
                  convertible
                </Text>
              </TouchableOpacity>
            </View> */}

            <View style={{ flexDirection: "row", gap: 30 }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  activeButton === "sedan" && styles.buttonActive,
                ]}
                onPress={() => setActiveButton("sedan")}
              >
                <Image
                  source={require("@/assets/images/brand/sedan.png")}
                  style={styles.image}
                  tintColor={
                    activeButton === "sedan"
                      ? "#fff"
                      : appColors.GreyScale[900]
                  }
                />
                <Text
                  style={[
                    styles.text,
                    activeButton === "sedan" && styles.textActive,
                  ]}
                >
                  Sedan
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  activeButton === "hatchback" && styles.buttonActive,
                ]}
                onPress={() => setActiveButton("hatchback")}
              >
                <Image
                  source={require("@/assets/images/brand/convertible.png")}
                  style={styles.image}
                  tintColor={
                    activeButton === "hatchback"
                      ? "#fff"
                      : appColors.GreyScale[900]
                  }
                />
                <Text
                  style={[
                    styles.text,
                    activeButton === "hatchback" && styles.textActive,
                  ]}
                >
                  Hatchnack
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  activeButton === "convertible" && styles.buttonActive,
                ]}
                onPress={() => setActiveButton("convertible")}
              >
                <Image
                  source={require("@/assets/images/brand/convertible.png")}
                  style={styles.image}
                  tintColor={
                    activeButton === "convertible"
                      ? "#fff"
                      : appColors.GreyScale[900]
                  }
                />
                <Text
                  style={[
                    styles.text,
                    activeButton === "convertible" && styles.textActive,
                  ]}
                >
                  Convertible
                </Text>
              </TouchableOpacity>
            </View>
            <ViewAll
              title="Car recommnendation"
              onPress={() => {
                router.push("/carlist" as Href);
              }}
              showAll={true}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {carData.map((car, index) => (
                <CarCard
                  key={index}
                  image={car.image}
                  brand={car.brand}
                  price={car.price}
                  fuelType={car.fuelType}
                  brandicon={car.brandicon}
                  engine={car.engine}
                  type="home"
                />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              gap: 20,
              padding: 40,
              borderRadius: 20,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              marginBottom: 40,
            }}
          >
            <ViewAll
              title="Car recommendation"
              onPress={() => {
                router.push("/carlist" as Href);
              }}
              showAll={true}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingTop: 16,
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {carData.map((car, index) => (
                <CarCard
                  key={index}
                  image={car.image}
                  brand={car.brand}
                  price={car.price}
                  fuelType={car.fuelType}
                  brandicon={car.brandicon}
                  engine={car.engine}
                  type="default"
                />
              ))}
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: appColors.GreyScale[900],
              height: height * 0.5,
              paddingLeft: 70,
              width: width,
              alignSelf: "center",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10, flex: 1 }}>
              <Text
                style={{
                  fontSize: 48,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.AdditionalColor.white,
                }}
              >
                Test drive in your area
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[400],
                  marginBottom: 50,
                }}
              >
                Test drive from your home or a WheelsBeast hub.
              </Text>
              <Button
                title="View cars"
                variant="outlined"
                borderColor={appColors.GreyScale[200]}
                width={"25%"}
                color={appColors.GreyScale[200]}
                onPress={() => router.push("/carlist" as Href)}
              />
            </View>

            <Image
              source={require("@/assets/images/brand/Car.png")}
              style={{
                height: height * 0.6,
                width: height * 0.6,
                resizeMode: "contain",
              }}
            />
          </View>
          <ExploreBrand title="Shop by car Type" />

          <View
            style={{
              padding: 40,
              borderRadius: 20,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              overflow: "hidden",
            }}
          >
            {/* Car Sales Section */}
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
              }}
            >
              {/* Left side with car image */}
              <View style={{ width: "50%", position: "relative" }}>
                <Video
                  ref={videoRef}
                  source={require("@/assets/videos/car.mp4")}
                  style={{ width: "100%", height: "100%" }}
                  isLooping
                  shouldPlay
                  useNativeControls={true}
                  resizeMode={ResizeMode.CONTAIN}
                />
              </View>

              {/* Right side with content */}
              <View
                style={{
                  width: "50%",
                  padding: 40,
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 32,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                    textAlign: "center",
                  }}
                >
                  Get A Fair Price For Your Car Sell To Us Today
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[500],
                    textAlign: "center",
                  }}
                >
                  We are committed to providing our customers with exceptional
                  service, competitive pricing, and a wide range of.
                </Text>

                <View style={{ marginVertical: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/brand/tik.png")}
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 12,
                        tintColor: appColors.main.Primary,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistMedium,
                        color: appColors.GreyScale[700],
                      }}
                    >
                      We are the UK's largest provider, with more patrols in
                      more places
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/brand/tik.png")}
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 12,
                        tintColor: appColors.main.Primary,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistMedium,
                        color: appColors.GreyScale[700],
                      }}
                    >
                      We are the UK's largest provider, with more patrols in
                      more places
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <Image
                      source={require("@/assets/images/brand/tik.png")}
                      style={{
                        width: 20,
                        height: 20,
                        marginRight: 12,
                        tintColor: appColors.main.Primary,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: appFonts.UrbanistMedium,
                        color: appColors.GreyScale[700],
                      }}
                    >
                      We are the UK's largest provider, with more patrols in
                      more places
                    </Text>
                  </View>
                </View>

                <Button
                  title="Get Started"
                  variant="filled"
                  fontWeight="UrbanistBold"
                  color={appColors.AdditionalColor.white}
                  style={{
                    backgroundColor: appColors.main.Primary,
                    marginTop: 10,
                  }}
                  width="40%"
                  onPress={() => router.push("/carlist" as Href)}
                />
              </View>
            </View>

            {/* Stats Counter */}

            {/* Car Search and Registration Section */}
          </View>
          <View
            style={{
              padding: 40,
              borderRadius: 20,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
              marginVertical: 40,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <View style={{ alignItems: "center", gap: 10 }}>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistBold,
                    fontSize: 32,
                    color: appColors.main.Primary,
                  }}
                >
                  836M
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    fontSize: 16,
                    color: appColors.GreyScale[700],
                  }}
                >
                  CARS FOR SALE
                </Text>
              </View>

              <View style={{ alignItems: "center", gap: 10 }}>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistBold,
                    fontSize: 32,
                    color: appColors.main.Primary,
                  }}
                >
                  738M
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    fontSize: 16,
                    color: appColors.GreyScale[700],
                  }}
                >
                  DEALER REVIEWS
                </Text>
              </View>

              <View style={{ alignItems: "center", gap: 10 }}>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistBold,
                    fontSize: 32,
                    color: appColors.main.Primary,
                  }}
                >
                  100M
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    fontSize: 16,
                    color: appColors.GreyScale[700],
                  }}
                >
                  VISITORS PER DAY
                </Text>
              </View>

              <View style={{ alignItems: "center", gap: 10 }}>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistBold,
                    fontSize: 32,
                    color: appColors.main.Primary,
                  }}
                >
                  238M
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    fontSize: 16,
                    color: appColors.GreyScale[700],
                  }}
                >
                  VERIFIED DEALERS
                </Text>
              </View>
            </View>
          </View>
          {/* add looking for a car */}
          <View
            style={{
              padding: 40,
              marginBottom: 40,
              borderRadius: 20,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              {/* Looking for a Car */}
              <View
                style={{
                  width: "48%",
                  backgroundColor: "#0F172A",
                  borderRadius: 16,
                  padding: 50,
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.AdditionalColor.white,
                  }}
                >
                  Are You Looking For a Car ?
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[400],
                    width: "80%",
                  }}
                >
                  We are committed to providing our customers with exceptional
                  service.
                </Text>
                <Button
                  title="Get Started"
                  variant="filled"
                  fontWeight="UrbanistBold"
                  color={appColors.AdditionalColor.white}
                  style={{
                    backgroundColor: "#5E5CED",
                    alignSelf: "flex-start",
                  }}
                  width="50%"
                  onPress={() => router.push("/carlist" as Href)}
                />
                <View style={{ position: "absolute", right: 10, bottom: 80 }}>
                  <Image
                    source={require("@/assets/images/brand/leftcar.png")}
                    style={{
                      width: 100,
                      height: 80,
                      opacity: 0.7,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>

              {/* Sell a Car */}
              <View
                style={{
                  width: "48%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 16,
                  padding: 50,
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Do You Want to Sell a Car ?
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[500],
                    width: "80%",
                  }}
                >
                  We are committed to providing our customers with exceptional
                  service.
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Enter Your Car Registration Number
                </Text>
                <View style={{}}>
                  <TextInput
                    placeholder="Enter Your Registration Car No.(DH-CM-0021)"
                    icon={require("@/assets/images/brand/Car.png")}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                  />
                  <Button
                    title="Sell My Car"
                    variant="filled"
                    fontWeight="UrbanistBold"
                    color={appColors.AdditionalColor.white}
                    width="40%"
                    style={{ backgroundColor: "#000000" }}
                    onPress={() => router.push("/sellcar" as Href)}
                  />
                </View>
                <View style={{ position: "absolute", right: 20, bottom: 40 }}>
                  <Image
                    source={require("@/assets/images/brand/right.png")}
                    style={{
                      width: 100,
                      height: 80,
                      opacity: 0.9,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Compare Cars Section */}
          <View
            style={{
              padding: 40,
              marginVertical: 40,
              gap: 36,
              borderRadius: 20,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.GreyScale[900],
              }}
            >
              Compare Cars
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {[0, 1, 2].map((index) => (
                <View
                  key={index}
                  style={{
                    width: "32%",
                    borderWidth: 1,
                    borderColor: appColors.GreyScale[200],
                    gap: 10,
                    padding: 30,
                    borderRadius: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => pickImage(index)}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 60,
                      alignSelf: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={
                        images[index]
                          ? { uri: images[index] }
                          : require("@/assets/images/brand/plus.png")
                      }
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                        alignSelf: "center",
                      }}
                      contentFit={images[index] ? "cover" : "contain"}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 16,
                      color: appColors.main.Primary,
                      fontFamily: appFonts.UrbanistBold,
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    Add Car
                  </Text>

                  <DropDownComponent
                    label="Select Brand"
                    options={["Audi", "BMW", "Ferrari", "Tesla"]}
                    onSelect={(value) => console.log("Selected Brand:", value)}
                  />

                  <View style={{ height: 20 }} />

                  <DropDownComponent
                    label="Select Model"
                    options={["Model 1", "Model 2", "Model 3"]}
                    onSelect={(value) => console.log("Selected Model:", value)}
                  />

                  <View style={{ height: 20 }} />

                  <DropDownComponent
                    label="Variants"
                    options={["Variant 1", "Variant 2", "Variant 3"]}
                    onSelect={(value) =>
                      console.log("Selected Variant:", value)
                    }
                  />
                </View>
              ))}
            </View>

            <View style={{ alignItems: "center" }}>
              <Button
                title="Compare Now"
                variant="filled"
                fontWeight="UrbanistBold"
                color={appColors.AdditionalColor.white}
                style={{ backgroundColor: appColors.main.Primary }}
                width="30%"
                onPress={() => router.push("/compare-car" as Href)}
              />
            </View>
          </View>

          {/* Why Choose Us Section */}
          <View
            style={{
              padding: 40,
              marginBottom: 40,
              borderRadius: 20,
              elevation: 3,
              shadowColor: appColors.GreyScale[900],
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: appFonts.UrbanistBold,
                color: appColors.GreyScale[900],
                marginBottom: 30,
              }}
            >
              Why Choose Us?
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* Special Financing Offers */}
              <View
                style={{
                  width: "23%",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  gap: 14,
                }}
              >
                <Image
                  source={require("@/assets/images/icons/finance.png")}
                  style={{ width: 40, height: 40, tintColor: "#6366F1" }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Special Financing Offers
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[600],
                  }}
                >
                  Our stress-free finance department that can find financial
                  solutions to save you money
                </Text>
              </View>

              {/* Trusted Car Dealership */}
              <View
                style={{
                  width: "23%",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  gap: 14,
                }}
              >
                <Image
                  source={require("@/assets/images/icons/Trust.png")}
                  style={{ width: 40, height: 40, tintColor: "#6366F1" }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Trusted Car Dealership
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[600],
                  }}
                >
                  Our stress-free finance department that can find financial
                  solutions to save you money
                </Text>
              </View>

              {/* Transparent Pricing */}
              <View
                style={{
                  width: "23%",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  gap: 14,
                }}
              >
                <Image
                  source={require("@/assets/images/icons/price.png")}
                  style={{ width: 40, height: 40, tintColor: "#6366F1" }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Transparent Pricing
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[600],
                  }}
                >
                  Our stress-free finance department that can find financial
                  solutions to save you money
                </Text>
              </View>

              {/* Expert Car Service */}
              <View
                style={{
                  width: "23%",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: appColors.GreyScale[200],
                  borderRadius: 10,
                  gap: 14,
                }}
              >
                <Image
                  source={require("@/assets/images/icons/service.png")}
                  style={{ width: 40, height: 40, tintColor: "#6366F1" }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                  }}
                >
                  Expert Car Service
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: appFonts.UrbanistMedium,
                    color: appColors.GreyScale[600],
                  }}
                >
                  Our stress-free finance department that can find financial
                  solutions to save you money
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              padding: 40,
              marginBottom: 40,
              borderWidth: 1,
              borderRadius: 24,
              borderColor: appColors.GreyScale[200],
            }}
          >
            <ViewAll
              title="Latest Blogs"
              onPress={() => {
                router.push("/carlist" as Href);
              }}
              showAll={true}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              {blogData.map((blog, index) => (
                <TouchableOpacity key={index} style={{ width: "31%" }}>
                  <BlogCard
                    image={blog.image}
                    category={blog.category}
                    title={blog.title}
                    date={blog.date}
                    author={blog.author}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <Footer />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default Home;
