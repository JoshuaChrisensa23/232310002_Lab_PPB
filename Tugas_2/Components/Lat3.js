import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Lat3 = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.upper}>
          <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png"}} style={styles.img}/>
        </View>
        <View style={styles.lower}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Loading...</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  upper: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lower: {
    flex: 3,
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
  }
})

export default Lat3
