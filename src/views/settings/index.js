import React from 'react';
import { Text, View, Button } from 'react-native';
import { SETTINGS } from '../../routing/constants';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(`${SETTINGS} Details`)}
      />
    </View>
  );
}
export default SettingsScreen;