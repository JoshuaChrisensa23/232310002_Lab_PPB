import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Soal1 from './src/components/Soal1/Soal1.js';
import Soal2 from './src/components/Soal2/Soal2.js';
import Soal3 from './src/components/Soal3/Soal3.js';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Soal1</Text>
      <Soal1 />
      <Text style={{fontSize:20, fontWeight:'bold'}}>Soal2</Text>
      <Soal2 />
      <Text style={{fontSize:20, fontWeight:'bold'}}>Soal3</Text>
      <Soal3 />
      <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
