import React from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import Profilepicture from "../../Profilepicture/index";
import styles from "./style";
const Header = ({username,userpic}) => {
  
  return (
    <View style={styles.container}>
      <Profilepicture uri={userpic} marigin={20} size={40} marginBottom={11} />
      <Text style={[styles.text, { alignSelf: "center" }]}>{username}</Text>
    </View>
  );
};

export default Header;
