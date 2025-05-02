import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import SearchBar from "./widgets/SearchBar";
import ExpScrollView from "./modules/ExpScrollView";
import { Users } from "../const-data/Users";
import ExpSectionList from "./modules/ExpSectionList";
import { TouchableOpacity, Text } from "react-native";

const MyFriends = ({ navigation }) => {

  const handleBack = () => {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <View style={styles.body}>\
        {/* <ExpScrollView Users = {Users} /> */}
        <ExpSectionList Users = {Users} />
      </View>
      <TouchableOpacity  style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>H.O.M.E</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5C0BF",
  },
  header: {
    flex: 1,
    backgroundColor: "pink",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  body: {
    flex: 10,
    backgroundColor: "salmon",
  },
});

export default MyFriends;
