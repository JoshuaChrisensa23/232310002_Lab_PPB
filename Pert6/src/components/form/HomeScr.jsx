import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import MyFriends from '../friends/MyFriends';

const Homescr = ({navigation}) => {
    const handleFriends = () => {
        navigation.navigate("Friends");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Hell</Text>
            <Text style={styles.subtitle}>heheheheheeeehhehe</Text>
            <TouchableOpacity style={styles.button} onPress={handleFriends}>
                <Text style={styles.buttonText}>Move Out</Text>
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

export default Homescr;
