
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios'
import { useEffect } from 'react';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  });

  const clientSecret = process.env.EXPO_PUBLIC_CLIENT_SECRET;
  const clientId = process.env.EXPO_PUBLIC_CLIENT_ID

  const getAccessToken = async()=>{
    // temporary to remove from daily and in prod
    const accessToken = await AsyncStorage.getItem('accessToken');
    if(accessToken){
      return
    }
    // end of temporary
    try {
      const res = await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/auth`, { clientId,clientSecret});
     
      if(res.status === 200){
        // AsyncStorage.setItem('authToken', res.data.token)

        

        const accessToken = await AsyncStorage.getItem('accessToken');

        if(accessToken){
          await AsyncStorage.removeItem('accessToken');
        }
        await AsyncStorage.setItem('accessToken', res.data.access_token)

        
      }
    } catch (error) {
      console.log(error);
    }
   
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      getAccessToken()

      
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // useEffect(()=>{
  //   
  // }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      
      <Stack screenOptions={{headerShown:false}}>
         <Stack.Screen name="(onboarding)" options={{ headerShown: false}} /> 
         {/* <Stack.Screen name="(onboarding)/create-reservation" options={{ headerShown: false}} /> 
         <Stack.Screen name="(onboarding)/damage-id" options={{ headerShown: false}} /> 
         <Stack.Screen name="(onboarding)" options={{ headerShown: false}} />  */}
         
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
