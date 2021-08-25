import React from 'react';
import { Text, View ,Button} from 'react-native';
import { HOME } from '../../routing/constants';
import FacebookLogin from '../../integration/auth/facebook.login';
// import GoogleLogin from '../../integration/auth/google.login';

const HomeScreen = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(`${HOME} Details`)}
      />
      <FacebookLogin title="Join with Facebook" onSubmit={(values:any)=> console.log(values)}/>
      {/* <GoogleLogin title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}

    </View>
  );
}
export default HomeScreen;