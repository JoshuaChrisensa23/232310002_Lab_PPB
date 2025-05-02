import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const FormUI = ({title, isPass = false}) => {
    return (
        <View>
            <Text style={{fontWeight: "bold", fontSize: 24, color: 'white' }}>{title}</Text>
            <TextInput secureTextEntry={isPass} placeholder={title} 
            style={{borderWidth: 1, borderColor: 'white', padding: 10, marginBottom: 10, width: 250}} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default FormUI;
