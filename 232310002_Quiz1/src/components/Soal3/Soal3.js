import React from 'react'
import { SafeAreaView, View, StyleSheet, Button } from 'react-native'

function Soal3() {
    const [boxColor, setBoxColor] = React.useState('blue')
    const color = ['red', 'blue', 'yellow']
    const [colorIndex, setColorIndex] = React.useState(0)
    const changeColor = () => {
        setColorIndex((colorIndex + 1) % color.length)
        setBoxColor(color[colorIndex])
    }
    
    return (
        <SafeAreaView>
            <View>
                <Button title='Change Colors' onPress={changeColor}/>
                <View style={[styles.box, {backgroundColor : boxColor}]}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 300,
        height: 300,
        backgroundColor: 'blue',
        borderRadius: 50,
        marginVertical: 20,
    },
})

export default Soal3
