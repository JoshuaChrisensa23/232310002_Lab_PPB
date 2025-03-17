import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Project } from './components/Project';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>My Profile</Text>
      <View style={styles.line}>
        <Text style={styles.profile}>Nama     :   Joshua Taftfarel Petra Chrisensa</Text>
        <Text style={styles.profile}>NPM       :   232310002</Text>
        <Text style={styles.profile}>Kelas      :   TI-23-PA</Text>
        <Text style={styles.profile}>Jurusan :   S1 Teknologi Informasi</Text>
        <Project />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6271A5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  head: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },

  profile: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  }
});
