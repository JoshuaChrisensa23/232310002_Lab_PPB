import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'

export default function Profil1() {
  return (
    <View style={styles.container}>
        <View style={{alignItems: 'center', padding: 20}}>
            <Image source={{ uri:"https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?cs=srgb&dl=pexels-olly-927022.jpg&fm=jpg"}} style={styles.img}/> 
        </View>
        <Text style={styles.id}>NIM: 232310002</Text>
        <Text style={styles.id}>Nama: Joshua Taftfarel Petra Chrisensa</Text>
        <Text style={styles.id}>Jurusan: S1 Teknologi Informasi</Text>
        <Text style={styles.id}>Umur: 19</Text>
        <Text style={styles.id}>Hobi: Main Game</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    id: {
        fontSize: 16,
        color: 'black',
        textAlign: 'justify',
    },
    img: {
        alignItems: 'center',
        width: 200,
        height: 200,
        borderRadius: 100,
    },
})
