import React from 'react';
import { Field } from 'formik';
import { Text, View } from 'react-native';
import { withFormik } from '../../../components/form/form.hoc';
import { Input } from '../../../components';
import FacebookLogin from '../../../integration/auth/facebook.login';
import { SubmitButton } from '../../../components/button';
import colors from '../../../common/color';
import { AuthConsumer } from '../../../boot/authProvider';
import RNI18n, { tc } from '../../../localization';

const LoginFormBody = ({}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Field name="email" label={tc('email')} component={Input} />
                <Field name="password" label={tc('password')} component={Input} />
                <Field
                    name="confirm_password"
                    label="Confirm Password"
                    component={Input}
                />
            </View>
            <FacebookLogin
                title={RNI18n.t('common.join_with', { media: 'Facebook' })}
                onSubmit={(values: any) => console.log(values)}
            />
            <SubmitButton
                label="register"
                onPress={() => { }}
            />
        </View>
    );
};
export default withFormik(LoginFormBody);
