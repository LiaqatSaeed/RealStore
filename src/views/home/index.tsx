import React from 'react';
import { Text, View ,Button} from 'react-native';
import { HOME } from '../../routing/constants';

const HomeScreen = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(`${HOME} Details`)}
      />
    </View>
  );
}
export default HomeScreen;