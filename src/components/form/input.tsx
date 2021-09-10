import React from 'react';
import {TextInput, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import colors from '../../common/color';
import {FONT_FAMILY} from '../../styles';
import {FieldProps, getIn} from 'formik';
import ErrorMessage from "../error.message"

interface InputProps {
  label?: string;
  placeholder?: string;
  field?: any;
  form?: any;
  id?:string
  invalid?:boolean 
}

interface LabelProps {
  indent?: Boolean;
  active?: Boolean;
  css?: string;
}

const StyledInput = styled(TextInput)`
  background-color: white;
  height: 35px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid ${colors.gray_DFE};
  margin-bottom: 5px;
  font-family: ${FONT_FAMILY};
  ${({invalid}: InputProps) => invalid && `border-color:${colors.errorRed}`}
`;

export const Label = styled(Text)`
  ${({indent}: LabelProps) => indent && `padding:10px 20px;`}
  font-size:12px;
  color: ${({active}: LabelProps) =>
    active ? colors.active : colors.text_3D3};
  font-family: ${FONT_FAMILY};
  ${({css}: LabelProps) => css}
`;

const Input = ({
  label,
  field: {name,  value},
  form: {errors, touched,setFieldValue, handleChange, handleBlur, setFieldTouched},
  ...rest
}: InputProps & FieldProps) => {
 
  const invalid = getIn(touched, name) && getIn(errors, name);

  return (
    <SafeAreaView>
      {label && <Label indent={true}>{label}</Label>}
      <StyledInput invalid={invalid} value={value} onBlur={handleBlur} onChangeText={(e)=> setFieldValue(name,e)} id={name} {...rest} />
     {invalid && <ErrorMessage name={name} errors={errors} touched={touched}/>} 
    </SafeAreaView>
  );
};

export default Input;
