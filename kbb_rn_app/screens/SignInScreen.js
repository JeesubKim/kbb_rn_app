import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import Greetings from '../components/Greetings';
import useGoogleSignIn, {
  getGoogleSignInContext,
} from '../hooks/useGoogleSignIn';
function SignInScreen({navigation}) {
  const {signInState, onGoogleButtonPress} = getGoogleSignInContext();
  return (
    <SafeAreaView style={style.fullscreen}>
      <Greetings height={'100%'} color="hotpink">
        <GoogleSigninButton
          style={style.googleSigninButton}
          onGoogleButtonPress={onGoogleButtonPress}
        />
      </Greetings>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  fullscreen: {flex: 1, alignItems: 'stretch'},
  googleSigninButton: {
    marginTop: 16,
  },
});

export default SignInScreen;
