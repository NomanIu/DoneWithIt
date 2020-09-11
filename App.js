import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, Button,Alert,Platform, View} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import RoundedShape from './app/screens/RoundedShape';
import RoundedShapeUi from './app/screens/RoundedShapeUi';
import CustomButton from './app/screens/CustomButton'
import CustomCard from './app/screens/CustomCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen'
import ListItem from './app/screens/ListItem';
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker';

export default function App() {


console.log(useDeviceOrientation());

const handlepress = () => console.log("text clicked")

const {landscape} = useDeviceOrientation()

const categories = [
  {label: "Furniture", value:1},
  {label: "Clothing", value:2},
  {label: "Cameras", value:3}
]

const [category,setCategory] = useState();


return (

  <Screen>
 <AppPicker selectedItem={category} onSelectedItem={item => setCategory(item)} items={categories} placeholder="Category" icon="apps" ></AppPicker>
 <AppTextInput placeholder="email" icon="email"></AppTextInput>
 </Screen>

//  <Screen>
//    <Icon name="email" size={100} backgroundColor="#000" iconColor="white" ></Icon>
//  </Screen>

// {/* <ListItem title="My Title" subTitle="My Subtitile" ImageComponent={
//     <Icon name="email" size={50} backgroundColor="#000" iconColor="white" ></Icon>
// } ></ListItem> */}

  //<WelcomeScreen></WelcomeScreen>

  // <View style={{ backgroundColor: '#f8f4f4',padding:20,paddingTop:100}}>
  // <CustomCard title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} ></CustomCard>
 
  // </View>

   

 

 );

//Detecting orientation chages

  // return (
  //   <SafeAreaView style={styles.container}>
      
     
  //  <View style={{
  //    backgroundColor: 'dodgerblue',
  //    width:"100%",
  //    height: landscape ? '100%' : '30%'

  //  }}></View>
    
  //   </SafeAreaView>
  // );

s

// Flexbox

// return (
   
//   <SafeAreaView style={styles.container}>
     
//    <View style={{
//      flex: 1,
//     backgroundColor: "#fff",
//     flexDirection:"row",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
   
//     alignContent:"center"

//    }}>


 
 
 
      
    

// <View style={{
     
//     backgroundColor: "gold",
//     width:100,
//     height:100,
//     position:"absolute"

//    }}>



     
//    </View>

//    <View style={{
     
//     backgroundColor: "orange",
//     width:100,
//     height:100

//    }}>



     
//    </View>

//    <View style={{
     
//     backgroundColor: "tomato",
//     width:100,
//     height:100

//    }}>



     
//    </View>

   


//    </View>



//    </SafeAreaView>
   
    
   
//   );

 




}


const containerStyle={backgroundColor:"orange"}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0
  },

  buttonPostion:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    paddingLeft:20,
    paddingRight:20
    
  }
});
