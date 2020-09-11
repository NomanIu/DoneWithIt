import React from 'react'
import {StyleSheet} from 'react-native'
import ListingDetailsScreen from './ListingDetailsScreen';
import { FlatList} from 'react-native-gesture-handler';
import CustomCard from './CustomCard'
import Screen from '../components/Screen'
import colors from '../config/colors'


const  listings = [
    {
        id:1,
        title:'Red jacket for sale',
        price:'100',
        image:require('../assets/jacket.jpg')
    },
    {
        id:2,
        title:'Couch in great condition',
        price:'1000',
        image:require('../assets/jacket.jpg')
    },

    {
        id:3,
        title:'Couch in great condition',
        price:'1000',
        image:require('../assets/jacket.jpg')
    }
];

function ListingsScreen(props){
    return(

        <Screen style={styles.screen}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={listings}
            keyExtractor={listings => listings.id.toString}
            renderItem={({item})=>
            <CustomCard
            
            title={item.title}
            subTitle={"$ "+item.price}
            image={item.image}

            
            />
        
        }
            />
        </Screen>

    );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})

export default ListingsScreen