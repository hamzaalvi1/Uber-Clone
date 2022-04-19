import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native';
import SplashScreen from './views/SplashScreen';
import Credientials from './views/Credientials';
import PhoneCredientials from "./views/Phone"
import Username from "./views/Username"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Map from "./views/Map"



export default function App() {
  return (
    <SafeAreaProvider>
    <View  style={styles.container}>
      <StatusBar style="auto" />

      <Map/>
    </View >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
