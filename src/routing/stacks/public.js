import React from 'react';
import PublicScreens from '../routes/public';
import StacksNavigator from '../navigations/stack';
import {HOME} from '../constants';

const HomeStack = () => <StacksNavigator pages={PublicScreens} />;

const PublicStacks = [
  {
    name: `${HOME}STACK`,
    component: HomeStack,
    options: {headerShown: false},
  },
];

export default PublicStacks;
