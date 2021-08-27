import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {REGISTER} from '../../routing/constants';
import FacebookLogin from '../../integration/auth/facebook.login';
import { TEST } from '@env';
import {AuthConsumer} from "../../boot/authProvider"
// import GoogleLogin from '../../integration/auth/google.login';

interface LoginScreenProps {
  navigation: any;
  onSubmit: Function;
  auth?: any;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (

    <AuthConsumer>
      {({theme, styles}) =>(
          <View style={{flex: 1, padding:10, backgroundColor:"#E4E6E7"}}>
          <Text style={styles.h1}>Login to your account!</Text>
          <Text>
          Good to see you again, enter your details below to continue ordering.
          </Text>
          <FacebookLogin
            title="Join with Facebook"
            onSubmit={(values: any) => console.log(values)}
          />
          
         <View >
             <Text>Dont have an account?</Text>
             <Button title="Sign Up" onPress={() => navigation.navigate(REGISTER)} />
         </View>
          {/* <GoogleLogin title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}
        </View>
      )
      }
    </AuthConsumer>
    
  );
};
export default LoginScreen;
