import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicStacks from './stacks/public';
import TabsNavigator from './navigations/tabs';
import StacksNavigator from './navigations/stack';

const Routing =()=>( 
 
    <NavigationContainer>       
      <TabsNavigator pages={PublicStacks}/>
    </NavigationContainer>
  
)

export default Routing;