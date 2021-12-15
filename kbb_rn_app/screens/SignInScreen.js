import React, {useState, useRef} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
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
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  return (
    <KeyboardAvoidingView
      style={style.keyboardAvoidingView}
      bahavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={style.fullscreen}>
        <Greetings height={'100%'} color="hotpink">
          <View style={style.inputForm}>
            <Input
              hasMarginBottom
              placeholder="이메일"
              value={form.email}
              onChangeText={createChangeTextHandler('email')}
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <Input
              ref={passwordRef}
              placeholder="비밀번호"
              hasMarginBottom={isSignUp}
              value={form.password}
              onChangeText={createChangeTextHandler('password')}
              secureTextEntry
              returnKeyType={isSignUp ? 'next' : 'done'}
              onSubmitEditing={() => {
                isSignUp ? confirmPasswordRef.current.focus() : onSubmit();
              }}
            />
            {isSignUp && (
              <Input
                placeholder="비밀번호 확인"
                value={form.confirmPassword}
                onChangeText={createChangeTextHandler('confirmPassword')}
                secureTextEntry
                ref={confirmPasswordRef}
                returnKeyType="done"
                onSubmitEditing={onSubmit}
              />
            )}
            <View style={style.buttons}>
              {isSignUp ? (
                <>
                  <Button title="회원가입" hasMarginBottom onPress={onSubmit} />
                  <Button
                    title="뒤로가기"
                    onPress={() => navigation.goBack()}
                  />
                </>
              ) : (
                <>
                  <Button title="로긴" hasMarginBottom onPress={onSubmit} />
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
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
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
