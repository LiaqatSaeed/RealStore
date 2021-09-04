import React from 'react';
import {Text, View} from 'react-native';
import {AuthConsumer} from '../../boot/authProvider';
import colors from '../../common/color';
import {Button, Label} from '../../components';
import {LOGIN} from '../../routing/constants';
import ForgetPasswordForm from './components/form.index';
import RNI18n from '../../localization';


interface ForgetPasswordScreenProps {
  navigation: any;
  onSubmit: Function;
  auth?: any;
}

const ForgetPasswordScreen = ({navigation}: ForgetPasswordScreenProps) => {
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
            <Text style={styles.h1}>{RNI18n.t('forget_password.heading')}</Text>
            <Label>{RNI18n.t('forget_password.description')}</Label>
          </View>

          <ForgetPasswordForm />
  
          <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
              <Label
                css={`
                  font-size: 14px;
                `}>
                Already Have an Account!
              </Label>
              <Button onPress={() => navigation.navigate(LOGIN)}>
                <Label
                  active
                  css={`
                    font-size: 14px;
                    font-weight: bold;
                  `}>
                  {' '}
                  Sign In
                </Label>
              </Button>
            </View>
          </View>

        </View>
      )}
    </AuthConsumer>
  );
};
export default ForgetPasswordScreen;
