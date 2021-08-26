import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {HOME} from '../../routing/constants';
import FacebookLogin from '../../integration/auth/facebook.login';
// import GoogleLogin from '../../integration/auth/google.login';

interface LoginScreenProps {
  navigation: any;
  onSubmit: Function;
  auth?: any;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <View style={{flex: 1}}>
      <Text>Login to your account!</Text>
      <Text>
      Good to see you again, enter your details below to continue ordering.
      </Text>
      <FacebookLogin
        title="Join with Facebook"
        onSubmit={(values: any) => console.log(values)}
      />
      <Button title="C" onPress={() => getAllUsers()} />

      {/* <GoogleLogin title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}
    </View>
  );
};
export default LoginScreen;
