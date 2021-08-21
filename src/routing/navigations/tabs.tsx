import  React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import map from "lodash/map"
import RoutingConfig from "../../interfaces/routingConfig.interface"


interface TabsNavigatorProps {
  pages: RoutingConfig[];
}

const Tab = createBottomTabNavigator();

const TabsNavigator:React.FC<TabsNavigatorProps> = ({pages}:TabsNavigatorProps) => {
    console.log(pages)
  return (
    <Tab.Navigator>
        {
            map(pages,(item,index)=>(
                <Tab.Screen key={index} {...item} />
            ))
        }
    </Tab.Navigator>
  );
};

export default TabsNavigator