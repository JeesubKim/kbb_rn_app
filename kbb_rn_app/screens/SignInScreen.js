import React, {useState, useRef} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import Greetings from '../components/Greetings';
import useGoogleSignIn, {
  getGoogleSignInContext,
} from '../hooks/useGoogleSignIn';
import Input from '../components/Input';
import Button from '../components/Button';
import {signIn, signUp} from '../lib/auth/auth';
import {firebaseError} from '../lib/error/errors';
import {getUserInfo} from '../lib/db/users';
import useUserContext from '../hooks/useUserContext';
function SignInScreen({navigation, route}) {
  const {signInState, onGoogleButtonPress} = getGoogleSignInContext();
  const {isSignUp} = route.params ?? {};
  const {user, setUser} = useUserContext();
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

  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password, confirmPassword} = form;
    if (isSignUp && password !== confirmPassword) {
      Alert.alert('오류', '비밀번호가 일치하지 않습니다.');
      return;
    }
    const info = {email, password};
    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      const profile = await getUserInfo(user.uid);
      profile
        ? setUser(profile)
        : navigation.navigate('WelcomeScreen', {uid: user.uid});
      console.log(user);
    } catch (e) {
      Alert.alert('오류', firebaseError(e));
    }
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
