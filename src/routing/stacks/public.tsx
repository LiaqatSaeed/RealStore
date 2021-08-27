import React from 'react';
import PublicScreens from '../routes/public';
import StacksNavigator from '../navigations/stack';

const AuthStack = () => <StacksNavigator pages={PublicScreens} />;

export default AuthStack;
