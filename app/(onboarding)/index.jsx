import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FirstPageButtons from "../_components/FirstPageButtons";
import { router } from "expo-router";

const Home = () => {

  const onPress = (screen)=>{
    router.push(`/${screen}`);
  }
  return (
    <LinearGradient
      colors={["white", "#00A1EA"]}
      start={{ x: 0, y: 0.6}}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal: 20,
            gap: 4,
            marginTop: 10,
          }}
        >
          <View>
            <Image
              width={24}
              height={24}
              source={require("@/assets/icons/headphone.png")}
            />
          </View>
          <View>
            <Image
              width={24}
              height={24}
              source={require("@/assets/icons/filter.png")}
            />
          </View>
        </View>

        <View style={{ width: 278, height: 167, marginHorizontal: "auto" }}>
          <Image
            source={require("@/assets/icons/logo.png")}
            style={{ width: "100%" }}
          />
        </View>

        <View style={{ marginTop: 10, gap:10}}>
          <Text style={{fontFamily:'Poppins', fontWeight:'700', fontSize:35, lineHeight:45,textAlign:'center', width:309, margin:'auto', color:'#333333'}}>Welcome to EZ Drive Car Rental</Text>

          <Text style={{fontFamily:'Poppins', fontWeight:'400', fontSize:12, textAlign:'center', lineHeight:18, width:256, margin:'auto', color:'#333333'}}>The Contactless car rental specialists now 
launched in the UK.</Text>
        </View>
        
        <View style={{marginTop:50}}>
        <FirstPageButtons text='Get new Reservation' onPress={()=>onPress('create-reservation')}/>
        <FirstPageButtons text='Online Check-In' onPress={()=>onPress('third-onboarding')}/>
        <FirstPageButtons text='Damage ID' onPress={()=>onPress('damage-id')} />
        </View>
        
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
