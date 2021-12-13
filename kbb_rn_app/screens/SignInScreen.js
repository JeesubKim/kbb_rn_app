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
function SignInScreen({navigation, route}) {
  const {signInState, onGoogleButtonPress} = getGoogleSignInContext();
  const {isSignUp} = route.params ?? {};
  return (
    <SafeAreaView style={style.fullscreen}>
      <Greetings height={'100%'} color="hotpink">
        <View style={style.inputForm}>
          <Input hasMarginBottom placeholder="이메일" />
          <Input placeholder="비밀번호" hasMarginBottom={isSignUp} />
          {isSignUp && <Input placeholder="비밀번호 확인" />}
          <View style={style.buttons}>
            {isSignUp ? (
              <>
                <Button title="회원가입" hasMarginBottom />
                <Button title="뒤로가기" onPress={() => navigation.goBack()} />
              </>
            ) : (
              <>
                <Button title="로긴" hasMarginBottom />
                <Button
                  title="회원가입"
                  onPress={() =>
                    navigation.push('SignInScreen', {isSignUp: true})
                  }
                />
              </>
            )}
          </View>
          {!isSignUp && (
            <GoogleSigninButton
              style={style.googleSigninButton}
              onGoogleButtonPress={onGoogleButtonPress}
            />
          )}
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
    marginTop: 24,
  },
});

export default SignInScreen;
