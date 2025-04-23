import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    useWindowDimensions,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
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
  
  const carData = [
    {
      image: require("@/assets/images/brand/Car.png"),
      brand: "Ferrari 488 Spider",
      price: "$120,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Ferrari.png"),
      type: "home",
      engine: "540hp",
    },
    {
      image: require("@/assets/images/brand/Car.png"),
      brand: "Audi A8 Quattro",
      price: "$115,000",
      fuelType: "Manual",
      brandicon: require("@/assets/images/carlist/Audi.png"),
      type: "home",
      engine: "450 hp",
    },
    {
      image: require("@/assets/images/brand/Car.png"),
      brand: "Ferrari 488 Spider",
      price: "$130,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Ferrari.png"),
      type: "home",
      engine: "320 hp",
    },
    {
      image: require("@/assets/images/brand/Car.png"),
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
      image: require("@/assets/images/brand/Car.png"),
      category: "Car News",
      title: "The Future of Electric Vehicles: Trends to Watch",
      date: "May 15, 2023",
      author: "John Doe",
    },
    {
      image: require("@/assets/images/brand/Car.png"),
      category: "Maintenance",
      title: "Essential Car Maintenance Tips for Every Driver",
      date: "June 2, 2023",
      author: "Jane Smith",
    },
    {
      image: require("@/assets/images/brand/Car.png"),
      category: "Reviews",
      title: "Top 10 Family SUVs of 2023: Comprehensive Guide",
      date: "July 10, 2023",
      author: "Mike Johnson",
    }
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
      description: "We partner only with verified dealers who meet our strict quality standards."
    },
    {
      icon: require("@/assets/images/icons/price.png"),
      title: "Competitive Pricing",
      description: "Get the best deals with our price comparison and negotiation tools."
    },
    {
      icon: require("@/assets/images/icons/service.png"),
      title: "Premium Service",
      description: "Enjoy personalized assistance throughout your car buying journey."
    },
    {
      icon: require("@/assets/images/icons/finance.png"),
      title: "Flexible Financing",
      description: "Access multiple financing options tailored to your needs and budget."
    }
  ];
  
  const carTypes = [
    { title: "Sedan", icon: require("@/assets/images/brand/Car.png") },
    { title: "SUV", icon: require("@/assets/images/brand/Car.png") },
    { title: "Hatchback", icon: require("@/assets/images/brand/Car.png") },
    { title: "Convertible", icon: require("@/assets/images/brand/Car.png") },
    { title: "Coupe", icon: require("@/assets/images/brand/Car.png") }
  ];
  
  const Home = () => {
    const { height, width } = useWindowDimensions();
    const [selected, setSelected] = useState<"budget" | "brand">("budget");
    const [carFilter, setCarFilter] = useState<"new" | "used">("new");
    
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
    });
  
    return (
      <CustomSafeArea>
        <Header type="home" />
        <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
          <View style={{flex:1}}>
            <ImageBackground
              source={require("@/assets/images/Signup/car.png")}
              style={{ height: 900, width: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                paddingHorizontal:30,
                paddingVertical:54,
                gap: 32,
                margin: 70,
                borderRadius: 30,
                width:'40%'
              }}
            >
              <Text
                style={{
                  fontSize: 48,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                  width:'70%',
                  alignSelf:'center',
                  textAlign:'center'
                }}
              >
                Match with your perfect ride
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent:"space-between" }}
              >
                <TouchableOpacity
                  style={[
                    styles.carFilterButton,
                    {
                      backgroundColor: carFilter === "new" ? appColors.main.Primary : "#FFFFFF",
                      borderWidth: 1,
                      borderColor: appColors.main.Primary,
                      flex: 1,
                      marginRight: 8,
                    }
                  ]}
                  onPress={() => setCarFilter("new")}
                >
                  <Text
                    style={[
                      styles.carFilterButtonText,
                      { color: carFilter === "new" ? "#FFFFFF" : appColors.main.Primary }
                    ]}
                  >
                    New Car
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[
                    styles.carFilterButton,
                    {
                      backgroundColor: carFilter === "used" ? appColors.main.Primary : "#FFFFFF",
                      borderWidth: 1,
                      borderColor: appColors.main.Primary,
                      flex: 1,
                      marginLeft: 8,
                    }
                  ]}
                  onPress={() => setCarFilter("used")}
                >
                  <Text
                    style={[
                      styles.carFilterButtonText,
                      { color: carFilter === "used" ? "#FFFFFF" : appColors.main.Primary }
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
                options={["0- 1 Lakh", "1- 2 Lakh", "2- 3 Lakh", "3-4 Lakh"]}
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
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: "white",
              bottom: 30,
            }}
          >
            <ExploreBrand title="Explore Our Brands" />
            <View style={{ padding: 40 }}>
              <ViewAll title="Shop by Car Type" onPress={() => {}} showAll={true} />
              
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 24 }}
              >
                {carTypes.map((type, index) => (
                  <TouchableOpacity key={index} style={styles.carTypeItem}>
                    <Image source={type.icon} style={styles.carTypeIcon} />
                    <Text style={styles.carTypeText}>{type.title}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 16, gap: 24 }}
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
                backgroundColor: appColors.GreyScale[900],
                height: height * 0.5,
                width: "100%",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 40,
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
            <View style={{ 
              flexDirection: "row", 
              justifyContent: "space-around", 
              paddingVertical: 40,
              paddingHorizontal: 80,
              backgroundColor: appColors.GreyScale[100]
            }}>
              {items.map((item, index) => (
                <View key={index} style={{ alignItems: "center" }}>
                  <Text style={{
                    fontFamily: appFonts.UrbanistBold,
                    fontSize: 38,
                    color: appColors.main.Primary
                  }}>
                    {item.title}
                  </Text>
                  <Text style={{
                    fontFamily: appFonts.UrbanistRegular,
                    fontSize: 16,
                    color: "#334155"
                  }}>
                    {item.subtitle}
                  </Text>
                </View>
              ))}
            </View>
  
            <View style={{ padding: 40 }}>
              <View style={styles.lookingForCarContainer}>
                <View style={styles.lookingForCarContent}>
                  <Text style={styles.lookingForCarTitle}>
                    Are you looking for a car?
                  </Text>
                  <Text style={styles.lookingForCarDescription}>
                    Let us help you find the perfect vehicle that suits your needs and budget.
                  </Text>
                  <Button
                    title="Find Cars"
                    variant="filled"
                    fontWeight="UrbanistBold"
                    color={appColors.AdditionalColor.white}
                    style={{ backgroundColor: appColors.main.Primary }}
                    width="40%"
                  />
                </View>
                <Image
                  source={require("@/assets/images/brand/Car.png")}
                  style={{ width: 300, height: 200 }}
                />
              </View>
  
              <View style={{ 
                backgroundColor: "#FFFFFF", 
                borderRadius: 24, 
                padding: 40,
                marginBottom: 40,
                borderWidth: 1,
                borderColor: appColors.GreyScale[200]
              }}>
                <Text style={{
                  fontFamily: appFonts.UrbanistBold,
                  fontSize: 32,
                  color: appColors.GreyScale[900],
                  marginBottom: 24,
                  textAlign: "center"
                }}>
                  Compare Cars
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }}>
                  <View style={{ flex: 1, marginRight: 16 }}>
                    <DropDownComponent
                      label="Select Brand"
                      options={["Audi", "BMW", "Ferrari", "Tesla"]}
                      onSelect={(value) => console.log("Selected Brand:", value)}
                    />
                  </View>
                  <View style={{ flex: 1, marginHorizontal: 16 }}>
                    <DropDownComponent
                      label="Select Model"
                      options={["Model 1", "Model 2", "Model 3"]}
                      onSelect={(value) => console.log("Selected Model:", value)}
                    />
                  </View>
                  <View style={{ flex: 1, marginLeft: 16 }}>
                    <DropDownComponent
                      label="Select Variant"
                      options={["Variant 1", "Variant 2", "Variant 3"]}
                      onSelect={(value) => console.log("Selected Variant:", value)}
                    />
                  </View>
                </View>
                <Button
                  title="Compare Now"
                  variant="filled"
                  fontWeight="UrbanistBold"
                  color={appColors.AdditionalColor.white}
                  style={{ 
                    backgroundColor: appColors.main.Primary,
                    alignSelf: "center"
                  }}
                  width="25%"
                />
              </View>
  
              <Text style={{
                fontFamily: appFonts.UrbanistBold,
                fontSize: 32,
                color: appColors.GreyScale[900],
                marginBottom: 32
              }}>
                Why Choose Us
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {whyChooseUsData.map((item, index) => (
                  <View key={index} style={{ width: "48%", marginBottom: 24 }}>
                    <View style={styles.whyChooseUsItem}>
                      <Image source={item.icon} style={styles.whyChooseUsIcon} />
                      <View style={{ flex: 1 }}>
                        <Text style={styles.whyChooseUsTitle}>{item.title}</Text>
                        <Text style={styles.whyChooseUsDescription}>{item.description}</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
  
            <View style={{ padding: 40, backgroundColor: appColors.GreyScale[100] }}>
              <ViewAll title="Latest Blogs" onPress={() => {}} showAll={true} />
              <View style={{ 
                flexDirection: "row", 
                justifyContent: "space-between",
                marginTop: 24
              }}>
                {blogData.map((blog, index) => (
                  <View key={index} style={{ width: "31%" }}>
                    <BlogCard
                      image={blog.image}
                      category={blog.category}
                      title={blog.title}
                      date={blog.date}
                      author={blog.author}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </CustomSafeArea>
    );
  };
  
  export default Home;
  