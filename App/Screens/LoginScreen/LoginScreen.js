import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {

    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async() =>{
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
  }

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <Image
        source={require("./../../../assets/images/logo2.jpeg")}
        style={styles.logoImage}
      />
      <Image
        source={require("./../../../assets/images/eme.jpeg")}
        style={{
          width: "100%",
          height: 200,
          marginTop: 20,
          objectFit: "cover",
        }}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>Your Ultimate Ev charging finder app</Text>
        <Text style={styles.description}>Find EV charging station near you, plan trip</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit',fontSize:17}}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoImage: {
    height: 80,
    objectFit: "contain",
  },
  heading: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    fontSize: 17,
    fontFamily: "outfit",
    marginTop: 15,
    textAlign: "center",
    color:Colors.BLACK
  },
  button:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    display:'flex',
    borderRadius:99,
   marginTop:70
  }
});
