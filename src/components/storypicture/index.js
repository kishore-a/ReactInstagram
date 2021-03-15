import React from 'react'
import { View } from 'react-native';
import Profilepictures from '../Profilepictures/index'

export const StoryPicture = ({uri,name}) => {
    return (
<View>
<Profilepictures uri={uri}/>
<Text>{name}</Text>
</View>
    )
}
export default StoryPicture;