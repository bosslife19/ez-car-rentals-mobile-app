import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Location = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            paddingTop: 30,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              source={require("@/assets/icons/chevron-left.png")}
              width={12.84}
              height={8.04}
            />

            <Text
              style={{ fontFamily: "Poppins", fontSize: 16, fontWeight: "600" }}
            >
              Our Addresses
            </Text>
          </View>

          <Image
            source={require("@/assets/icons/filter.png")}
            width={24}
            height={24}
            tintColor={"black"}
          />
        </View>

        <View style={{ marginTop: "10%", paddingHorizontal: "6%" }}>
          <TextInput
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#C4C4C4",
              padding: 10,
              marginTop: 10,
              paddingLeft: 50,
            }}
            placeholder="Security Reports"
          />
          <Image
            source={require("@/assets/icons/location.png")}
            style={{ position: "absolute", top: "7%", left: "10%" }}
          />

          <View
            style={{
              marginTop: "10%",
              borderBottomWidth: 0.5,
              borderBottomColor: "gray",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "12%",
              alignItems:'center'
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image source={require("@/assets/icons/second-location.png")} />
              <Text>No 17, Bale Street, Croydon, London</Text>
            </View>

            <Image source={require("@/assets/icons/delete.png")} />
          </View>

          <View
            style={{
              marginTop: "10%",
              borderBottomWidth: 0.5,
              borderBottomColor: "gray",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "12%",
              alignItems:'center'
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image source={require("@/assets/icons/second-location.png")} />
              <Text>No 17, Bale Street, Croydon, London</Text>
            </View>

            <Image source={require("@/assets/icons/delete.png")} />
          </View>

          <View
            style={{
              marginTop: "10%",
              borderBottomWidth: 0.5,
              borderBottomColor: "gray",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "12%",
              alignItems:'center'
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image source={require("@/assets/icons/second-location.png")} />
              <Text>No 17, Bale Street, Croydon, London</Text>
            </View>

            <Image source={require("@/assets/icons/delete.png")} />
          </View>
        </View>

        <View style={{width:'50%', marginHorizontal:'auto', marginTop:20}}>
            <Image  source={require('@/assets/images/address-cars.png')} style={{width:'100%', objectFit:'contain'}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({});
