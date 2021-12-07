import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HistoryScreen from './HistoryScreen';
import ScheduleScreen from './ScheduleScreen';
import ExhibitionScreen from './ExhibitionScreen';
import CompanyScreen from './CompanyScreen';

const Tab = createBottomTabNavigator();

function AppScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Roadmap"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Roadmap"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="road" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Company"
        component={CompanyScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="building-o" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exhibition"
        component={ExhibitionScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="image" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Schdule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppScreen;
