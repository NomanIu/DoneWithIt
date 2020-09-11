import React from 'react'
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

  function RoundedShape(props){
    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}>

        <MaterialCommunityIcons   name="email" size={60} ></MaterialCommunityIcons>

        </View>
    );
}

export default RoundedShape