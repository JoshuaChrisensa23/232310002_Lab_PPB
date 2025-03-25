import React from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, TouchableHighlight, Button, ScrollView, TouchableWithoutFeedback  } from 'react-native'

function FormProfile() {
  return (
    <ScrollView>
        <View style={styles.cont1}>
        <View>
            <Image source={{ uri:"https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"}} style={{width : 250, height:250, borderRadius: 50, alignItems: 'center', justifyContent:'center', alignContent: 'center'}} />
            </View>

            <View>
                <Text>NPM : </Text>
                <TextInput style={styles.inputText} placeholder="Enter Your NPM" keyboardType='numeric'></TextInput>
            </View>
            
            <View>
                <Text>Fullname : </Text>
                <TextInput style={styles.inputText} placeholder="Enter Your name" keyboardType='text'></TextInput>
            </View>

            <View>
                <Text>Address : </Text>
                <TextInput style={styles.inputTextAddr}
                editable={true}
                multiline={true}
                numberOfLines={4}
                maxLength={40} 
                placeholder="Enter Your Address" keyboardType='text'></TextInput>
            </View>

            <View style={styles.ButCont}>
                <Button title="Button form OS" style={{color: "pink"}} />
            </View>
            
            <TouchableOpacity style={{marginTop: 15,}} activeOpacity={0.3} onPress={() => alert("Touchacle opacity pressed")}>
                {buttonAct("Touchable Opacity")}
            </TouchableOpacity>
            <TouchableHighlight activeOpacity={0.8} underlayColor = "lightpink" onPress={() => alert("Touchable Highlight pressed")}>
                {buttonAct("Touchable Highlight")}
            </TouchableHighlight>
            <TouchableWithoutFeedback onPress={() => alert("Touchable Without Feedback  pressed")}>
                {buttonAct("Touchable Without Feedback")}
            </TouchableWithoutFeedback>
        </View>
    </ScrollView>
  )
}

const buttonAct = (title) => {
    return (
        <View style={{
            backgroundColor: "purple",
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            marginVertical: 5,
            width: 300,
        }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{title}</Text>
        </View>
    )
 
}

const styles = StyleSheet.create({
    cont1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      },
    inputText: {
        width: 300,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        marginTop: 10,
        marginBottom: 10,
    },
    inputTextAddr: {
        width: 300,
        height: 100,
        textAlignVertical: "top",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        marginTop: 10,
        marginBottom: 10,
    },
    ButCont: {
        width: 200,
        height: 50,
        backgroundColor: "pink",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
    },
})

export default FormProfile
