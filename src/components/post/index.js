import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from '../post/header/header'
import Body from '../post/body/body'
const Post = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />

        
        <Body/>
      </View>
    </SafeAreaView>
  );
};

export default Post;
