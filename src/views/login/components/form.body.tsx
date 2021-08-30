import React from 'react';
import { Field } from 'formik';
import { Text, View } from 'react-native';
import { withFormik } from '../../../components/form/form.hoc';
import { Input } from '../../../components';
import FacebookLogin from '../../../integration/auth/facebook.login';
import { Button, Label } from '../../../components';
import colors from '../../../common/color';
import { AuthConsumer } from '../../../boot/authProvider';
import RNI18n,{tc} from "../../../localization"

const LoginFormBody = (props:any) => {
    const{handleSubmit} = props;
    console.log('LOGIN PROPS',props)
    return (
        <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Field name="email" label={tc("email")} component={Input} />
                        <Field name="password" label={tc("password")} component={Input} />
                    </View>
                    <FacebookLogin
                        title={RNI18n.t("common.join_with",{media:"Facebook"})}
                        onSubmit={(values: any) => console.log(values)}
                    />
                    <Button is_primary css={`margin-top:20px`}>
                        <Label css={`color:${colors.white};font-weight:bold;font-size:14px`}>{tc("login")}</Label>
                    </Button>
                </View>

    );
}
export default withFormik(LoginFormBody);