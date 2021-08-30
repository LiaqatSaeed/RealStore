import React from "react";
import { Text } from "react-native";

interface ErrorMessageProps {
    name: string;
    errors?: any;
    touched?: any;
}

const ErrorMessage = ({ name, errors, touched }: ErrorMessageProps) => {
console.log("ERRORS",errors,touched)
    const hasError = errors[name] && touched[name];
    return hasError ? (
        <Text >{errors[name]}</Text>
    ) : null;
};

export default ErrorMessage;