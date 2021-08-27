import React from 'react';
import { Text, View } from 'react-native';
import { AuthConsumer } from '../../boot/authProvider';
import colors from '../../common/color';
import { Button, Label } from '../../components';
import { REGISTER } from '../../routing/constants';
import LoginForm from './components/form.index';

// import GoogleLogin from '../../integration/auth/google.login';

interface LoginScreenProps {
  navigation: any;
  onSubmit: Function;
  auth?: any;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <AuthConsumer>
      {({theme, styles}) => (
        <View style={{flex: 1, padding: 10, backgroundColor: colors.bg_F8F}}>
          <View
            style={{
              flex: 1,
              paddingLeft: 15,
              justifyContent: 'flex-end',
              padding: 10,
            }}>
            <Text style={styles.h1}>Login to your account!</Text>
            <Label>
              Good to see you again, enter your details below to continue
              ordering.
            </Label>
          </View>

          <LoginForm />
          <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
         

            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
              <Label
                css={`
                  font-size: 14px;
                `}>
                Dont have an account?
              </Label>
              <Button onPress={() => navigation.navigate(REGISTER)}>
                <Label
                  active
                  css={`
                    font-size: 14px;
                    font-weight: bold;
                  `}>
                  Sign-in with Google
                </Label>
              </Button>
            </View>
          </View>

          {/* <GoogleLogin title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}
        </View>
      )}
    </AuthConsumer>
  );
};
export default LoginScreen;
