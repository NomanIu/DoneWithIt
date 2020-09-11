import React from 'react'
import { View, Text } from 'react-native';
import AppText from '../components/AppText/AppText';

  function RoundedShapeUi(props){
    return(

        // rounded border

        // <View style={{
        //     flex:1,
        //     justifyContent: "center",
        //     alignItems: "center"
        // }}>

        // <View style={{
        //     backgroundColor: "dodgerblue",
        //     width :100,
        //     height: 100,
        //     borderWidth: 10,
        //     borderColor: "royalblue",
        //     borderRadius: 20
        // }}></View>
        // </View>


        // Shadow

       
        
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}>

        <View style={{
            backgroundColor: "dodgerblue",
            width :100,
            height: 100,
           shadowColor: "grey",
           shadowOffset: { width:0, height: 10},
           shadowOpacity: 1,
           shadowRadius:10,
           elevation:10

        }}></View>


<AppText

>
    
    I love React Native</AppText>

        </View>


    );
}

export default RoundedShapeUi