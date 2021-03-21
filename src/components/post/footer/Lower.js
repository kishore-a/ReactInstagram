import React from "react";
import { View, Text } from "react-native";
import styles from './styles'
const Lower = ({
  likes,
  caption,
  postedAt
}) => {
  
  return (
    <View>
      <Text style={styles.text}> {likes} likes</Text>
      <Text style={styles.capt}>{caption}</Text>
      <Text style={styles.posted}>{postedAt}</Text>
    </View>
  );
};

export default Lower;
