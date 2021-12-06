import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

function AppScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Roadmap"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Roadmap" component={HomeScreen} />
      <Tab.Screen name="History" component={HomeScreen} />
      <Tab.Screen name="Company" component={HomeScreen} />
      <Tab.Screen name="Exhibition" component={HomeScreen} />
      <Tab.Screen name="Schdule" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default AppScreen;
