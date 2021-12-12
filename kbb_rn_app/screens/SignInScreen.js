import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import Greetings from '../components/Greetings';
import useGoogleSignIn, {
  getGoogleSignInContext,
} from '../hooks/useGoogleSignIn';
import Input from '../components/Input';
import Button from '../components/Button';
function SignInScreen({navigation}) {
  const {signInState, onGoogleButtonPress} = getGoogleSignInContext();
  return (
    <SafeAreaView style={style.fullscreen}>
      <Greetings height={'100%'} color="hotpink">
        <View style={style.inputForm}>
          <Input hasMarginBottom />
          <Input />
          <View style={style.buttons}>
            <Button title="로긴" hasMarginBottom />
            <Button title="가입" />
          </View>
          <GoogleSigninButton
            style={style.googleSigninButton}
            onGoogleButtonPress={onGoogleButtonPress}
          />
        </View>
      </Greetings>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  fullscreen: {flex: 1, alignItems: 'stretch'},
  googleSigninButton: {
    marginTop: 16,
    width: '100%',
  },
  inputForm: {
    width: '100%',
    marginTop: 64,
    paddingHorizontal: 48,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 64,
  },
});

export default SignInScreen;
