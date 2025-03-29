import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export const MyBio = {
    identity: {
        npm:212310056,
        fisrtname: "MUHAMMAD",
        Middlename: "ZIDAN",
        lastname: "AKBAR",
    },
    education: [{id:1, school: "SDN 1 Kota Bogor"}, {id:2, school: "SMPN 1 Kota Bogor"}, {id:3, school: "SMAN 1 Kota Bogor"}],
    mobile_phone: '08123456789',
    email: "212300566@student.ibik.ac.id",
    gender:'M', tall_body:175,
    weight_body:64.5,
}
export default function Lat4() {
  return (
    <View style={styles.container}>
        <View>
            <Image source={{uri:"https://images.icon-icons.com/624/PNG/512/Businessman-80_icon-icons.com_57362.png"}} style={styles.image}/>
        </View>
        <View style={styles.typo}>
            <Text>Nama: {MyBio.identity.fisrtname} {MyBio.identity.Middlename} {MyBio.identity.lastname}</Text>
            <Text>NPM: {MyBio.identity.npm}</Text>
            <Text>SD: {MyBio.education[0].school}</Text>
            <Text>SMP: {MyBio.education[1].school}</Text>
            <Text>SMA: {MyBio.education[2].school}</Text>
            <Text>Jenis Kelamin: {MyBio.gender}</Text>
            <Text>Tinggi Badan: {MyBio.tall_body} cm</Text>
            <Text>Berat Badan: {MyBio.weight_body} kg</Text>
            <Text>No. Telp: {MyBio.mobile_phone}</Text>
            <Text>Email: {MyBio.email}</Text>
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    typo: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        width: '80%',
        shadowColor: '#000',
    },
 
})
