import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../post/header/header";
import Body from "../post/body/body";
import Lower from "./footer/Lower";
const Post = () => {
  return (
    <View>
      <Header />
      <Body />
      <Lower />
    </View>
  );
};

export default Post;
