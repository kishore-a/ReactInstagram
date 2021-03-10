import React from 'react'
import {View,Text} from 'react-native';
import Profilepicture from '../components/Profilepictures/index'

const HomeScreen = () => {
    return (
      <View>
        <Profilepicture uri={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'} name={'Kishore'}/>
       <Profilepicture uri={'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'}/>
       <Profilepicture uri={'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg'}/>
      </View>
    )
}

export default HomeScreen;
