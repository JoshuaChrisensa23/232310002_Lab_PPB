import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Latihan1 from './Components/Lat1';
import Latihan2 from './Components/Lat2';
import Latihan3 from './Components/Lat3';
import Latihan41 from './Components/Lat41';
import Latihan42 from './Components/Lat42';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Latihan1 /> */}
      {/* <Latihan2 /> */}
      {/* <Latihan3 /> */}
      {/* <Latihan41 /> */}
      <Latihan42 />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
