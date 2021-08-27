import React from "react";
import { TouchableOpacity, View, Image } from "react-native"
import styled from "styled-components";
import { Label } from "./index"
import colors from "../common/color"

interface ButtonProps {
    css?: string,

}

interface GroupButtonProps {
    url: string,
    label?: string,
    onPress?: any,
    css?: string,
}

const Button = styled(TouchableOpacity)`
    ${({ css }: ButtonProps) => css}
`;

const GroupButtonWrapper = styled(TouchableOpacity)`
    justify-content:center;
    align-items:center;
   
    padding:10px;
    flex-wrap:wrap;
    background-color:${colors.active}
    ${({ css }: ButtonProps) => css}
`;


export const GroupButton = ({ onPress,css, url , label }: GroupButtonProps) => {
    return (
        <GroupButtonWrapper onPress={onPress} css={css}>
            <Image source={require("../assets/images/google.png")} />
            {label && (<Label css={`font-size:14px; padding-left:5px;color:${colors.black}`}>{label}</Label>)}
        </GroupButtonWrapper>
    )
}


export default Button;
