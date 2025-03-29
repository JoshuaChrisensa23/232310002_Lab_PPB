import React from 'react'
import {  StyleSheet, View, Text } from 'react-native'

export default function Typo() {
  return (
    <View style={styles.box}>
        <Text style={styles.head}>
            History of Bicycle
        </Text>
        <Text style={styles.body}>
            A bicycle also called a<Text style={{color: '#FA0D00'}}> pedal cycle</Text>,<Text style={{fontWeight: 'bold'}}> bike</Text>,<Text style={{fontStyle: 'italic'}}> push-bike or cycle </Text>is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        width: 200,
        borderColor: 'lightgray',
        borderRadius: 10,
        paddingBottom: 10,
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
