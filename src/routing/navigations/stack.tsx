import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import map from "lodash/map";
import PublicScreens from '../routes/public';

const Stack = createNativeStackNavigator();

const StacksNavigator = ({pages}) => {
  return (
    <Stack.Navigator>
        {map(pages,(item,index)=><Stack.Screen key={index} {...item} />)}
    </Stack.Navigator>
  );
};


export default StacksNavigator