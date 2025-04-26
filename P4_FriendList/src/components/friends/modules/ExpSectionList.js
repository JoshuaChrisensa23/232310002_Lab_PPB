import React from 'react'
import { SectionList, Text } from 'react-native'
import UserItems from '../../const-data/UserItems'
import Users from '../../const-data/Users'

const ExpSectionList = () => {
    const data = [
        {title: "Suggested", data: Users},
        {title: "Followers", data: Users}
    ]
  return (
    <SectionList sections={data} renderItem={({item}) => <UserItems item={item}/>}
    renderSectionHeader={({section: {title}}) => (<Text style={{color:"white"}}>{title}</Text>)}/>
  )
}

export default ExpSectionList
