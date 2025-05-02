import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { User } from '../data/User';

const HomeScr = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header} >
                <View style={styles.nav}>
                    <Text style={styles.logo}>Instagram</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 60 }}>
                        <Image src="https://cdn-icons-png.flaticon.com/128/16032/16032525.png" alt="Like" style={{ width: 25, height: 25, }} />
                        <Image src="https://cdn-icons-png.flaticon.com/128/3024/3024593.png" alt="Chat" style={{ width: 25, height: 25 }} />
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.strContain}>
                    {User.map((v, index) => (
                        <View key={index} style={styles.strUser}>
                            <Image source={{uri: "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" }} style={styles.strAvatar} />
                            <Text style={styles.strText}> {v.name} </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {User.map((v, index) => (
                        <View key={index} style={{ padding: 10 }}>
                            <Text style={{ color: 'white', fontSize: 18, marginTop: 5, fontWeight: 'black' }}>{v.name}</Text>
                            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoiP7wwp8BWPzA4jr0DD7kPn8kXV_reVvVw&s" }} style={{ width: '100%', height: 300, borderRadius: 10 }} />
                            <Text style={{ color: 'grey', fontSize: 13 }}>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
    header: {backgroundColor: 'darkgrey' },
    nav: { paddingTop: 35, paddingBottom: 10, alignItems: 'center', backgroundColor: 'darkgrey', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 },
    logo:{ color: 'white', fontSize: 24, fontWeight: 'bold' },
    strContain: { backgroundColor: 'black', paddingVertical: 10, paddingLeft: 10 },
    strUser: { marginRight: 15, alignItems: 'center' },
    strAvatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: 'pink', borderColor: 'white', borderWidth: 2 },
    strText: { color: 'white', fontSize: 12, textAlign: 'center', marginTop: 5 },
    body: {
        flex: 4,
        backgroundColor: 'black',
    }
})

export default HomeScr;
