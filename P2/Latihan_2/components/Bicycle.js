import React from 'react'
import { Image, View, Text } from 'react-native'

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

        <View>
            <Text>Fixie Bike</Text>
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV56C9NNelP3MC0iwRIjLv3yC_cGxahvSl9A&s"}}
            style={{width: 350, height: 350}} />
        </View>
        <View>
            <Text>MTB</Text>
            <Image source={{uri: "https://ae01.alicdn.com/kf/Sa0d62eb510f94b24b3a092fa118a10abX.jpg"}}
            style={{width: 350, height: 350}} ></Image>
        </View>
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