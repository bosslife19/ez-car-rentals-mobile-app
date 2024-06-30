import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ContactInfo = () => {
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

            <TouchableOpacity style={{marginVertical:20, justifyContent:'center', alignItems:'center', width:'92%', height:57, backgroundColor:'#00A1EA', borderRadius:10, margin:'auto'}}>
                <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:'600', lineHeight:24, color:'white'}}>Start Trip</Text>
            </TouchableOpacity>
           
        </View>
    </SafeAreaView>
  )
}

export default ContactInfo

const styles = StyleSheet.create({})