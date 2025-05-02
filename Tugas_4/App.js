import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './src/components/form/LogIn.jsx';
import SignIn from './src/components/form/SignIn.jsx';
import MainPnl from './src/components/mainscr/MainPnl.jsx';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={MainPnl} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
