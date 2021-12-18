/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useGoogleSignIn from './hooks/useGoogleSignIn';
import useUserContext, {UserContextProvider} from './hooks/useUserContext';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

function App() {
  const {GoogleSignInContext, signInState, onGoogleButtonPress} =
    useGoogleSignIn();
  return (
    <UserContextProvider>
      <GoogleSignInContext.Provider value={{signInState, onGoogleButtonPress}}>
        {/* //GoogleSignInContext has to be located inside of UserContextProvider */}
        <Navigation />
      </GoogleSignInContext.Provider>
    </UserContextProvider>
  );
}

export default App;
