import React from 'react';
import PublicScreens from '../routes/public';
import StacksNavigator from '../navigations/stack';
import {HOME, SETTINGS} from '../constants';
import filter from "lodash/filter"
import RoutingConfig from "../../interfaces/routingConfig.interface";


const HomeStack = () => <StacksNavigator pages={filter(PublicScreens,({key})=> key === HOME)} />;
const SettingsStack = () => <StacksNavigator pages={filter(PublicScreens,({key})=> key === SETTINGS)} />;


const PublicStacks:RoutingConfig[] = [
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

export default PublicStacks;
