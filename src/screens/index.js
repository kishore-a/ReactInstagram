import React from 'react'
import {FlatList, ScrollView} from 'react-native';
import Profilepicture from '../components/Profilepictures/index'
import styles from './styles'
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
const HomeScreen = () => {
    return (
      
        <FlatList
       data={url}
      
 scrollEnabled={true}
       horizontal={true}
       style={{width:1000,height:300,flex:1,flexDirection:'row'}}
      renderItem={({item})=> <Profilepicture uri={item.uri} name={item.name}/>
      }
      />
      
     )
}

export default HomeScreen;
