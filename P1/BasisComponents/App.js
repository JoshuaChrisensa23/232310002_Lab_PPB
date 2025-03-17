
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [number, setNum] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Kerja Goblok</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan Gaji Anda"
        value={number}
        onChangeText={setNum}
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.Text}>Gaji Anda: {number / 2}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f51ff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 20,
    color: "#F0FFFF",
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: "80%",
    padding: 10,
    backgroundColor: "#40e0d0",
    borderColor: "#CCCCFF",
    color: "#000",
    borderWidth: 1,
    borderRadius: 12,
    margin: 10,
  },
});
