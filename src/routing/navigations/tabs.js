import  React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import map from "lodash/map"

const Tab = createBottomTabNavigator();

const TabsNavigator = ({pages}) => {
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