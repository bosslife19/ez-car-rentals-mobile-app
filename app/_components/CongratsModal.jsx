import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CongratsModal = ({toggleModal}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          position: "absolute",
          backgroundColor: "#333333",
          top: "5%",
          width: "100%",
          height: "100%",
          opacity: 0.6,
        }}
      ></View>

      <View
        style={{
          width: "90%",
          height: "70%",
          backgroundColor: "white",
          opacity: 1,
          position: "absolute",
          top: "20%",
          left: "5%",
          borderRadius: 10,
          
        }}
      >
        <View style={{marginTop:'30%',width:'80%', marginHorizontal:'auto', gap:20, }}>
          <Text
            style={{
              fontFamily: "Poppins",
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 36,
              color: "#333333",
              textAlign:'center'
            }}
          >
            Congratulations
          </Text>
          <View style={{left:'30%'}}>
            <Image source={require('@/assets/icons/success-tick.png')}/>
          </View>
          


          <Text style={{fontSize:12, fontWeight:'500', lineHeight:18, textAlign:"center" }}>
          You have successfully opened the Doors. You are free to pick up the keys and start your journey after uploading images for damage check.
          </Text>
          

          <TouchableOpacity onPress={toggleModal} style={{backgroundColor:'#00A1EA',width:'100%', paddingHorizontal:10, paddingVertical:10, borderRadius:15, marginTop:6}}>
            <Text style={{color:'white', fontFamily:'Poppins', fontSize:16, fontWeight:'500',textAlign:'center'}}>Proceed to damage check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CongratsModal;
