import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Terms = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Header */}
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
              Legal
            </Text>
          </View>

          <Image
            source={require("@/assets/icons/filter.png")}
            width={24}
            height={24}
            tintColor={"black"}
          />
        </View>
        {/* End Header */}

        <View
          style={{
            marginVertical: 30,
            backgroundColor: "white",
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            // Android shadow property
            elevation: 10,

            width: "90%",
            borderRadius: 10,
            paddingHorizontal: 5,
            marginHorizontal: "auto",
            paddingVertical: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "600",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Terms & Conditions
          </Text>

          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 18,
              textAlign: "left",
              width: "95%",
              marginLeft: 5,
            }}
          >
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            
          </Text>

          <Text  style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 18,
              textAlign: "left",
              width: "95%",
              marginLeft: 5,
              marginVertical:20,
            }}>
          Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip
          </Text>

          <Text  style={{
              fontFamily: "Poppins",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 18,
              textAlign: "left",
              width: "95%",
              marginLeft: 5,
              marginVertical:20,
            }}>
          Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip.
            Step 1 & 2 must be completed 24 hours before Starting your trip
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms;

const styles = StyleSheet.create({});
