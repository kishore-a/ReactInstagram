import React from 'react'
import { View ,Image,Text} from 'react-native'
import styles from './styles'
export const Profilepicture = ({uri,name}) => {
  return (
 
<View style={styles.container}>
<Image source={{uri}} style={styles.image}/>
<Text>{name}</Text>

</View> 
  )
}
export default Profilepicture;