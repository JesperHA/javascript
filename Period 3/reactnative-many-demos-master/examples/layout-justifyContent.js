import React from 'react';
import { View, Text } from 'react-native';


JustifyContentBasics = () => {
  return (
    <View style={{  flex: 1, paddingTop: 22, flexDirection: "column", justifyContent: "space-around"}}>
      <View>
      <Text style={{fontSize: 18}}>nr1</Text>
      </View>      
      <View>
      <Text style={{fontSize: 18}}>nr2</Text>
      </View>      
      <View>
      <Text style={{fontSize: 18}}>nr3</Text>
      </View>
    </View>
  );
}


//https://reactnative.dev/docs/flexbox#justify-content
export default function JustifyContentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Justify Content</Text>
      <JustifyContentBasics />
    </View>
  );
}