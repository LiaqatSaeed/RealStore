import { Field } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Input } from '../../../components';
import { SubmitButton } from '../../../components/button';
import { withFormik } from '../../../components/form/form.hoc';
import FacebookLogin from '../../../integration/auth/facebook.login';
import RNI18n, { tc } from '../../../localization';

const ForgetPasswordFormBody = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Field name="email" label={tc('email')} component={Input} />
      </View>
      <FacebookLogin
        title={RNI18n.t('common.join_with', { media: 'Facebook' })}
        onSubmit={(values: any) => console.log(values)}
      />

      <SubmitButton
        label="forgot_password"
        onPress={() => { }}
      />
    </View>
  );
};
export default withFormik(ForgetPasswordFormBody);
