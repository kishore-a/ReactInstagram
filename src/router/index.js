import { NavigationContainer } from "@react-navigation/native";
import Homescreenstack from '../router/home-routes'
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FIcons from "react-native-vector-icons/Foundation";
import IonIcons from "react-native-vector-icons/Ionicons";
import AntIcons from "react-native-vector-icons/AntDesign";
import OctiIcons from "react-native-vector-icons/Octicons";
import NotificationScreen from "../screens/Notification/index";
import DiscoveryScreen from '../screens/Discovery/index';
import ProfileScreen from "../screens/Profie/index";
import CreatePostScreen from "../screens/CreatePost/index";
const Tab = createBottomTabNavigator();

const Router=()=>{
const colour ='black'

return(
    <NavigationContainer>
    <Tab.Navigator
    tabBarOptions={{
        showLabel:false
    }}
    
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ colour, size }) => {
          if (route.name == "Home") {
            return <FIcons name="home" size={size} color={colour} />;
          }
          if (route.name == "Search") {
            return <OctiIcons name="search" size={size} color={colour} />;
          }
          if (route.name == "Createpost") {
            return <OctiIcons name="diff-added" color={colour} size={size} />;
          }
          if (route.name == "Notification") {
            return <AntIcons name="hearto" color={colour} size={size} />;
          }
          if (route.name == "Profile") {
            return (
              <IonIcons name="person-outline" size={size} color={colour} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home"  component={Homescreenstack}  />
      <Tab.Screen name="Search" component={DiscoveryScreen} />
      <Tab.Screen name="Createpost" component={CreatePostScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
)
}
export default Router;