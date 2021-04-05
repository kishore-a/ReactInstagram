import React from "react";
import { View, FlatList,Dimensions } from "react-native";
import Post from "../post/index";
import StoryPicture from '../storypicture/index'
const user = [
  {
    userpic:
      "https://images.pexels.com/photos/2832028/pexels-photo-2832028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "Kishore_Shankar",
    id: "1",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    postedAt: "6 Minutes ago",
  },
  {
    userpic:
      "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    name: "Karthikeyan",
    id: "2",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    postedAt: "6 Minutes ago",
  },
  {
    userpic:
      "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    name: "Santh_shan",
    id: "3",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://images.pexels.com/photos/325117/pexels-photo-325117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    postedAt: "6 Minutes ago",
  },
  {
    userpic:
      "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    name: "Guru_prasath",
    id: "4",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    postedAt: "6 Minutes ago",
  },
];
const Feed = () => {
  
  return (
    
    <FlatList
      contentContainerStyle='styles'
      snapToAlignment="center"
      // snapToInterval={Dimensions.get('window').width}
      data={user}
      key={user.id}
      ListHeaderComponent={StoryPicture}
      style={[{width:'100%'}]}
      decelerationRate="normal"
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Post item={item} />}
    />
  );
};

export default Feed;
