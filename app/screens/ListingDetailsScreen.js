import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import AppText from '../components/AppText/AppText'
import colors from '../config/colors';
import ListItem from '../screens/ListItem';

function ListingDetailsScreen(props){
return(
    
    <View>
        <Image style={styles.image} source={require('../assets/jacket.jpg')} ></Image>
       <View style={styles.detailsContainer}>
       <AppText style={styles.title}>Red jacket for sale</AppText>
       <AppText style={styles.subtitle} >$100</AppText>


    <View style={styles.userContainer}>
    <ListItem



    image={require("../assets/mosh.jpg")}
    title="Mosh hamedano"
    subTitle="5 Listings"
    ></ListItem>
    </View>

       </View>



    </View>
);
}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    detailsContainer:{
        padding:20,
        
    },
    title:{
        color:colors.secondary,
        fontSize:20,
        fontWeight:"500"
    },
    subtitle:{
        fontSize:20,
        fontWeight:"bold",
        marginVertical:10
    },
    userContainer:{
        marginVertical:20
    }
})

export default ListingDetailsScreen