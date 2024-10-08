import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../_components/CustomDrawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react'


const MainAppLayout = () => {
  return (
    <>
     <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawerContent />}>
      
      {/* <Drawer.Screen name='damage-id' /> */}
    </Drawer>
  </GestureHandlerRootView>
{/* <Slot/> */}
    </>
   
  )
}

export default MainAppLayout

const styles = StyleSheet.create({})