/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppScreen from './screens/AppScreen';
import WriteScreen from './screens/WriteScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="WriteScreen" component={WriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
