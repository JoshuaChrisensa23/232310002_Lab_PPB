import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

class Profil2 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={{margin: 15}}>
                <View style={{alignItems: 'center',}}>
                    <Image source={{ uri:"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?cs=srgb&dl=pexels-olly-927022.jpg&fm=jpg"}} style={{
                        width : 200, 
                        height: 200, 
                        borderRadius: 100,
                    }}/>
                </View>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>NIM: 232310002</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Nama: Joshua Taftfarel Petra Chrisensa</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Jurusan: S1 Teknologi Informasi</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Umur: 19</Text>
                <Text style={{textAlign: 'justify', 
                    fontSize: 16, 
                    paddingLeft: 10, 
                    paddingRight: 10}}>Hobi: Main Game</Text>
            </View>
        );
    }
}

export default Profil2;
