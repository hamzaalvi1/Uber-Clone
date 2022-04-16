import React,{useEffect} from 'react'
import { StyleSheet, Text, View,useWindowDimensions,Image,TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {MaterialIcons,FontAwesome} from "react-native-vector-icons"




const Credientials = () => {
    const window = useWindowDimensions()
    let [fontsLoaded] = useFonts({
        'poppinsBold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'poppinsLight': require('../../assets/fonts/Poppins-Light.ttf'),
        'poppinsMedium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'poppinsRegular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'poppinsSemibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'poppinsThin': require('../../assets/fonts/Poppins-Thin.ttf'),



      });
     
 if(!fontsLoaded){
   return<AppLoading/> 
 }
  return (
    <View style ={[styles.mainWrapper,{width:window.width,height:window.height}]}>
        <View style = {styles.backgroundLayer}>
            <View style={{flex:1,justifyContent:"center",}}>
                <Text style={{color:"#fff",fontSize:42,fontFamily:"poppinsRegular",textAlign:"center"}}>Let's Sign In</Text>
                <Text style={{color:"#fff",fontSize:18,fontFamily:"poppinsRegular",textAlign:"center"}}>For Booking Cab</Text>


            </View>
        </View>
        <View style={{marginBottom: 20}}>
        <TouchableOpacity style={styles.primaryBtn}>
        
             <Text style={{color:"#514BC3",fontSize:14,fontFamily:"poppinsMedium",textAlign:"center"}}><MaterialIcons style={styles.icons}  name="email"/> Login With Email</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.primaryBtn}>
             <Text style={{color:"#514BC3",fontSize:14,fontFamily:"poppinsMedium",textAlign:"center"}}><FontAwesome style={styles.icons}  name="facebook-f"/> Login With Facebook</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.primaryBtn}>
             <Text style={{color:"#514BC3",fontSize:14,fontFamily:"poppinsMedium",textAlign:"center"}}><FontAwesome style={styles.icons}  name="phone"/> Login With Phone Number</Text>
         </TouchableOpacity>
        
         </View>
        
    </View>
  )


  
}

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor:"#0D1724",
      justifyContent:"space-between",
      alignItems:"center"
      },
      backgroundLayer:{
          backgroundColor:"#514BC3",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          flex:0.8,
          justifyContent:"space-evenly",
          alignItems:'center',
          width:'100%'

      },
    
      primaryBtn:{
        width:315,
        height:50,
        borderColor:"#514BC3",
        display:'flex',
        justifyContent:"center",
        borderRadius:10,
        marginBottom: 10,
        borderWidth: 1

      },
      icons:{
          fontSize:14,
          marginTop:50,
          marginRight:10,
      }
  });

  
export default Credientials
