import React from "react";
import { View, FlatList,Dimensions } from "react-native";
import Post from "../post/index";
import StoryPicture from '../storypicture/index'
const user = [
  {
    userpic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name: "Kishore_Shankar",
    id: "1",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    postedAt: "6 Minutes ago",
  },
  {
    userpic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name: "Kishore_Shankar",
    id: "2",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    postedAt: "6 Minutes ago",
  },
  {
    userpic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name: "Kishore_Shankar",
    id: "3",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
    postedAt: "6 Minutes ago",
  },
  {
    userpic:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name: "Kishore_Shankar",
    id: "4",
    likes: 1234,
    caption: "Skyscrapper looks beautiful",
    postpic:
      "https://static.dezeen.com/uploads/2018/07/skyscraper-movie-designer-concept-architecture_dezeen_2364_hero.jpg",
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
