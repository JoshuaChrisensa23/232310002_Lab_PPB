import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ItemImg from './Components/itemImg';
import ItemTypo from './Components/itemTypo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ItemTypo />
      <ItemImg />
      <StatusBar style="auto" />
    </SafeAreaView>
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
