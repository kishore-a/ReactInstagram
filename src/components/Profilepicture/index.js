import React from "react";
import { View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';
const Profilepicture = ({
  uri,
  name,
  size = 70,
  marigin = 20,
  marginBottom = 30,
  border = true,

}) => {
  const navigation=useNavigation();


  return (
    <View
      style={[
        styles.container,
        {
          width: size + 8.5,
          height: size + 8.5,
          marginTop: marigin - 10,
          marginBottom: marginBottom,
        },
      ]}
    >
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Story')
      }}>
        <Image
          source={{ uri: uri }}
          style={[styles.image, { width: size, height: size }]}
        />
      </TouchableOpacity>

      <Text style={[styles.text]}>{name}</Text>
    </View>
  );
};

export default Profilepicture;
