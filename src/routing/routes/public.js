import React from 'react';
import HomeScreen from '../../views/home';
import StacksNavigator from '../navigations/stack';
import {HOME} from '../constants';

const HomeStack = ()=> <StacksNavigator pages={PublicScreens}/>

const PublicScreens = [
  {
    name: HOME,
    component: HomeScreen,
  },
];

const PublicStacks = [
    {
        name: HOME,
        component: HomeStack,
      },
]

export default PublicScreens;
