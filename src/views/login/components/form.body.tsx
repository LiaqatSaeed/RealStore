import React from 'react';
import {Field} from 'formik';
import {Text, View} from 'react-native';
import {withFormik} from '../../../components/form/form.hoc';
import {Input} from '../../../components';
import FacebookLogin from '../../../integration/auth/facebook.login';
import {Button, Label} from '../../../components';
import colors from '../../../common/color';
import {AuthConsumer} from '../../../boot/authProvider';
import {HOME} from '../../../routing/constants';
import RNI18n, {tc} from '../../../localization';
import {SubmitButton} from '../../../components/button';

const LoginFormBody = ({handleSubmit}: any) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Field name="email" keyboardType="email-address" autoCapitalize={false} label={tc('email')} component={Input} />
        <Field name="password"  secureTextEntry label={tc('password')} component={Input} />
      </View>
      <FacebookLogin
        title={RNI18n.t('common.join_with', {media: 'Facebook'})}
        onSubmit={(values: any) => console.log(values)}
      />
      <SubmitButton label="login" onPress={handleSubmit} />
    </View>
  );
};
export default withFormik(LoginFormBody);
