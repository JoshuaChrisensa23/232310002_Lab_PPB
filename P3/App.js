import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Image, Text, View } from 'react-native';
import FormProfile from './Components/FormProfile';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.box1}>
        
        <View style={styles.container}>
          <FormProfile />
          <StatusBar style="auto" />
        </View>
        
      </SafeAreaView>
    </ScrollView> 
   
  );
}

const styles = StyleSheet.create({
  box1:{
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
