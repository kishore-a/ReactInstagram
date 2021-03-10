import React from 'react'
import {View,Image,SafeAreaView,Text} from 'react-native';
import styles from './styles';
const Profilepicture = ({uri,name}) => {
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
        <Image source={{uri}} 
        style={styles.image}/>
        <Text>{name}</Text>
    </View></SafeAreaView>
       
    )
}

export default Profilepicture;
