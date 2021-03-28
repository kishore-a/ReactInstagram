import React from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import Profilepicture from "../../Profilepicture/index";
import Icons from "react-native-vector-icons/Entypo";
import styles from "./style";
const Header = ({ username, userpic }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Profilepicture
          uri={userpic}
          marigin={20}
          size={40}
          marginBottom={11}
        />
        <Text
          style={{
            alignSelf: "center",
            top: -5, 
            marginLeft: 5,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {username}
        </Text>
      </View>
      <View style={styles.right}>
        <Icons name="dots-three-vertical" size={25} color="grey" />
      </View>
    </View>
  );
};

export default Header;
