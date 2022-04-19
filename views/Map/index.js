import React,{useEffect,useRef,useState} from 'react'
import { StyleSheet, Text, View,useWindowDimensions,TouchableOpacity,  } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView,{PROVIDER_GOOGLE} from "react-native-maps";



const Username = () => {
    const mapDarkStyle = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c"
            }
          ]
        }
      ]
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
    <MapView
     provider={PROVIDER_GOOGLE}
       style={{flex: 1}}
      customMapStyle={ mapDarkStyle } /> 
        
    </SafeAreaView>
    
  )


  
}

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor:"#0D1724",
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
