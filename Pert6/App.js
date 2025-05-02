import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyFriends from "./src/components/friends/MyFriends";
import Homescr from "./src/components/form/HomeScr";
import SignIn from "./src/components/form/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Homescr} />
        <Stack.Screen name="Friends" component={MyFriends} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
