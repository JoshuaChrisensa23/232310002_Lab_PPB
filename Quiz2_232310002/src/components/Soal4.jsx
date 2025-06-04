import React from 'react'
import { Button, TextInput } from 'react-native'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Soal4 = ({navigation}) => {
    const handleHome = () => {
        navigation.navigate("Home");
    };

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [nomor, setNomor] = React.useState("");

    const validation = () => {
        if(name !== "" && email !== "" && nomor !== ""){
            setValid(true);
            alert("Name: " + name + "Email: " + email + "Nomor: " + nomor);
        }else{
            alert("Isi semua field input");
        }
    }
    return (
        <View style={styles.contain}>
            <View style={styles.formC}>
                <Text>Nama Lengkap</Text>
                <TextInput placeholder='Nama Lengkap' autoCapitalize='true' onChangeText={setName} value='Name' />
            </View>
            <View style={styles.formC}>
                <Text>Email</Text>
                <TextInput placeholder='Email' autoCapitalize='none' keyboardType="email-address" onChangeText={setEmail} value='Email' />
            </View>
            <View style={styles.formC}>
                <Text>Nomor Telepon</Text>
                <TextInput placeholder='Nomor Telepon' autoCapitalize='on' onChangeText={setNomor} value='Nomor' />
            </View>
            <Button title='Submit' onPress={validation}/>
            <TouchableOpacity style={styles.button} onPress={handleHome}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contain:{
        margin: 20,
        backgroundColor: 'white',
    },
    formC:{
        marginVertical: 5,
        fontWeight: 'bold',
    },
    TextInput: {
        backgroundColor: 'grey',

    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
      },
})

export default Soal4
