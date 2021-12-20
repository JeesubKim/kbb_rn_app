import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import Greetings from '../components/Greetings';
import {getGoogleSignInContext} from '../hooks/useGoogleSignIn';
import useUserContext from '../hooks/useUserContext';

function SplashScreen({navigation}) {
  const {signInState} = getGoogleSignInContext();
  const {user} = useUserContext();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(user ? 'AppScreen' : 'SignInScreen');
    }, 2000);
  }, []);
  return (
    <View>
      <Greetings color="hotpink" height="100%" />
    </View>
  );
}

export default SplashScreen;
