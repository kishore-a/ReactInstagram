import React from "react";
import { View } from "react-native";
import StoryPicture from "../components/storypicture/index";
import Posts from "../components/post/index";
const user = 
  {
    userpic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name: "Kishore_Shankar",
    id: "1",
    likes: "1234",
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
      postedAt:"6 Minutes ago"
  }
const HomeScreen = () => {
  return (
    <View>
      <StoryPicture />
      <Posts item={user}/>
    </View>
  );
};

export default HomeScreen;
