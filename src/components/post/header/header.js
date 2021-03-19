import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Profilepicture from "../../Profilepicture/index";
import styles from "./style";
const Header = () => {
  return (
    <View style={styles.container}>
      <Profilepicture
        uri={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        }
        marigin={20}
        size={40}
      />
      <Text style={[styles.text,{alignSelf:'center'}]}>Kishore_Shankar</Text>
    </View>
    // <SafeAreaView>
    //   <View>
    //     <Text>Header</Text>
    //   </View>
    // </SafeAreaView>
  );
};

export default Header;
