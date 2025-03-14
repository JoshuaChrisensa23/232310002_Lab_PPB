import React from 'react'
import { View, Text } from 'react-native'

function Bicycle() {
    const city = "South West";
    const people = [{nama: "Joshua", fams:"Brother"},
                    {nama: "Jenny", fams:"Sister"},
                    {nama: "Jasmine", fams:"Sister"},];
  return (
    <View>
        <Text>I'm a bicycle</Text>
        <TakeARide />
        {Place2Go(city)}
    </View>
  )
}

export default Bicycle

const TakeARide = () => {
    return (
        <View><Text>Let's go riding with me</Text></View>
    )
};

function Place2Go(value) {
    return (
        <View><Text>Were going to {value} now, come on!</Text></View>
    )
}