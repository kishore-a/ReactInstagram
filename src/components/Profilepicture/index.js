import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import styles from "./styles";

const Profilepicture = ({
  uri,
  name,
  size = 70,
  marigin = 20,
  marginBottom = 30,
  border = true,
}) => {
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
      <Image
        source={{ uri: uri }}
        style={[styles.image, { width: size, height: size }]}
      />
      <Text style={[styles.text]}>{name}</Text>
    </View>
  );
};

export default Profilepicture;
