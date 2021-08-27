import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { HOME } from '../../routing/constants';
import FacebookLogin from '../../integration/auth/facebook.login';
// import GoogleLogin from '../../integration/auth/google.login';


interface ForgetPasswordScreenProps {
    navigation: any;
    onSubmit: Function;
    auth?: any;
}


const ForgetPasswordScreen = ({ navigation }: ForgetPasswordScreenProps) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Forget Password!</Text>
            <FacebookLogin
                title="Join with Facebook"
                onSubmit={(values: any) => console.log(values)}
            />
            {/* <GoogleLogin title="Join with Google" onSubmit={(values:any)=> console.log(values)}/> */}
        </View>
    );
};
export default ForgetPasswordScreen;
