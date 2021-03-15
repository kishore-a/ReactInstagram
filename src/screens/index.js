import React from 'react'
import {FlatList, View} from 'react-native';
import Profilepicture from '../components/Profilepictures/index'
import styles from './styles'
import StoryPicture from '../components/storypicture/index'
const url=[{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name1',
  id:'1'
},{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name2',
  id:'2'

},{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name3',
  id:'3'
},
{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name4',
  id:'4'

},{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name5',
  id:'5'

},{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name6',
  id:'6'

},{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name7',
  id:'7'

},{
  uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
  name:'Name8',
  id:'8'

}];


export const HomeScreen = () => {
  return (
<FlatList
data={url}
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item) => item.name}
renderItem={({item}) => <StoryPicture uri={item.uri} name={item.name}/>}
/>
  )
}
export default HomeScreen;r