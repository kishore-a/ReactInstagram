import HomeScreen from '../screens/HomeScreen/index'
import { createStackNavigator } from "@react-navigation/stack";
import IonIcons from "react-native-vector-icons/Ionicons";
import React from "react";
import StoryScreen from '../screens/Story/index'
import {Text} from "react-native";
const HomeStack = createStackNavigator();

const Homescreenstack=()=> {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            title: (
              <Text>Instagram</Text>
              // <FIcons name="home" size={25} color={'black'} />
            ),
            headerRight: () => (
              <IonIcons style={{marginRight:10}}
                name="md-paper-plane-outline"
                size={25}
                color="black"
              />
            ),
          }}
        />
        <HomeStack.Screen name='Story' component={StoryScreen} options={{
          headerShown:false
        }}/>
      </HomeStack.Navigator>
    );
  }

export default Homescreenstack;