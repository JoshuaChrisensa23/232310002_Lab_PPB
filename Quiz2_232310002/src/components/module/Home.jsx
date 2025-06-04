import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({navigation}) => {
    const handleProfiles = () => {
        navigation.navigate("Profile");
    };
    const handleSoal1 = () => {
        navigation.navigate("Soal1");
    };
    const handleSoal2 = () => {
        navigation.navigate("Soal2");
    };
    const handleSoal3 = () => {
        navigation.navigate("Soal3");
    };
    const handleSoal4 = () => {
        navigation.navigate("Soal4");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Page</Text>
            <Text style={styles.subtitle}>Quiz Lab PPB 2025, Joshua 232310002</Text>
            <TouchableOpacity style={styles.button} onPress={handleSoal1}>
                <Text style={styles.buttonText}>Soal 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSoal2}>
                <Text style={styles.buttonText}>Soal 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSoal3}>
                <Text style={styles.buttonText}>Soal 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSoal4}>
                <Text style={styles.buttonText}>Soal 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleProfiles}>
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      },
      title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
      },
      text: {
        fontSize: 18,
      },
      button: {
        width: 200,
        backgroundColor: "#007bff",
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
      buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
      },
    
})

export default Home
