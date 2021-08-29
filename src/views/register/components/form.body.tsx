import React from 'react';
import { Field } from 'formik';
import { Text, View } from 'react-native';
import { withFormik } from '../../../components/form/form.hoc';
import { Input } from '../../../components';
import FacebookLogin from '../../../integration/auth/facebook.login';
import { Button, Label } from '../../../components';
import colors from '../../../common/color';
import { AuthConsumer } from '../../../boot/authProvider';

const LoginFormBody = () => {
    return (
        <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Field name="email" label="Email Address" component={Input} />
                        <Field name="password" label="Password" component={Input} />
                        <Field name="confirm_password" label="Confirm Password" component={Input} />
                    </View>
                    <FacebookLogin
                        title="Join with Facebook"
                        onSubmit={(values: any) => console.log(values)}
                    />
                    <Button is_primary css={`margin-top:20px`}>
                        <Label css={`color:${colors.white};font-weight:bold;font-size:14px`}>Create an account</Label>
                    </Button>
                </View>

    );
}
export default withFormik(LoginFormBody);