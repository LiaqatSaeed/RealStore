import React from 'react';
import { Text, View } from 'react-native';
import LoginFormBody from "./form.body";
import initialValues from './initial.values';
import ValidationSchema from './validation.schema';


const LoginForm = ({onSubmit}:any) => {
  return (
    <View style={{ flex:6,justifyContent:"center" }}>
      <LoginFormBody  onSubmit={onSubmit} initialValues={initialValues} validationSchema={ValidationSchema}/>
    </View>
  );
}
export default LoginForm;