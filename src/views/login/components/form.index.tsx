import React from 'react';
import { Text, View } from 'react-native';
import LoginFormBody from "./form.body";
import initialValues from './initial.values';


const LoginForm = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LoginFormBody onSubmit={()=>{}} initialValues={initialValues}/>
    
    </View>
  );
}
export default LoginForm;