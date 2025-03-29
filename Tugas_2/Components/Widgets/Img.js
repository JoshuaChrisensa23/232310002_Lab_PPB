import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default function Img() {
  return (
    <View style={styles.box2}>
        <Image source={{ uri:"https://i.pinimg.com/originals/2d/70/5d/2d705d535992af7bcc28d23d34f869a6.png" }} style={{
        width : 165, height:165, borderRadius: 30, alignItems: 'center', justifyContent:'center', alignContent: 'center',borderColor: 'white', borderWidth: 2,}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    box2: {
        width: 200,
        height: 200,
        borderRadius: 40,
        marginBottom: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginBottom: 10,
    },
})
