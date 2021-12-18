import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useUserContext from './hooks/useUserContext';

import WelcomeScreen from './screens/WelcomeScreen';
import SplashScreen from './screens/SplashScreen';
import AppScreen from './screens/AppScreen';
import WriteScreen from './screens/WriteScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const {user} = useUserContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        // initialRouteName="SignInScreen"
        screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="AppScreen" component={AppScreen} />
            <Stack.Screen name="WriteScreen" component={WriteScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              // options={{headerShown: false}}
            />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
