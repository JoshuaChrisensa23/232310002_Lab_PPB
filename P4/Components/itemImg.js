import React from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'

const itemImg = () => {
  return (
    <View>
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMFo1gB6Gcsw0ADTt4Y_wFXEr68LaGgAP8w&s"}} style={{width : 270, height:270, borderRadius: 5000, alignItems: 'center', justifyContent:'center', alignContent: 'center'}}/>
    </View>
  )
}

export default itemImg
