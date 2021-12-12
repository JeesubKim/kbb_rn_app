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
import SignInScreen from './screens/SignInScreen';
import useGoogleSignIn from './hooks/useGoogleSignIn';

const Stack = createNativeStackNavigator();

function App() {
  const {GoogleSignInContext, signInState, onGoogleButtonPress} =
    useGoogleSignIn();
  return (
    <GoogleSignInContext.Provider value={{signInState, onGoogleButtonPress}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          // initialRouteName="SignInScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            // options={{headerShown: false}}
          />
          <Stack.Screen name="AppScreen" component={AppScreen} />
          <Stack.Screen name="WriteScreen" component={WriteScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GoogleSignInContext.Provider>
  );
}

export default App;
