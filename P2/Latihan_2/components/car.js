import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

export class car extends Component {
    constructor(props) {
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state = {
            merek:"Toyota",
            types:{type:"Double Cabins", model:"Hilux"}
        };
    }
    
    Come2Go(value){
        return (
            <View>
                <Text>Let's go running away from duty</Text>
                <Text>with us only {value} IDR</Text>
            </View>
        )
    }
    render() {
        return (
            <ScrollView>
                    <View>
                        <Text>I'm a car</Text>
                        <Text>Merek : {this.state.merek}</Text>
                    </View>
                    <View>
                        <Text>Type : {this.state.types.type}</Text>
                        <Text>Model : {this.state.types.model}</Text>
                    </View>
                    {this.Come2Go(200000)}
            </ScrollView>
        );
    }
}

export default car;
