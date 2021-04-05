import React from 'react'
import { FlatList, View } from 'react-native';
import Profilepicture from '../Profilepicture/index'
const url = [{
    uri: 'https://images.pexels.com/photos/1738622/pexels-photo-1738622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Kishore',
    id: '1'
}, {
    uri: 'https://images.pexels.com/photos/2880476/pexels-photo-2880476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Karthick',
    id: '2'
}, {
    uri: 'https://images.pexels.com/photos/3217936/pexels-photo-3217936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Harish',
    id: '3'
}, {
    uri: 'https://images.pexels.com/photos/2820885/pexels-photo-2820885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'John',
    id: '4'
}, {
    uri: 'https://images.pexels.com/photos/4763860/pexels-photo-4763860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Aravind',
    id: '5'
}, {
    uri: 'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Stalin',
    id: '6'
}, {
    uri: 'https://images.pexels.com/photos/925263/pexels-photo-925263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Shyam',
    id: '7'
},]
const StoryPicture = () => {
    return (
        <View>

            <FlatList
                data={url}
                key={url.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Profilepicture uri={item.uri} name={item.name}/>}
            />
        </View>
    )
}

export default StoryPicture;
