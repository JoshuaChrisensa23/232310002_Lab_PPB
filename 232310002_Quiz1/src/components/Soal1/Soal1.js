import React from 'react'
import { ScrollView, Text, SafeAreaView } from 'react-native'
import Profil1 from './Profil1'
import Profil2 from './Profil2'

function Soal1() {
  return (
    <SafeAreaView >
      <ScrollView>
        <Text style={{textAlign: 'center', 
          fontSize: 20, 
          fontWeight: 'bold'}}>RFC</Text>
        <Profil1 />
        <Text style={{textAlign: 'center', 
          fontSize: 20, 
          fontWeight: 'bold'}}>RCC</Text>
        <Profil2 />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Soal1
