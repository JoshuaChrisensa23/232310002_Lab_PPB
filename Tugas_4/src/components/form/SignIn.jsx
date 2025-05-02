import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import FormUI from './FormUI';

const SignIn = ({navigation}) => {
    const handleBack = () => {
        navigation.navigate("LogIn");
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Text style={{fontWeight: "bold", fontSize: 36, color: 'white' }}>Sign In</Text>
            <View style={{backgroundColor: 'grey', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 10, padding: 20, width: '80%', alignItems: 'center'}}>
                <FormUI title="Name" />
                <FormUI title="Username" />
                <FormUI title="Email" />
                <FormUI title="Password" isPass={true} />
                <FormUI title="Confirm Password" isPass={true} />
                <TouchableOpacity style={{backgroundColor: 'purple', padding: 10, borderRadius: 5, marginTop: 10}} onPress={handleBack}>
                    <Text style={{fontWeight: "bold", fontSize: 24, color: 'white', textAlign: "center" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignIn;
