import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

FlatListBasics = (props) => {
  return (
    <View style={styles.container}>

      <FlatList
        data={props.list}
        renderItem={({item}) => <Text style={styles.item}>
          {item.key}
        </Text>}
      />
    </View>
  );
}

//https://reactnative.dev/docs/using-a-listview
export default function FlatlistScreen() {
  const names = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'}
  ]
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Flatlist Basics</Text>
      <FlatListBasics list={names} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})