import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../_components/CustomDrawer';
import { Drawer } from 'expo-router/drawer';
import React from 'react'
import { Slot, router } from 'expo-router'

const OnboardingLayout = () => {
  return (
    <>
     <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawerContent />}>
      

    </Drawer>
  </GestureHandlerRootView>
{/* <Slot/> */}
    </>
   
  )
}

export default OnboardingLayout

const styles = StyleSheet.create({})