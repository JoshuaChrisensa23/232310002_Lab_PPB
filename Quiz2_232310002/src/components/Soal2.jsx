import React from 'react'
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Soal2 = ({navigation}) => {
    const handleHome = () => {
        navigation.navigate("Home");
    };
    
    const [nilai, setNilai] = React.useState(0);
    const plus = () => {
        setNilai(nilai + 1);
    }
    const minus = () =>{
        setNilai( nilai - 1);
    }

    return (
        <View>
            <View>
                <Button title='-' onPress={() => nilai <= 0 ? alert("Nilai Tidak Bisa Mines") : minus()} />
            </View>
            <Text>Nilai Anda: {nilai}</Text>
            <View>
                <Button title='+' onPress={() => nilai >= 10 ? alert("Nilai Telah Maksimum") : plus()}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleHome}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default Soal2
