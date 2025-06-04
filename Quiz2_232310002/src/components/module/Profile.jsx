import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = ({navigation}) => {
    const handleProfiles = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri:"https://static.jdmexport.com/wp-content/uploads/sites/9/2022/02/07104358/nissan-silvia.png" }} style={{ width: 250, height: 250, borderRadius: 100, padding: 10 }}/>
            <Text style={styles.title}>Name: Joshua Taftfarel Petra Chrisensa</Text>
            <Text style={styles.subtitle}>NPM: 232310002</Text>
            <TouchableOpacity style={styles.button} onPress={handleProfiles}>
                <Text style={styles.buttonText}>Home</Text>
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

export default Profile
