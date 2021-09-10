import React from 'react';
import {Text, Image} from 'react-native';
import styled, {ThemeConsumer} from 'styled-components';
import colors from '../common/color';
import {getIn} from 'formik';
import {Label} from '.';

interface ThumbCardProps {
  title?: string;
  url?: string;
  active?: boolean;
}

const Wrapper = styled(Text)`
  height: 109px;
  width: 82px;
  border-radius: 50px;
  background-color: ${({active}: ThumbCardProps) =>
    active ? colors.white : colors.transparent};
  border: ${({active}: ThumbCardProps) =>
    active ? `1px solid ${colors.activeGreen}` : `1px solid ${colors.bg_E4E}`};
`;

const WrapperBody = styled(Text)`
  height: 109px;
  width: 82px;
  border-radius: 50px;
  background-color: ${colors.white};
`;

const ThumbCard = ({title, url, active}: ThumbCardProps) => {
  return (
    <Wrapper active={active}>
      <WrapperBody>
        <Image
          style={{width: 24, height: 24}}
          source={url || require('../assets/images/google.png')}
        />
        <Label>Burger</Label>
      </WrapperBody>
    </Wrapper>
  );
};

export default ThumbCard;
