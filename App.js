import React from "react";
import { View, SafeAreaView } from "react-native";
import Profilepicture from "./src/components/Profilepicture/index";
import HomeScreen from "./src/screens/index";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}
