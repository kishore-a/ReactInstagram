import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import ADIcon from "react-native-vector-icons/AntDesign";
import EVIcons from "react-native-vector-icons/EvilIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import FIcons from "react-native-vector-icons/Feather";
const Lower = ({ likes: likesprop, caption, postedAt }) => {
  var initialState = false;

  const [isLiked, setisLiked] = useState(initialState);
  const [likes, setlikes] = useState(0);
  const onLikePressed = () => {
    setisLiked(!isLiked);
    const amount = isLiked ? -1 : 1;
    setlikes(likes + amount);
  };
  useEffect(() => {
    return () => {
      setlikes(likesprop);
    };
  }, []);

  return (
    <View style={[styles.container, { marginLeft: 10 }]}>
      <View style={[styles.icon]}>
        <View style={[{ flexDirection: "row" }]}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name="heart" size={28} color={"#c30000"} />
            ) : (
              <ADIcon name="hearto" size={28} color={"#545454"} />
            )}
          </TouchableWithoutFeedback>
          <EVIcons name="comment" size={38} style={[{ marginLeft: 20 }]} />
          <IonIcon
            name="paper-plane-outline"
            size={30}
            style={[{ marginLeft: 20 }]}
          />
        </View>
        <View style={styles.IconRight}>
          <FIcons name="bookmark" size={30} />
        </View>
      </View>
      <Text style={styles.text}> {likes} Likes</Text>
      <Text style={styles.capt}>{caption}</Text>
      <Text style={styles.posted}>{postedAt}</Text>
    </View>
  );
};

export default Lower;
