import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axiosClient from '../../axios/axiosClient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useRouter } from 'expo-router'

const ContactInfo = () => {
  const router = useRouter()
  const handleCreateVehicle = async ()=>{
    try {
    //   const res = await axiosClient.post('/devices', {
    //     connectivityProvider:"2HIRE_BOARD"
    //  });
    
    //  const identifier = await AsyncStorage.getItem('identifier');

    //  if(!identifier){
    //   await AsyncStorage.setItem('identifier', res.data.devices[0].identifier);
    //  await AsyncStorage.setItem('qrCode', res.data.devices[0].qrCode);
    //  }
    //  Register the vehicle
    //  const qrCode = await AsyncStorage.getItem('qrCode');
    const qrCode = '2h0000005400'
    const vehicleData = {
      connectivityProvider:"2HIRE_BOARD",
      data:{
        qrCode,
        profileId:"0728edfb-3dfc-4e48-8981-77f2788a5e12"
      }
    }
    const token = await AsyncStorage.getItem('accessToken');

    const response = await axios.put(`${process.env.EXPO_PUBLIC_BASE_URL}/vehicle/register`, vehicleData, {
      headers:{
        accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${token}`
  }
    })

    if(response.status === 200){
      
      await AsyncStorage.setItem('vehicleId', response.data.vehicleId);

      router.push('/mainapp');

    }else{
      throw Error;
    }
      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView style={{marginTop:10}}>
       

        <View style={{paddingHorizontal:'5%'}}>
            <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:"500",}}>Contact information</Text>
        </View>
      

        <View style={{marginTop:'10%', gap:30, paddingHorizontal:'5%'}}>
            <View>
            <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:'500'}}>Email Address</Text>
            <TextInput style={{borderRadius:10, borderWidth:1, borderColor:'#C4C4C4',padding:10, marginTop:10}} placeholder='Kadir@gmail.com'/>
            </View>

            <View>
            <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:'500'}}>Registration Number #</Text>
            <TextInput style={{borderRadius:10, borderWidth:1, borderColor:'#C4C4C4',padding:10, marginTop:10}} placeholder='083454'/>
            </View>

            <TouchableOpacity onPress={handleCreateVehicle} style={{marginVertical:20, justifyContent:'center', alignItems:'center', width:'92%', height:57, backgroundColor:'#00A1EA', borderRadius:10, margin:'auto'}}>
                <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:'600', lineHeight:24, color:'white'}}>Start Trip</Text>
            </TouchableOpacity>
           
        </View>
    </SafeAreaView>
  )
}

export default ContactInfo

const styles = StyleSheet.create({})