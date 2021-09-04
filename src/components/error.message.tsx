import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import colors from "../common/color";
import {getIn} from "formik"

const Error = styled(Text)`
font-size: 10px;
color: ${colors.errorRed};
padding-left: 20px;
`

interface ErrorMessageProps {
    name: string;
    errors?: any;
    touched?: any;
}

const ErrorMessage = ({ name, errors, touched }: ErrorMessageProps) => {
 
const hasError = getIn(touched, name) && getIn(errors, name);
    //onst hasError = errors[name] && touched[name];
    return hasError ? (
        <Error >{getIn(errors, name)}</Error>
    ) : null;
};

export default ErrorMessage;