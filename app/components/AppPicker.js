import React, {useState} from 'react'

import { View, StyleSheet, Platform, Modal, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TextInput, TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler';
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from '../components/AppText/AppText'
import Screen from '../components/Screen'
import PickerItem from './PickerItem';



function AppPicker({icon,items,placeholder,selectedItem,onSelectedItem}){

        const [modalVisible,  setModalVisible] = useState(false);

    return(

       <>


        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>

            {icon &&<MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />  }
           
            <AppText style={styles.textStyle}>{selectedItem ? selectedItem.label :placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium}  />  

        </View> 

        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={()=>setModalVisible(false)} ></Button>
        <FlatList
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item})=> <PickerItem
        label={item.label}
        onPress={()=>{
            setModalVisible(false)
            onSelectedItem(item)  
        }
        
        
        
        }
        
        /> }
        ></FlatList>
        </Modal>
        <Screen>
       
        </Screen>

        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding:15,
        marginVertical: 10,
    },

    textInput:{
        color:colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },

    icon:{
        marginRight:10,
        },

    textStyle:{
        
            flex:1,
            width: 300
            
            
    }
})

export default AppPicker