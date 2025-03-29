import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyFriends from './src/components/friends/MyFriend.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyFriends />
      {/* <StatusBar style="sauto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});
