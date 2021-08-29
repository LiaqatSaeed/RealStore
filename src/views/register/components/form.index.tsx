import React from 'react';
import { Text, View } from 'react-native';
import LoginFormBody from "./form.body";
import initialValues from './initial.values';


const LoginForm = () => {
  return (
    <View style={{ flex:6,justifyContent:"center" }}>
      <LoginFormBody  onSubmit={()=>{}} initialValues={initialValues}/>
    </View>
  );
}
export default LoginForm;