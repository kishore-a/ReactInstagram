import React from "react";
import { View } from "react-native";
import Header from "../post/header/header";
import Body from "../post/body/body";
import Lower from "./footer/Lower";
const Post = ({ item }) => {
  return (
    <View>
      <Header username={item.name} userpic={item.userpic} />
      <Body postpic={item.postpic} />
      <Lower
        likes={item.likes}
        caption={item.caption}
        postedAt={item.postedAt}
      />
    </View>
  );
};

export default Post;
