import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const itemTypo = () => {
  return (
    <View style={{
        margin: 15,
        padding: 10,
    }}>
        <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            backgroundColor: "magenta",
            color: "white",
            textAlign: "center",
            textDecorationLine: "underline",
            padding: 10,
            marginBottom: 10,
  
        }}>
            History of Bicycles
        </Text>
        <Text style={styles.paragraph}>
        A bicycle, also called a <Text style={{ ...styles.paragraph, color: "red"}}>pedal cycle </Text><Text style={{ ...styles.paragraph, fontWeight: "bold"}}>bike </Text><Text style={{ ...styles.paragraph, fontStyle: "italic"}}>push-bike or cycle</Text> , is a human-powered or motor-powered assisted, pedal-driven,
        single-track vehicle, having two wheels attached to a frame, one behind
        the other. A bicycle rider is called a cyclist, or bicyclist
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    paragraph:{
        fontSize: 16, textAlign: "justify",
    }
});

export default itemTypo
