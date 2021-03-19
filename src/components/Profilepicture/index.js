import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Profilepicture = ({
  uri,
  name,
  size = 70,
  marigin = 80,
  
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size + 8.5,
          height: size + 8.5,
          marginTop: marigin-10,
          marginBottom: marigin - 50,
        },
      ]}
    >
      <Image
        source={{ uri: uri }}
        style={[styles.image, { width: size, height: size }]}
      />
      <Text style={[styles.text]}>
        {name}
      </Text>
    </View>
  );
};

export default Profilepicture;
