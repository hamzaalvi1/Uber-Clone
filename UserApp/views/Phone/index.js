import React,{useEffect,useRef,useState} from 'react'
import { StyleSheet, Text, View,useWindowDimensions,Image,TouchableOpacity,ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import PhoneInput from "react-native-phone-number-input";
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { AntDesign } from '@expo/vector-icons'; 



const Credientials = () => {
    const [phoneNumber, setphoneNumber] = useState('');
    const [formattedValue, setFormattedValue] = useState("");
    const window = useWindowDimensions()
    const phoneInput = useRef(null);
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
      <ScrollView>
    <View style ={[styles.mainWrapper,{width:window.width,height:window.height}]}>
        <View style = {styles.backgroundLayer}>
            <View style={{flex:1,justifyContent:"center",}}>
                <Text style={{color:"#fff",fontSize:42,fontFamily:"poppinsRegular",textAlign:"center"}}>Let's Sign In</Text>
                <Text style={{color:"#fff",fontSize:18,fontFamily:"poppinsRegular",textAlign:"center"}}>For Booking Cab</Text>


            </View>
        </View>
        <View style={{marginBottom: 20}}>
         <Text style={{fontSize:15,fontFamily:"poppinsLight",color:"#fff",marginBottom:10}}>Enter Phone Number:</Text>   
        <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="PK"
        layout="first"
        withShadow
        withDarkTheme = {false}
        autoFocus
        renderDropdownImage = {<AntDesign name='caretdown' style={{fontSize:10,color:"#fff"}}/>}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        //  textInputStyle={{backgroundColor:"#0D1724"} }
        // flagButtonStyle ={{color:"#fff "}}
        
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
        <TouchableOpacity style={styles.primaryBtn}>
       
             <Text style={{color:"#514BC3",fontSize:14,fontFamily:"poppinsMedium",textAlign:"center"}}>Submit</Text>
         </TouchableOpacity>
         </View>
        
    </View>
    </ScrollView>
    
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
      textInput: {
        paddingVertical: 0,
        color: "#fff",
        borderTopRightRadius:10,
          borderBottomRightRadius:10,


      },
      phoneContainer:{
          height:50,
          width:315,
          marginBottom:25,
          borderRadius:10,
          

          borderColor: "#514BC3",
          borderWidth: 1,
          backgroundColor: "#0D1724",
    
          


      },
    //   textInputStyle:{

    //   }
  });

  
export default Credientials
