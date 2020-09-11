import React from 'react'

import { View, Image, StyleSheet } from 'react-native'

import Colors from '../config/colors'
import AppText from '../components/AppText/AppText'
import colors from '../config/colors';

function CustomCard({title,subTitle,image}){
    return(
        <View style={styles.card} >
            <Image style={styles.image} source={image}></Image>
            <View style={styles.detailsContainer} >
            <AppText style={styles.title} >{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom:20,
        overflow:"hidden",
        
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        marginBottom: 7
    },
    detailsContainer:{
        padding:20
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    }

})

export default CustomCard