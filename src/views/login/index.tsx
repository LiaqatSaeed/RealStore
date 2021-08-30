import React from 'react';
import { Text, View } from 'react-native';
import { AuthConsumer } from '../../boot/authProvider';
import colors from '../../common/color';
import { Button, Label } from '../../components';
import { REGISTER } from '../../routing/constants';
import LoginForm from './components/form.index';
import RNI18n,{tc} from "../../localization"

// import GoogleLogin from '../../integration/auth/google.login';

interface LoginScreenProps {
  navigation: any;
  onSubmit: Function;
  auth?: any;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  return (
    <AuthConsumer>
      {({styles}) => (
        <View style={{flex: 1, padding: 10, backgroundColor: colors.bg_F8F}}>
          <View
            style={{
              flex: 2,
              paddingLeft: 15,
              justifyContent: 'flex-end',
              padding: 10,
            }}>
            <Text style={styles.h1}>{RNI18n.t("login.heading")}</Text>
            <Label>
              {RNI18n.t("login.description")}
            </Label>
          </View>

          <LoginForm />
          <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
         

            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
              <Label
                css={`
                  font-size: 14px;
                `}>
                {tc("no_account")}
              </Label>
              <Button onPress={() => navigation.navigate(REGISTER)}>
                <Label
                  active
                  css={`
                    font-size: 14px;
                    font-weight: bold;
                  `}>
                  {" "}{tc("register")}
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
