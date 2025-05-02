import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { User } from '../data/User';
import ExpScroll from '../modules/ExpScroll';
import SearchBars from '../widget/SearchBars';

const FriendScr = () => {
    const handleBack = () => {
        navigation.navigate("Home");
    }
    
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <SearchBars />
          </View>
          <View style={styles.body}>
            <ExpScroll User = {User} />
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5C0BF",
    },
    header: {
        flex: 2,
        backgroundColor: "grey",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    body: {
        flex: 10,
        backgroundColor: "black",
    },
})

export default FriendScr;
