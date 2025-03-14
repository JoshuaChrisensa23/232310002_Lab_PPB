import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import Car from './components/car.js'; // Correct casing to './components/Car.js'
import Motorcycle from './components/Motorcycle.js';
import Bicycle from './components/Bicycle.js'; // Correct casing to './components/Bicycle.js'

export default function App() {
  return (
      <ImageBackground source={{
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bukalapak.com%2Fproducts%2F3o2pt0f-jual-frameset-tsunami-snm100%2Frelated&psig=AOvVaw1erxaxqrMRsz0h6wkVsgiY&ust=1741949056324000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjizYnwhowDFQAAAAAdAAAAABAE",
      }}
      resizeMode="cover"
      style={{flex: 1}}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <SafeAreaView>
        <StatusBar hidden="true" />
        <Car />
      </SafeAreaView>
      {/* <Motorcycle /> */}
      {/* <Bicycle /> */}
      <StatusBar style="auto" />
    </ImageBackground>
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
