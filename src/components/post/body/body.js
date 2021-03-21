import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Body = ({ postpic }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { alignSelf: "center" }]}
        source={{
          uri: postpic,
        }}
      />
    </View>
  );
};

export default Body;
