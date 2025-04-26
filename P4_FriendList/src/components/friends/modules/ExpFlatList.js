import React from 'react'
import { FlatList } from 'react-native'
import Users from '../../const-data/Users.js'
import UserItems from '../../const-data/UserItems.js'

const ExpFlatList = () => {
  return (
    <FlatList data={Users} renderItem={({item}) => <UserItems item={item}/>} />
  )
}

export default ExpFlatList
