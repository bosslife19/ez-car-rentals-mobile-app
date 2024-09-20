import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FirstPageButtons = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width:'80%',height:57, borderRadius:10,backgroundColor:'white', marginBottom:30, alignItems:'center', justifyContent:'center', marginHorizontal:'auto',}}>
      <Text style={{fontFamily:'Poppins', fontWeight:'600', fontSize:20, lineHeight:30, textAlign:'center', color:'#333333'}}>{text}</Text>
    </TouchableOpacity>
  
  )
}

export default FirstPageButtons

const styles = StyleSheet.create({})