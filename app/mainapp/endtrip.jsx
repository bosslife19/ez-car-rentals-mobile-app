import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const EndTrip = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView style={{paddingHorizontal:15}}>

            <View style={{marginTop:20}}>
            <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              alignItems:'center'
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("@/assets/icons/backarrow.png")}
                width={19}
                height={19}
                tintColor='black'
              />
             
            </TouchableOpacity>

            <View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 24,
                textAlign: "center",
              }}
            >
            End Trip
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

          <View
            style={{
              marginVertical: 30,
              backgroundColor:'white',
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              // Android shadow property
              elevation: 10,
              height:65,
              width:'100%',
              borderRadius:10 ,
              paddingHorizontal:5,
             
              justifyContent:'center'
            }}
          >
          
            <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:400, lineHeight:18, textAlign:'left', width:'95%', marginLeft:5}}>Click on the end trip button to finally end your use of
the car.</Text>
          </View>
          

          <View style={{flexDirection:'row', gap:30, marginBottom:15}}>
            <View style={{flex:1}}>
                <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:"400", lineHeight:18,top:15 }}>First Image</Text>
                <View style={{marginTop:10, width:'90%'}}>
                    <Image source={require('@/assets/images/yellowcar.png')}  style={{width:'100%', height:128, top:10}}/>
                    <Image source={require('@/assets/icons/green-tick.png')} style={{position:'absolute', right:-7, top:2}}/>
                    <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:300,lineHeight:18,color:'white', position:'absolute', top:15, left:5}}>Timestamp</Text>
                    <Image source={require('@/assets/icons/camera.png')} style={{position:'absolute', bottom:-17, right:-3}}/>
                   

                </View>
            </View>
            <View style={{flex:1}}>
            <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:"400", lineHeight:18,top:15 }}>Back Image</Text>
            <View style={{marginTop:10, width:'90%', borderRadius:19}}>
                    <Image source={require('@/assets/images/ashcar.png')} style={{width:'100%',height:128, top:10, borderRadius:10}}/>
                    <Image source={require('@/assets/icons/green-tick.png')} style={{position:'absolute', right:-7, top:2}}/>
                    <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:300,lineHeight:18,color:'white', position:'absolute', top:15, left:5}}>Timestamp</Text>
                    <Image source={require('@/assets/icons/camera.png')} style={{position:'absolute', bottom:-17, right:-3}}/>
                   

                </View>
            </View>
          </View>

          <View style={{flexDirection:'row', gap:30, marginBottom:15, }}>
            <View style={{flex:1}}>
                <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:"400", lineHeight:18, top:15 }}>Side Image</Text>
                <View style={{marginTop:10, width:'90%'}}>
                    <Image source={require('@/assets/images/whitevan.png')} style={{width:'100%', height:128, top:10,borderRadius:10}}/>
                    <Image source={require('@/assets/icons/green-tick.png')} style={{position:'absolute', right:-10, top:4}}/>
                    <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:300,lineHeight:18,color:'white', position:'absolute', top:15, left:5}}>Timestamp</Text>
                    <Image source={require('@/assets/icons/camera.png')} style={{position:'absolute', bottom:-16, right:-3}}/>
                   

                </View>
            </View>
            <View style={{flex:1}}>
            <Text style={{fontFamily:'Poppins', fontSize:12, fontWeight:"400", lineHeight:18,top:15 }}>Starring</Text>
            <View style={{marginTop:10, width:'90%'}}>
                   
                   <View style={{borderWidth:1, height:128, borderRadius:10, top:10, borderColor:'#00A1EA',}}>
                        <View style={{margin:'auto'}}>
                            <Image source={require('@/assets/images/plus.png')}/>
                           
                        </View>
                        <Text style={{textAlign:'center', position:'absolute', top:'65%', left:'25%', fontSize:12,fontWeight:'400'}}>Add Picture</Text>
                   </View>

                </View>
            </View>
          </View>

          <TouchableOpacity style={{marginVertical:20, justifyContent:'center', alignItems:'center', width:'92%', height:57, backgroundColor:'#00A1EA', borderRadius:10, margin:'auto'}}>
                <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:'600', lineHeight:24, color:'white'}}>End Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginVertical:18, justifyContent:'center', alignItems:'center', width:'92%',margin:'auto', height:57, backgroundColor:'#b3cee5', borderRadius:10}}>
                <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:'600', lineHeight:24, color:'#000'}}>Open Door</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginVertical:18, justifyContent:'center', alignItems:'center', width:'92%',margin:'auto', height:57, backgroundColor:'#b3cee5', borderRadius:10}} onPress={()=>router.push('/mainapp/endtrip')}>
                <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:'600', lineHeight:24, color:'#000'}}>Close Door</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginVertical:18, justifyContent:'center', alignItems:'center', width:'92%',margin:'auto', height:57, backgroundColor:'#b3cee5', borderRadius:10}} onPress={()=>router.push('/mainapp/endtrip')}>
                <Text style={{fontFamily:'Poppins', fontSize:16, fontWeight:'600', lineHeight:24, color:'#000'}}>Open Trunk</Text>
            </TouchableOpacity>

            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default EndTrip

const styles = StyleSheet.create({})