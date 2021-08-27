import React from 'react';
import { Field } from 'formik';
import { Text, View } from 'react-native';
import { withFormik } from '../../../components/form/form.hoc';
import { Input } from '../../../components';
import FacebookLogin from '../../../integration/auth/facebook.login';

const LoginFormBody = () => {
    return (
        <>
        <Field name="email" label="Email Address" component={Input}/>
        <Field name="password" label="Password" component={Input}/>
        <FacebookLogin
              title="Join with Facebook"
              onSubmit={(values: any) => console.log(values)}
            />
        </>
    );
}
export default withFormik(LoginFormBody);