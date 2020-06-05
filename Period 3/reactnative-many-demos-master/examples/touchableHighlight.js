import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";



TouchableHighlightExample = () => {

  const [count, setCount] = useState(0)

    return (
      <View style={{  flex: 1, paddingTop: 22}}>

      <TouchableHighlight style={styles.button} onPress={() => setCount(count + 1)}>
        <Text>Touch me!</Text>
      </TouchableHighlight>
      <Text style={styles.countText}>{count}</Text>
      </View>
    );
  }

//https://reactnative.dev/docs/touchablehighlight
export default function TouchableHighlightScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>TouchableHighlight</Text>
      <TouchableHighlightExample />
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countText: {
    fontSize: 28,
    color: "#FF00FF"
  }
})