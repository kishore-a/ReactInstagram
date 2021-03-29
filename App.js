import React from "react";
import DiscoveryScreen from "./src/screens/Discovery/index";
import HomeScreen from "./src/screens/HomeScreen/index";
import ProfileScreen from "./src/screens/Profie/index";
import "react-native-gesture-handler";
import FIcons from "react-native-vector-icons/Foundation";
import AntIcons from "react-native-vector-icons/AntDesign";
import OctiIcons from "react-native-vector-icons/Octicons";
import NotificationScreen from "./src/screens/Notification/index";
import CreatePostScreen from "./src/screens/CreatePost/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            console.log(size)
            if (route.name == "Home") {
              return <FIcons name="home" size={size} color={color} />;
            }
            if (route.name == "Search") {
              return <OctiIcons name="search" size={size} color={color} />;
            }
            if (route.name == "Createpost") {
              return (
                <OctiIcons
                  name="diff-added" color={color} size={size}/>
              );
            }
            if(route.name=='Notification'){
              return <AntIcons name='hearto' color={color} size={size}/>
            }
            if(route.name=='Profile'){
              return <IonIcons name="person-outline" size={size} color={color}/>
              
            }
            
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={DiscoveryScreen} />
        <Tab.Screen name="Createpost" component={CreatePostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
