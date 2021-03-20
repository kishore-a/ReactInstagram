import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const Body = () => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { alignSelf: "center" }]}
        source={{
          uri:
            "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
        }}
      />
    </View>
  );
};

export default Body;
