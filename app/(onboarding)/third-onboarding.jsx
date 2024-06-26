import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';


export default function ThirdOnboarding() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/personincar.png')} // Replace with your image URL or local image path
        style={styles.image}
        resizeMode='cover'
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
          start={{ x: 0.4, y: 0.6 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View style={{flex:2, alignItems:'flex-end'}}>
            <Image source={require('@/assets/icons/filter.png')} style={{width:30, height:30, marginTop:40, left:'40%' }} tintColor='black' />
          </View>
          {/* Your content goes here */}
          <View style={{ flex: 1, gap: 6, alignItems: "center", top: -30}}>
<Text
  style={{
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 45,
    textAlign: "center",
    color: "#333333",
  }}
>
Start your journey with
minimum fuss
</Text>

<Text
  style={{
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#333333",
    width: 258,
  }}
>
Book a car near you instantly. Save time by
verifying your ID online through the latest
technology that our app employs.
</Text>

<View style={{flexDirection:'row', gap:4, margin:8}}> 
 
  <TouchableOpacity style={{width:14, height:14, borderRadius:8.5,backgroundColor:'#E0DEDE'}} onPress={()=>router.back()}></TouchableOpacity>
  <View style={{width:17, height:17, borderRadius:8.5,backgroundColor:'#00A1EA'}}></View>
</View>
<TouchableOpacity onPress={()=>router.push('/mainapp')}>
<Image source={require('@/assets/icons/next.png')} style={{width:86.27, height:86.27}}/>
</TouchableOpacity>

</View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});
