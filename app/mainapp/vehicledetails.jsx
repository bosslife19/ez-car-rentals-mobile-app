import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CongratsModal from "../_components/CongratsModal";
import axiosClient from "../../axios/axiosClient";

const VehicleDetails = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [trunkModal, setTrunkModal] = React.useState(false);

  
const [trunkOpen, setTrunkOpen] = useState(false)
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const handleOpenDoor = async () => {
    const id = await AsyncStorage.getItem("vehicleId");
    const token = await AsyncStorage.getItem("accessToken");
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BASE_URL}/vehicle/${id}/command/generic/start`,
        {},
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setOpen(true);
        setOpenModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleCloseDoor = async () => {
    const id = await AsyncStorage.getItem("vehicleId");
    const token = await AsyncStorage.getItem("accessToken");
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BASE_URL}/vehicle/${id}/command/generic/stop`,
        {},
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setOpen(false);
        setOpenModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenTrunk = async()=>{
    const id = await AsyncStorage.getItem("vehicleId");
    const token = await AsyncStorage.getItem("accessToken");
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BASE_URL}/vehicle/${id}/command/generic/start`,
        {},
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setOpen(true);
        setOpenModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 220,
            paddingTop: 30,
            paddingHorizontal: 20,
          }}
          source={require("@/assets/icons/backg.png")}
          height={220}
        >
          <Image
            source={require("@/assets/icons/backarrow.png")}
            width={12.84}
            height={8.04}
          />
          <Image
            source={require("@/assets/icons/filter.png")}
            width={24}
            height={24}
          />
        </ImageBackground>
        <View style={{ marginTop: 10, height: 300 }}>
          <View style={{ position: "absolute", top: -210, right: -40 }}>
            <Image
              source={require("@/assets/images/yellowcar-removed.png")}
              height={316}
              resizeMode="contain"
              style={{ margin: "auto" }}
            />
          </View>
        </View>

        <View style={{ top: -190, gap: 20 }}>
          <View
            style={{
              width: "90%",
              margin: "auto",
              height: 240,
              backgroundColor: "#161616",
              borderRadius: 10,
              gap: 20,
              paddingVertical: 15,
              paddingLeft: 8,
            }}
          >
            <View>
              <Text style={styles.text}>#Reservation</Text>
              <Text style={styles.text}>34</Text>

              <Text style={styles.text}>Return</Text>
              <Text style={styles.text}>21/09/2024 12:00PM</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Image
                  source={require("@/assets/icons/location.png")}
                  width={16}
                  height={16}
                  tintColor="#00A1EA"
                />
                <Text style={styles.text}>No 55, Edinburg, Wales</Text>
              </View>
            </View>

            <View>
              <Text style={styles.text}>#Pickup</Text>
              <Text style={styles.text}>34</Text>

              <Text style={styles.text}>Return</Text>
              <Text style={styles.text}>21/09/2024 12:00PM</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Image
                  source={require("@/assets/icons/location.png")}
                  width={16}
                  height={16}
                  tintColor="#00A1EA"
                />
                <Text style={styles.text}>No 55, Edinburg, Wales</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "90%",
              margin: "auto",
              height: 240,
              backgroundColor: "#161616",
              borderRadius: 10,
              gap: 20,
              paddingVertical: 15,
              paddingLeft: 8,
            }}
          >
            <View>
              <Text style={styles.text}>#Reservation</Text>
              <Text style={styles.text}>34</Text>

              <Text style={styles.text}>Return</Text>
              <Text style={styles.text}>21/09/2024 12:00PM</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Image
                  source={require("@/assets/icons/location.png")}
                  width={16}
                  height={16}
                  tintColor="#00A1EA"
                />
                <Text style={styles.text}>No 55, Edinburg, Wales</Text>
              </View>
            </View>

            <View>
              <Text style={styles.text}>#Pickup</Text>
              <Text style={styles.text}>34</Text>

              <Text style={styles.text}>Return</Text>
              <Text style={styles.text}>21/09/2024 12:00PM</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Image
                  source={require("@/assets/icons/location.png")}
                  width={16}
                  height={16}
                  tintColor="#00A1EA"
                />
                <Text style={styles.text}>No 55, Edinburg, Wales</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
          onPress={handleOpenDoor}
            style={{
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              width: "92%",
              height: 57,
              backgroundColor: "#00A1EA",
              borderRadius: 10,
              margin: "auto",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 24,
                color: "white",
              }}
            >
              Open Door
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={handleCloseDoor}
            style={{
              marginVertical: 18,
              justifyContent: "center",
              alignItems: "center",
              width: "92%",
              margin: "auto",
              height: 57,
              backgroundColor: "#b3cee5",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 24,
                color: "#000",
              }}
            >
              Close Door
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 18,
              justifyContent: "center",
              alignItems: "center",
              width: "92%",
              margin: "auto",
              height: 57,
              backgroundColor: "#b3cee5",
              borderRadius: 10,
            }}
            onPress={handleOpenTrunk}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 24,
                color: "#000",
              }}
            >
              Open Trunk
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {openModal && (
        <CongratsModal
          toggleModal={toggleModal}
          text={
            open
              ? "You have successfully opened the Doors. You are free to pick up the keys and start your journey after uploading images for damage check."
              : "You may begin the process of ending trip by checking through the damage ID"
          }
        />
      )}
      {trunkModal && (
        <CongratsModal
          toggleModal={toggleModal}
          text={
            trunkOpen
              ? "You have successfully opened the Trunk. You start your journey after uploading images for damage check."
              : "You have successfully closed the Trunk and may begin the process of ending trip by checking through the damage ID"
          }
        />
      )}
    </SafeAreaView>
  );
};

export default VehicleDetails;
const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    color: "white",
  },
});
