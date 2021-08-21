import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import map from "lodash/map";
import PublicScreens from '../routes/public';

const Stack = createNativeStackNavigator();

const StacksNavigator = ({pages}:any) => {
  return (
    <Stack.Navigator>
        {map(pages,(item :any,index :number)=><Stack.Screen key={index} {...item} />)}
    </Stack.Navigator>
  );
};


export default StacksNavigator