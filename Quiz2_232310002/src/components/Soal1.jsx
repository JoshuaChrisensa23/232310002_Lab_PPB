import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image, View, Text, StyleSheet, Button } from 'react-native'

const Soal1 = ({navigation}) => {
    const handleHome = () => {
        navigation.navigate("Home");
    };

  return (
    <View style={styles.container}>
        <Text style={{...styles.text1, padding: 10}} >Halo, Selamat Datang Di Kuis React Native</Text>
        <Image source={{ uri:"https://static.jdmexport.com/wp-content/uploads/sites/9/2022/02/07104358/nissan-silvia.png" }} 
        style={{ width: 250, height: 250, borderRadius:12, padding: 10 }}/>
        <View style={{ margin: 10 }} >
            <TouchableOpacity style={{ backgroundColor: "red", padding: 10, width: 250, borderRadius:100 }} activeOpacity={0.5} onPress={() => alert("Kuis Anda Dimulai")}>
                <Text style={styles.text2} >Klik Here!!</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleHome}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: { 
        fontSize: 16,
        fontWeight: 'bold',
    },
    text2: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        color: 'white'
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

export default Soal1
