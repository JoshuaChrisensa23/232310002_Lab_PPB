import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SearchBar from './widgets/SearchBar';

class MyFriend extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <StatusBar hidden={false} style="light"/> */}
                <View style={styles.header}>
                    <SearchBar />
                </View>
                <View style={styles.body}></View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        paddingTop: 25,
        paddingBottom: 10,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'orange',
    },
    body: {
        flex: 10,
        backgroundColor: 'green',
    },
})

export default MyFriend;
