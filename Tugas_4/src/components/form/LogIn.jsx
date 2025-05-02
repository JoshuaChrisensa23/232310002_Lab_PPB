import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import FormUI from './FormUI';

const LogIn = () => {
    const handleBackLog = () => {
        navigation.navigate("Main");
    }
    const handleBackSign = () => {
        navigation.navigate("SignIn");
    }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Text style={{fontWeight: "bold", fontSize: 36, color: 'white' }}>Log In</Text>
            <View style={{backgroundColor: 'grey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 10, padding: 20, width: '80%', alignItems: 'center'}}>
                <FormUI title="Email" />
                <FormUI title="Password" isPass={true} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10}}>
                    <TouchableOpacity style={{backgroundColor: 'purple', padding: 10, borderRadius: 5, marginTop: 10}} onPress={handleBackLog}>
                        <Text style={{fontWeight: "bold", fontSize: 24, color: 'white', textAlign: "center" }}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'magenta', padding: 10, borderRadius: 5, marginTop: 10}} onPress={handleBackSign}>
                        <Text style={{fontWeight: "bold", fontSize: 24, color: 'white', textAlign: "center" }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}

export default LogIn;
