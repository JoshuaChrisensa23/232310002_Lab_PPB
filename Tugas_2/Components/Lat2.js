import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Img from './Widgets/Img';
import Typo from './Widgets/Typo';

class Lat2 extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Typo />
                <Img />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 15,
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
    }
});

export default Lat2;
