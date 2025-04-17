import React from 'react'
import { Text, TextInput, View, StyleSheet, TouchableHighlight, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Image } from 'react-native'

const Soal2 = () => {
    const [name, setName] = useState("") 
    const [email, setEmail] = useState("")
    const [telp, setTelp] = useState("");

    const [submited, setSubmitted] = useState({
        name: "",
        email: "",
        telp: ""
    })

    const handleSubmit = () => {
        setSubmitted({
            name: name,
            email: email,
            telp: telp
        })
        console.log(name, email, telp);
    }
    return (
        <SafeAreaView>
            <View>
                <View style={styles.icon}>
                    <Image source={require('../../../assets/user_3748761.png')} style={{width: 100, height: 100}}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.shinp}>Nama Lengkap: </Text>
                    <TextInput style={styles.InputText} value={name} placeholder='Nama Lengkap Anda' onChangeText={setName}></TextInput>
                </View>
                <View style={styles.input}>
                    <Text style={styles.shinp}>Email: </Text>
                    <TextInput style={styles.InputText} value={email} placeholder='Email Anda' onChangeText={setEmail}></TextInput>
                </View>
                <View style={styles.input}>
                    <Text style={styles.shinp}>No Telpon: </Text>
                    <TextInput style={styles.InputText} value={telp} placeholder='No Telpon Anda' onChangeText={setTelp} keyboardType='numeric'></TextInput>
                </View>
                <TouchableHighlight activeOpacity={0.8} title='Submit Data' underlayColor='blue' onPress={handleSubmit}>{buttonAct("Submit Data")}</TouchableHighlight>
            </View>
            <View style={styles.output}>
                <Text style={styles.out} >Nama Lengkap Anda: {submited.name}</Text>
                <Text style={styles.out}>Alamat Email Anda: {submited.email}</Text>
                <Text style={styles.out}>No Telpon Anda: {submited.telp}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    shinp: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    InputText: {
        height: 40,
        width: 300,
        padding: 10,
        backgroundColor: "lightblue",
        borderColor: "grey",
        color: "#000",
        borderWidth: 1,
        borderRadius: 12,

    },
    output: {
        marginVertical: 20,
    },
    out: {
        fontSize: 16,
        color: "#000",
        marginBottom: 3,
        marginLeft: 10,
        marginRight: 10,
    },
})

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

export default Soal2
