import React from "react";
import {Dimensions,Text} from "react-native";

import NotificationScreen from "./src/screens/Notification/index";
import DiscoveryScreen from "./src/screens/Discovery/index";
import ProfileScreen from "./src/screens/Profie/index";
import CreatePostScreen from "./src/screens/CreatePost/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import logo from "./assets/logo.png"
import Router from './src/router/index'

export default function App() {
  return (
<Router/>
  );
}
