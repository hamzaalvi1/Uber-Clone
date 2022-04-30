import React,{useEffect} from 'react'
import { StyleSheet, Text, View,useWindowDimensions,Image,TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




const GetStarted = () => {
    const window = useWindowDimensions()
    let [fontsLoaded] = useFonts({
        'poppinsBold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'poppinsLight': require('../../assets/fonts/Poppins-Light.ttf'),
        'poppinsMedium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'poppinsRegular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'poppinsSemibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'poppinsThin': require('../../assets/fonts/Poppins-Thin.ttf'),



      });
      // useEffect(()=>{
      // const loadAllFonts = async ()=>{
      //     await Font.loadAsync({
      //   'poppinsBold': require('../../assets/fonts/Poppins-Bold.ttf'),
      //   'poppinsLight': require('../../assets/fonts/Poppins-Light.ttf'),
      //   'poppinsMedium': require('../../assets/fonts/Poppins-Medium.ttf'),
      //   'poppinsRegular': require('../../assets/fonts/Poppins-Regular.ttf'),
      //   'poppinsSemibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
      //   'poppinsThin': require('../../assets/fonts/Poppins-Thin.ttf'),
      //     })
      // } 
      // loadAllFonts()

      // },[])
 if(!fontsLoaded){
   return<AppLoading/> 
 }
  return (
    <View style ={[styles.mainWrapper,{width:window.width,height:window.height}]}>
        <View style = {styles.backgroundLayer}>
            <View style={{flex:0.8,justifyContent:"flex-end",}}>
                <Text style={{color:"#fff",fontSize:65,fontFamily:"poppinsRegular",textAlign:"center"}}>Uber</Text>
                <Text style={{color:"#fff",fontSize:20,fontFamily:"poppinsRegular",textAlign:"center"}}>Lets Go</Text>

            </View>
           <Image style={styles.splashImage} source={require("../../assets/splash/car.png")} />
        </View>
        
         <TouchableOpacity style={styles.primaryBtn}>
             <Text style={{color:"#fff",fontSize:18,fontFamily:"poppinsRegular"}}>Get Started</Text>
         </TouchableOpacity>
        
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
          flex:0.75,
          justifyContent:"space-evenly",
          alignItems:'center',
          width:'100%'

      },
      splashImage:{
          alignSelf:"flex-end"
      },
      primaryBtn:{
        width:315,
        height:50,
        backgroundColor:"#514BC3",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom: 20
      }
  });

  
export default GetStarted
