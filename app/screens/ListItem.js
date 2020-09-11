import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'

function ListItem({title, subTitle, image, onPress, renderRightActions,IconComponent }) {
  return (
      <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor = {colors.light}   onPress={onPress} >
    <View style={styles.container}>
        {IconComponent}
      {image && <Image style={styles.image} source={image}></Image>}

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:20,
    backgroundColor:colors.white,
    
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    
   
  },

  subTitle: {
    fontSize: 10,
    fontWeight: "400",
    
  },

  detailsContainer:{
    flexDirection:"column",
      marginLeft:10,
      justifyContent:"center"
      
  }
});

export default ListItem;
