import React, { useEffect, useState, } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


FetchDemo = () => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);



  useEffect(() => {

    const myFetcher = async () => {
      try {
        let response = await fetch('https://reactnative.dev/movies.json')
        let json = await response.json()
        setData(json.movies)
  
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    
    myFetcher()
 

  }, [])



  return (
    <View style={{  flex: 1, paddingTop: 22}}>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <Text>{item.title}, {item.releaseYear}</Text>
        )}
        />
      )}

    {/* <Text style={{fontSize: 18}}>Change me to demonstrate basic use of Fetch</Text>
    <Text style={{fontSize: 18}}>And IMPORTANT, also useEffect and useState</Text> */}
    </View>
  );
}

//https://reactnative.dev/docs/network
export default function HttpViewScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Fetch Demo</Text>
      <FetchDemo />
    </View>
  );
}