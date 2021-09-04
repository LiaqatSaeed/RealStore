import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStacks from './stacks/public';
import PrivateStacks from './stacks/private';
import TabsNavigator from './navigations/tabs';
import StacksNavigator from './navigations/stack';
import AuthStack from './stacks/public';

import {AuthConsumer} from '../boot/authProvider';
const Routing = () => (
  <NavigationContainer>
    <AuthConsumer>
      {({isLoggedIn}) =>
        isLoggedIn ? <TabsNavigator pages={PrivateStacks} /> : <AuthStack />
      }
    </AuthConsumer>
  </NavigationContainer>
);

export default Routing;
