import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/index'

export default function App() {
  return (
    <SafeAreaView>
       <View >
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
