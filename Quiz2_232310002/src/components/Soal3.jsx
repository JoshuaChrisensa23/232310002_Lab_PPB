import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Soal3 = ({navigation}) => {
    const handleHome = () => {
        navigation.navigate("Home");
    };

    const [test, setTest] = React.useState("");
    const [items, setItems] = React.useState([
        {id: 1, name: 'Joko'},
        {id: 2, name: 'Udin'}
    ]);

    const add= () => {
        setItems(prevItems => [...prevItems, {id : prevItems.length + 1, name : test}]);
    };

    const showItem = ({ item }) => {
        return (
            <View style={{ padding: 10, marginBottom: 10, borderRadius: 5, backgroundColor: '#eee', width: 250, alignItems:'center' }}>
                <Text>{item.name}</Text>
            </View>
        );
    };


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center' }}>
            <FlatList data={items} renderItem={showItem} keyExtractor={item => item.id.toString()} />

            <View>
                <Text>Masukan Data</Text>
            </View>
            <View>
                <View>
                    <Text>Nama Lengkap</Text>
                    <TextInput placeholder='Nama Lengkap' autoCapitalize='words' onChangeText={setTest} style={{ width: 250, height: 30,  backgroundColor: "blue", borderRadius: 10, color: 'white', fontWeight: '500', padding: 15, marginVertical: 10}} />
                    <Button title='Add Item' onPress={add} style={{ margin: 10, width: 200 }} />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleHome}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
      },
      buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
      },
})

export default Soal3;
