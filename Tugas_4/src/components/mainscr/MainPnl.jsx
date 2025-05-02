import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScr from './HomeScr.jsx';
import FriendScr from './FriendScr.jsx';
import { TouchableOpacity } from 'react-native';

function MainPnl({navigation}) {
    const btm = createBottomTabNavigator();
    const handleBack = () => {
        navigation.navigate("LogIn");
    }
    return (
        <View style={styles.container}>
            <btm.Navigator screenOptions={{ headerShown: false }}>  
                <btm.Screen name="Home" component={HomeScr} />
                <btm.Screen name="Friends" component={FriendScr} />
                {/* <StatusBar style="auto" /> */}
            </btm.Navigator>
            {/* <View >
                <Text style={{fontWeight: "bold", fontSize: 36, color: 'white' }}>Main Panel</Text>
                <TouchableOpacity style={{backgroundColor: 'purple', padding: 10, borderRadius: 5, marginTop: 10}} onPress={handleBack}>
                    <Text style={{fontWeight: "bold", fontSize: 24, color: 'white', textAlign: "center" }}>Log Out</Text>
                </TouchableOpacity>
            </View> */}
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})

export default MainPnl;
