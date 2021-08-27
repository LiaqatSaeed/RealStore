import React from "react";
import { TextInput, Text, SafeAreaView } from "react-native";
import styled from "styled-components";
import colors from "../../common/color"
import { FONT_FAMILY } from "../../styles"

interface InputProps {
    label?: string;
    placeholder?: string;
}

interface LabelProps {
    indent?: Boolean;
    active?: Boolean;
    css?: string
}


const StyledInput = styled(TextInput)`
    background-color:white;
    height:50;
    padding:10px 20px;
    border-radius:15px;
    border:1px solid ${colors.gray_DFE};
    margin-bottom: 5px;
    font-family:${FONT_FAMILY};
`;

export const Label = styled(Text)`
  ${({ indent }: LabelProps) => indent && `padding:10px 20px;`}  
    font-size:12px;
    color:${({ active }: LabelProps) => active ? colors.active : colors.text_3D3};
    font-family:${FONT_FAMILY};
     ${({ css }: LabelProps) => css}
`;

const Input = ({ label, ...rest }: InputProps) => {

    return (
        <SafeAreaView>
            {label && <Label indent={true}>{label}</Label>}
            <StyledInput
                {...rest}
            />
        </SafeAreaView>
    );
};

export default Input;
