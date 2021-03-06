import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";

Cafe = () => {

  const [count, setCount] = useState(0)

  return (
    <View style={{  flex: 1, paddingTop: 22}}>
    <Text style={{fontSize: 18}}>{count}</Text>
    <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
      <Text>Click me!</Text>
    </TouchableOpacity>
    </View>
  );
}

//https://reactnative.dev/docs/touchableopacity
export default function StateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>State Demo</Text>
      <Cafe />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
})

