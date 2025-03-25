import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import Car from './components/car.js'; // Correct casing to './components/Car.js'
// import Motorcycle from './components/Motorcycle.js';
import Bicycle from './components/Bicycle.js'; // Correct casing to './components/Bicycle.js'

export default function App() {
  return (
      <ImageBackground source={{
        uri: "https://i.pinimg.com/736x/03/58/11/035811c3785d0a017123e6663938c4db.jpg",
      }}
      style={styles.backgroundImg} >
      <SafeAreaView>
        <View>
          <StatusBar />
          {/* <Car /> */}
          <Bicycle />
        </View>
      </SafeAreaView>
        {/* <Motorcycle /> */}
      <StatusBar style="auto" />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    // resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
