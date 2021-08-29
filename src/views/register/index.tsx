
import React from 'react';
import { Text, View } from 'react-native';
import { AuthConsumer } from '../../boot/authProvider';
import colors from '../../common/color';
import { Button, Label } from '../../components';
import { LOGIN } from '../../routing/constants';
import RegisterForm from './components/form.index';

// import GoogleRegister from '../../integration/auth/google.Register';

interface RegisterScreenProps {
    navigation: any;
    onSubmit: Function;
    auth?: any;
}

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
    return (
        <AuthConsumer>
            {({ styles }) => (
                <View style={{ flex: 1, padding: 10, backgroundColor: colors.bg_F8F }}>
                    <View
                        style={{
                            flex: 2,
                            paddingLeft: 15,
                            justifyContent: 'flex-end',
                            padding: 10,
                        }}>
                        <Text style={styles.h1}>Create an account!</Text>
                        <Label>
                            Welcome friend, enter your details so lets get started in ordering food.
                        </Label>
                    </View>

                    <RegisterForm />
                    <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>


                        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
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
                                    {" "}Sign In
                                </Label>
                            </Button>
                        </View>
                    </View>

                    {/* <GoogleRegister title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}
                </View>
            )}
        </AuthConsumer>
    );
};
export default RegisterScreen;
