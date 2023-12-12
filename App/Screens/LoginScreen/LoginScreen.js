import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

const LoginScreen = () => {
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
        source={require("./../../../assets/images/car2.png")}
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
        <TouchableOpacity style={styles.button}>
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
