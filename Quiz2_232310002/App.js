import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/components/module/Home.jsx";
import Profile from "./src/components/module/Profile.jsx"
import Soal1 from './src/components/Soal1.jsx';
import Soal2 from './src/components/Soal2.jsx';
import Soal3 from './src/components/Soal3.jsx';
import Soal4 from './src/components/Soal4.jsx';


export default function App() {
  const Stack = createNativeStackNavigator();
    return (
        // <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Soal1" component={Soal1} />
                    <Stack.Screen name="Soal2" component={Soal2} />
                    <Stack.Screen name="Soal3" component={Soal3} />
                    <Stack.Screen name="Soal4" component={Soal4} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        // </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
