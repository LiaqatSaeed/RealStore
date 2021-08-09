import  React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import map from "lodash/map"

const Tab = createBottomTabNavigator();

const TabsNavigator = ({pages}) => {
    console.log(pages)
  return (
    <Tab.Navigator>
        {
            map(pages,(item)=>(
                <Tab.Screen  {...item} />
            ))
        }
    </Tab.Navigator>
  );
};

export default TabsNavigator