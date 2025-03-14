import React from 'react'
import { View, Text } from 'react-native'

var name = "Honda";
const types = {type:"Matic", model:"Vario", harga:150000};
const Motorcycle = () => {
  return (
    <View>
      <Text>I'm a motorcycle</Text>
      <Text>Merek: {name}</Text>
      <Text>Type: {types.type}</Text>
      <Text>Model: {types.model}</Text>
      <Text>Harga: {types.harga}</Text>
    </View>
  );
}

export default Motorcycle;