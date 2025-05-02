import React from 'react';
import { ScrollView } from 'react-native';
import ItemUser from '../data/ItemUser';

const ExpScroll = ({ User }) => {
    return (
        <ScrollView>
          {User.map((v, index) => (
            <ItemUser item={v} key={index} />
          ))}
        </ScrollView>
    );
}

export default ExpScroll;
