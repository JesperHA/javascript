import React from 'react';
import { View, Text } from 'react-native';

FlexDirectionBasics = () => {
  return (
    <View style={{  flex: 1, paddingTop: 22}}>
      <View>
      <Text style={{fontSize: 18}}>nr. 1</Text>
      </View>
      <View>
      <Text style={{fontSize: 18}}>nr. 2</Text>
      </View>
      <View>
      <Text style={{fontSize: 18}}>nr. 3</Text>
      </View>
      <View style={{  flex: 1, paddingTop: 22, flexDirection: "row"}}>
      <View>
      <Text style={{fontSize: 18}}>nr. 1 </Text>
      </View>
      <View>
      <Text style={{fontSize: 18}}>nr. 2 </Text>
      </View>
      <View>
      <Text style={{fontSize: 18}}>nr. 3 </Text>
      </View>
      </View>

    </View>

  );
}

//https://reactnative.dev/docs/flexbox#flex-direction
export default function FlexDirectionScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:24}}>Flex Direction</Text>
      <FlexDirectionBasics />
    </View>
  );
}