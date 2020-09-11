import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import CustomButton from './CustomButton'

function WelcomeScreen(props){
return  (
    <ImageBackground 
    style={styles.background}
    source={{uri: "https://picsum.photos/200/300?grayscale"}} >


    <View style={styles.logoContainer} >
         <Image style={styles.logo} source={require("../assets/favicon.png")}></Image>
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>

    </View>



    <View style={styles.buttonPostion} >

<CustomButton title="Login" onPress={() => console.log("Tapped")}></CustomButton>
<CustomButton title="Register" color="secondary" onPress={() => console.log("Tapped")  }></CustomButton>
 </View>

    </ImageBackground>

);

}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems:"center"
    },
    buttonPostion:{
        justifyContent: "flex-end",
        flex:1,
        width:'100%',
        paddingLeft:20,
        paddingRight:20 
        
      },
      tagLine:{
          fontSize:25,
          fontWeight:"600",
          paddingVertical:20
      },
    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:'#fc5c56'
    },

    registerButton:{
        width:'100%', 
        height:70,
        backgroundColor:'#000'
    },

    logo:{
       
        width:100,
        height:100,
        
       
    },

    logoContainer:{
        top:70,
        position:"absolute",
        alignItems:"center"
    }


})

export default WelcomeScreen


