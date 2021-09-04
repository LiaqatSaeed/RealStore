import React from 'react';
import PrivateScreens from '../routes/private';
import StacksNavigator from '../navigations/stack';
import {HOME, SETTINGS} from '../constants';
import filter from "lodash/filter"

const HomeStack = () => <StacksNavigator pages={filter(PrivateScreens,({key})=> key === HOME)} />;
const SettingsStack = () => <StacksNavigator pages={filter(PrivateScreens,({key})=> key === SETTINGS)} />;


const PrivateStacks = [
  {
    name: HOME,
    component: HomeStack,
    options: {headerShown: false},
  },
  {
    name: SETTINGS,
    component: SettingsStack,
    options: {headerShown: false},
  },
];

export default PrivateStacks;
