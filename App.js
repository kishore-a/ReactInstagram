import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View ,SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/index'

export default function App() {
  return (
    <SafeAreaView>
       <View >
      <HomeScreen/>
      
    </View>
    </SafeAreaView>
   
  );
}

