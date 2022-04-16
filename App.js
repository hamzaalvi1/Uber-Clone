import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native';
import SplashScreen from './views/SplashScreen';
import Credientials from './views/Credientials';
import PhoneCredientials from "./views/Phone"


export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <StatusBar style="auto" />

      <PhoneCredientials/>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
