// CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Platform } from 'react-native';


function CustomDrawerContent(props) {
    
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingRight:30,
  shadowBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'gray',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
}}
  
      >
        <View style={{width:97}}>
            <Image source={require('@/assets/icons/logo.png')}   style={{width:'100%', height:57}}/>
        </View>
        <View>
            <Image source={require('@/assets/icons/close.png')} width={24} height={24}/>
        </View>
      </View>

      <View style={styles.shadowBox}>
      <DrawerItem
      
      label="Contact Information"
      icon={() => <Image source={require('@/assets/icons/contact-info.png')} width={24} height={24}/>}
      onPress={()=>{router.push('/contact-info')}}
    />
    <DrawerItem
    
    label="Assistance"
    icon={() => <Image source={require('@/assets/icons/support.png')} width={24} height={24}/>}
    onPress={()=>{router.push('')}}
  />

<DrawerItem
    
    label="Locations"
    icon={() => <Image source={require('@/assets/icons/location.png')} width={24} height={24}/>}
    onPress={()=>{router.push("/location")}}
  />

<DrawerItem
    
    label="Emergency"
    icon={() => <Image source={require('@/assets/icons/emergency.png')} width={24} height={24}/>}
    onPress={()=>{}}
  />

<DrawerItem
    
    label="Privacy Hire Policy"
    icon={() => <Image source={require('@/assets/icons/privacy.png')} width={24} height={24}/>}
    onPress={()=>{router.push('/damage-id')}}
  />

<DrawerItem
    
    label="Terms and Conditions"
    icon={() => <Image source={require('@/assets/icons/terms.png')} width={24} height={24}/>}
    onPress={()=>{router.push('/terms-and-condition')}}
  />
      </View>

      <View style={{marginTop:40,backgroundColor: 'white',
      // iOS shadow properties
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      // Android shadow property
      elevation: 5,}}>
      <DrawerItem
    
    label="Leave a Review"
    icon={() => <Image source={require('@/assets/icons/review.png')} width={24} height={24}/>}
    onPress={()=>{}}
  />
      </View>

      <View style={{marginTop:20,backgroundColor: 'white',
      // iOS shadow properties
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      // Android shadow property
      elevation: 5,}}>
      <DrawerItem
    
    label="Back to Home"
    icon={() => <Image source={require('@/assets/icons/homeIcon.png')} width={24} height={24}/>}
    onPress={()=>{router.push('/')}}
  />
      </View>
      
      <View style={{marginTop:10}}></View>
     
      {/* Add more items as needed */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    shadowBox: {
      
      backgroundColor: 'white',
      // iOS shadow properties
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      // Android shadow property
      elevation: 5,
    },
  });


export default CustomDrawerContent;
