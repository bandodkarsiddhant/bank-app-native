import {
  Image,
  StyleSheet,
  Platform,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import Login from "../pages/Login";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    //     <ParallaxScrollView
    //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //       headerImage={
    //         <Image
    //           source={require('@/assets/images/partial-react-logo.png')}
    //           style={styles.reactLogo}
    //         />
    //       }>
    // <Text style={{color:'red'}}>SSS</Text>
    //     </ParallaxScrollView>

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
      contentContainerStyle={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Login />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
});
