import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

Cafe = (props) => {

  

  return (
    <View style={{  flex: 1, paddingTop: 22}}>
    <Text style={{fontSize: 18}}>Drink: {props.name}</Text>
    <Text style={{fontSize: 18}}>Taste: {props.taste}</Text>
    </View>
  );
}

//https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>PropsDemo</Text>
      <Cafe name="latté" taste="Milk" />
      <Cafe name="wienermelange" taste="Chocolate" />
    </View>
  );
}

