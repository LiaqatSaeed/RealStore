import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicStacks from './stacks/public';
import TabsNavigator from './navigations/tabs';
import StacksNavigator from './navigations/stack';
import Test from "../views/test"

export default function App() {
  return (
    <NavigationContainer>       
      <TabsNavigator pages={PublicStacks}/>
    </NavigationContainer>
  );
}