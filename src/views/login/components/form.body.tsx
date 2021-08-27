import React from 'react';
import { Text, View } from 'react-native';
import { withFormik } from '../../../components/form/form.hoc';

const LoginFormBody = () => {
    return (
        <Text>Formik</Text>
    );
}
export default withFormik(LoginFormBody);