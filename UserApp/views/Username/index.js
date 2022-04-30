import React,{useEffect,useRef,useState} from 'react'
import { StyleSheet, Text, View,useWindowDimensions,Image,TouchableOpacity,ScrollVie,TextInput  } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { SafeAreaView } from 'react-native-safe-area-context';;



const Username = () => {
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
      <SafeAreaView style ={[styles.mainWrapper,{width:window.width,height:window.height}]}>
    <View>
     <Text style={{fontSize:28,color:"#fff",fontFamily:"poppinsRegular",paddingBottom:5}}>
         Great!
     </Text>
      <Text style={{fontSize:18,color:"#fff",fontFamily:"poppinsRegular",paddingBottom:5}}>
    And last, what is your name?
     </Text> 
     <TextInput
        style={styles.input}
      /> 
    </View>  
    <TouchableOpacity style={styles.primaryBtn}>
       
             <Text style={{color:"#fff",fontSize:14,fontFamily:"poppinsMedium",textAlign:"center"}}>Submit</Text>
         </TouchableOpacity>
        
    </SafeAreaView>
    
  )


  
}

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor:"#0D1724",
      justifyContent:"space-between",
      paddingHorizontal: 20,
      paddingVertical: 50
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
        borderWidth: 1,
        backgroundColor: "#514BC3"

      },
      input:{
          borderBottomColor: "#514BC3",
          borderBottomWidth: 1,
          marginVertical: 15,
          color:"#fff",
          fontFamily:"poppinsRegular"
      }
      
    //   textInputStyle:{

    //   }
  });

  
export default Username
