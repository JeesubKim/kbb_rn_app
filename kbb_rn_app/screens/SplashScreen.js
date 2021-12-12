import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import Greetings from '../components/Greetings';
import {getGoogleSignInContext} from '../hooks/useGoogleSignIn';

function SplashScreen({navigation}) {
  const {signInState} = getGoogleSignInContext();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(signInState ? 'AppScreen' : 'SignInScreen');
    }, 2000);
  }, []);
  return (
    <View>
      <Greetings color="hotpink" height="100%" />
    </View>
  );
}

export default SplashScreen;
