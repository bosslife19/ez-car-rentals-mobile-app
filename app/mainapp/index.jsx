import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CongratsModal from "../_components/CongratsModal";
import axiosClient from "../../axios/axiosClient";

const Welcome = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [trunkModal, setTrunkModal] = React.useState(false);

  
const [trunkOpen, setTrunkOpen] = useState(false)
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleEndTrip = async ()=>{
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

        setTimeout(()=>{
          router.push('/mainapp/vehicledetails');
        },5000)
      }
    } catch (error) {
      console.error(error)
    }
  }

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
    const identifier = await AsyncStorage.getItem('identifier');

    try {
      const res = await axiosClient.put(`/devices/${identifier}/state/trunk`,{
        closed: false
      });

      if(res.status ===200){
        console.log(res.data);
        setTrunkOpen(true);
        setTrunkModal(true);
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
            }}
          >
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image
                source={require("@/assets/icons/waving.png")}
                width={19}
                height={19}
              />
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                }}
              >
                Hi
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 24,
                  color: "#00A1EA",
                }}
              >
                Johnson
              </Text>
            </View>
            <View>
              <Image
                source={require("@/assets/icons/filter.png")}
                width={24}
                height={24}
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 24,
                textAlign: "center",
              }}
            >
              Start/End Trip
            </Text>
          </View>

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
              height: 65,
              width: "100%",
              borderRadius: 10,
              paddingHorizontal: 5,

              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 18,
                textAlign: "left",
                width: "95%",
                marginLeft: 5,
              }}
            >
              Click on the button below to be able to open locker and gain
              access to vehicle key
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 21,
              }}
            >
              Reservation(#34)
            </Text>
            <View
              style={{
                backgroundColor: "#E8E8E8",
                height: 161,
                marginTop: 10,
                flexDirection: "row",
                gap: 10,
                borderRadius: 10,
                paddingTop: 5,
              }}
            >
              <View style={{ marginVertical: 10, marginLeft: "5%", flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Image
                    source={require("@/assets/icons/calendar.png")}
                    width={16}
                    height={16}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                      color: "#333333CC",
                    }}
                  >
                    09/08/24 09:00 AM
                  </Text>
                </View>

                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 12,
                    fontWeight: "600",
                    lineHeight: 18,
                    textAlign: "left",
                    marginVertical: 10,
                  }}
                >
                  XPY Lamborghini 325
                </Text>

                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Image
                    source={require("@/assets/icons/location2.png")}
                    width={16}
                    height={16}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                      color: "#333333CC",
                    }}
                  >
                    Croydon Office
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "500", lineHeight: 18 }}
                  >
                    View Details
                  </Text>
                  <Image source={require("@/assets/icons/next2.png")} />
                </View>
              </View>
              <View style={{ flex: 1, marginRight: "5%" }}>
                <Image
                  source={require("@/assets/images/yellowcar.png")}
                  width={162}
                  height={149}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleOpenDoor}
            style={{
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 57,
              backgroundColor: "#00A1EA",
              borderRadius: 10,
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
              width: "100%",
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
          onPress={handleOpenTrunk}
            style={{
              marginVertical: 18,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
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
              Open Trunk
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginVertical: 18,
              width: "100%",
              height: 57,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#161616",
              borderRadius: 10,
            }}
            onPress={() => handleEndTrip()}
          >
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 18,
                color: "white",
                textAlign: "left",
                width: 291,
              }}
            >
              Click here if you are ready to end trip and return vehicle rented.
            </Text>
          </TouchableOpacity>

          <StatusBar />
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

export default Welcome;

const styles = StyleSheet.create({});
