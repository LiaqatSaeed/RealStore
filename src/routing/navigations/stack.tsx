import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import map from "lodash/map";
import PublicScreens from '../routes/public';
import RoutingConfig from "../../interfaces/routingConfig.interface"

interface StacksNavigatorProps {
  pages: RoutingConfig[];
}

const Stack = createNativeStackNavigator();

const StacksNavigator:React.FC<StacksNavigatorProps> = ({pages}:StacksNavigatorProps) => {
  return (
    <Stack.Navigator>
        {map(pages,(item,index)=><Stack.Screen key={index} {...item} />)}
    </Stack.Navigator>
  );
};


export default StacksNavigator