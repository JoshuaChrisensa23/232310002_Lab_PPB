import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

function Lat1() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.head}>
                History of Bicycle
            </Text>
            <Text style={styles.body}>
                A bicycle also called a<Text style={{color: '#FA0D00'}}> pedal cycle</Text>,<Text style={{fontWeight: 'bold'}}> bike</Text>,<Text style={{fontStyle: 'italic'}}> push-bike or cycle </Text>is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
            </Text>
        </View>
        <View style={styles.box2}>
            <Image source={{ uri:"https://i.pinimg.com/originals/2d/70/5d/2d705d535992af7bcc28d23d34f869a6.png" }}
            style={{
                width : 165, height:165, borderRadius: 30, alignItems: 'center', justifyContent:'center', alignContent: 'center',borderColor: 'white', borderWidth: 2,
            }}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    box: {
        borderWidth: 1,
        width: 200,
        borderColor: 'lightgray',
        borderRadius: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
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
    head: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#FA0D00',
    },
    body: {
        textAlign: 'justify',
        fontSize: 16,
    },
})

export default Lat1
