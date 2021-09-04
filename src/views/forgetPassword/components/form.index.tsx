import React from 'react';
import { Text, View } from 'react-native';
import ForgetPasswordFormBody from "./form.body";
import initialValues from './initial.values';


const ForgetPasswordFormForm = () => {
  return (
    <View style={{ flex:6,justifyContent:"center" }}>
      <ForgetPasswordFormBody  onSubmit={()=>{}} initialValues={initialValues}/>
    </View>
  );
}
export default ForgetPasswordFormForm;