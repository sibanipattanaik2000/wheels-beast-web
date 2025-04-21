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
  const carData = [
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Ferrari 488 Spider",
      price: "$120,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Ferrari.png"),
      type: "home",
      engine: "540hp",
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Audi A8 Quattro",
      price: "$115,000",
      fuelType: "Manual",
      brandicon: require("@/assets/images/carlist/Audi.png"),
      type: "home",
      engine: "450 hp",
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Ferrari 488 Spider",
      price: "$130,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Ferrari.png"),
      type: "home",
      engine: "320 hp",
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Audi A8 Quattro",
      price: "$130,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Audi.png"),
      type: "home",
      engine: "320 hp",
    },
    {
      image: require("@/assets/images/Signup/car.png"),
      brand: "Audi A8 Quattro",
      price: "$130,000",
      fuelType: "Automatic",
      brandicon: require("@/assets/images/carlist/Audi.png"),
      type: "home",
      engine: "320 hp",
    },
  ];
  const items = [
    { title: "836 M", subtitle: "CARS FOR SALE" },
    { title: "738 M", subtitle: "DEALER REVIEWS" },
    { title: "100 M", subtitle: "VISITORS PER DAY" },
    { title: "238 M", subtitle: "VERIFIED DEALERS" },
  ];
  
  const Home = () => {
    const { height, width } = useWindowDimensions();
    const [selected, setSelected] = useState<"budget" | "brand">("budget");
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
    });
    return (
      <CustomSafeArea>
        <Header type="home" />
        <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
          <View>
            <ImageBackground
              source={require("@/assets/images/Signup/car.png")}
              style={{ height: 900, width: "100%" }}
            />
            <View
              style={{
                position: "absolute",
                backgroundColor: "#fff",
                paddingHorizontal: 30,
                paddingVertical: 54,
                gap: 32,
                margin: 70,
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 48,
                  fontFamily: appFonts.UrbanistBold,
                  color: appColors.GreyScale[900],
                }}
              >
                Match with your perfect ride
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Button
                  title="New Car"
                  variant="filled"
                  fontWeight="UrbanistBold"
                  color={appColors.AdditionalColor.white}
                  style={{ backgroundColor: appColors.main.Primary }}
                  width={"40%"}
                />
                <Button
                  title="Used Car"
                  variant="outlined"
                  fontWeight="UrbanistBold"
                  width={"40%"}
                />
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
                label="Brand"
                options={["BMW", "Audi", "Mercedes", "Toyota"]}
                onSelect={(value) => console.log("Selected:", value)}
              />
  
              <DropDownComponent
                label="Model"
                options={["Model 1", "Model 2", "Model 3"]}
                onSelect={(value) => console.log("Selected:", value)}
              />
              {/* <ScrollView contentContainerStyle={{ padding: 16, gap: 20 }}>
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
              </ScrollView> */}
            </View>
          </View>
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: height,
              backgroundColor: "white",
              bottom: 30,
            }}
          >
            <ExploreBrand title="Explore Our Brands" />
            {/* add car recommends here */}
  
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
              {/* Text + Button Section */}
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
  
              {/* Image Section */}
              <Image
                source={require("@/assets/images/brand/Car.png")}
                style={{
                  height: height * 0.6,
                  width: height * 0.6, // You can fine-tune this or use a fixed width
                  resizeMode: "contain",
                }}
              />
            </View>
            <ExploreBrand title="Shop by car Type" />
            <View
              style={{
                padding: 70,
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {/* left */}
              <View style={{ width: "40%",borderWidth:2 }}>{/* add video */}</View>
              {/* right */}
              <View style={{ width: "50%", gap: 24 }}>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistBold,
                    color: appColors.GreyScale[900],
                    fontSize: 48,
                    width: "90%",
                  }}
                  ellipsizeMode="tail"
                >
                  Get A Fair Price For Your Car Sell To Us Today
                </Text>
                <Text
                  style={{
                    fontFamily: appFonts.UrbanistMedium,
                    color: "#64748B",
                    fontSize: 24,
                    width: "80%",
                  }}
                  ellipsizeMode="tail"
                >
                  We are committed to providing our customers with exceptional
                  service, competitive pricing, and a wide range of.
                </Text>
                <View
                  style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
                >
                  <Image
                    source={require("@/assets/images/brand/check.png")}
                    style={{
                      height: 24,
                      width: 24,
                      tintColor: appColors.main.Primary,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: appFonts.UrbanistMedium,
                      color: "#64748B",
                      fontSize: 18,
                      width: "80%",
                    }}
                    ellipsizeMode="tail"
                  >
                    We are committed to providing our customers with exceptional
                    service, competitive pricing, and a wide range of.
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
                >
                  <Image
                    source={require("@/assets/images/brand/check.png")}
                    style={{
                      height: 24,
                      width: 24,
                      tintColor: appColors.main.Primary,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: appFonts.UrbanistMedium,
                      color: "#64748B",
                      fontSize: 18,
                      width: "80%",
                    }}
                    ellipsizeMode="tail"
                  >
                    We are committed to providing our customers with exceptional
                    service, competitive pricing, and a wide range of.
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
                >
                  <Image
                    source={require("@/assets/images/brand/check.png")}
                    style={{
                      height: 24,
                      width: 24,
                      tintColor: appColors.main.Primary,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: appFonts.UrbanistMedium,
                      color: "#64748B",
                      fontSize: 18,
                      width: "80%",
                    }}
                    ellipsizeMode="tail"
                  >
                    We are committed to providing our customers with exceptional
                    service, competitive pricing, and a wide range of.
                  </Text>
                </View>
                <Button
                  title="Get Started"
                  variant="filled"
                  fontWeight="UrbanistBold"
                  color={appColors.AdditionalColor.white}
                  style={{ backgroundColor: "blue" }}
                  width={'30%'}
                />
              </View>
  
            </View>
            <View style={{borderWidth:2,flexDirection:"row"}}>
              {items.map((item, index) => (
    <View key={index}>
      <Text style={{fontFamily:appFonts.UrbanistBold,fontSize:38,color:appColors.main.Primary}}>{item.title}</Text>
      <Text style={{fontFamily:appFonts.UrbanistRegular,fontSize:16,color:"#334155"}}>{item.subtitle}</Text>
    </View>
  ))}
  </View>
  
          </View>
        </ScrollView>
      </CustomSafeArea>
    );
  };
  
  export default Home;
  