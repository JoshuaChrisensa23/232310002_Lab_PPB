import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native';

export function Project() {
    const [GMText, setGMText] = React.useState("");
    const [Name, setName] = React.useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Hi Guys</Text>
            <Text style={styles.txt}>Leave some Message, or Greetings</Text>
            <View style={styles.Input}>
                <Text style={[styles.inp, styles.mess]}>Message: </Text>
                <TextInput style={styles.textinput} placeholder='Greetings' value={GMText}onChangeText={setGMText}></TextInput>
                <Text style={[styles.inp, styles.from]}>From: </Text>
                <TextInput style={styles.textinput} placeholder='Your Name' value={Name}onChangeText={setName}></TextInput>
                
            </View>
            {card(GMText, Name)}
        </View>
    )
}

export default Project;

function card(GMText, Name) {
    return (
        <View style={styles.Message}>
            
            <Text style={styles.OName}>Thanks For This Message: {Name}</Text>
            <Text style={styles.OMess}>The Message: {GMText}</Text>
            <Text style={styles.Otxt}>Have a Nice Day</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#A5A8E0',
    borderRadius: 16,
    alignItems: 'center',
    padding: 12,
  },

  Input:{
    alignContent: 'justify',
    justifyContent: 'justify',
  },

  head: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },

  txt: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },

  inp:{
    padding: 10,
    color: '#000',
  },

  mess:{
    fontSize: 17,
    fontWeight: 'bold',
  },

  from:{
    fontSize: 16,
    fontWeight: 'bold',
  },

  textinput:{
    borderRadius: 8,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },

  Message: {
    width: 300,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
  },

  OName: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'Justify',
    marginTop: 10,
  },

  OMess: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 5,
    marginBottom: 15,
  },

  Otxt: {
    fontSize: 13,
    textAlign: 'center',
  }
});

