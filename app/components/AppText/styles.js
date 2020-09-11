import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    text:{
        fontSize: 28,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
       
    }
})

export default styles