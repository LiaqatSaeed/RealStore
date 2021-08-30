import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import styled from 'styled-components';
import {Label} from './index';
import colors from '../common/color';

const primary = `border-radius:10px; height:35px; background-color:${colors.primary}; color:${colors.white};`;

interface ButtonProps {
  css?: string;
  is_primary?: Boolean;
}

interface GroupButtonProps {
  url: string;
  label?: string;
  onPress?: any;
  css?: string;
  style?: any;
}

const Button = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  ${({css}: ButtonProps) => css}
  ${({is_primary}: ButtonProps) => is_primary && primary}
`;

const GroupButtonWrapper = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  height:35px;
  align-self: center;
  width: 200px;
  border-radius: 20px;
  background-color: ${colors.white} ${({css}: ButtonProps) => css};
`;

export const GroupButton = ({
  onPress,
  css,
  style,
  url,
  label,
}: GroupButtonProps) => {
  url = url || '../assets/images/google.png';
  console.log('url', url);
  return (
    <GroupButtonWrapper style={style} onPress={onPress} css={css}>
      <Image
        style={{width: 24, height: 24}}
        source={url || require('../assets/images/google.png')}
      />
      {label && (
        <Label
          css={`
            font-size: 14px;
            padding-left: 5px;
            color: ${colors.black};
          `}>
          {label}
        </Label>
      )}
    </GroupButtonWrapper>
  );
};

export default Button;
