import React from 'react';

import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SetupProfile from '../components/SetupProfile';

function WelcomeScreen({navigation}) {
  return (
    <KeyboardAvoidingView
      style={style.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={style.container}>
        <Text style={style.title}> 어서오수깡! </Text>
        <Text style={style.description}> 후로필 설정하이소 </Text>
        <SetupProfile />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 48},
  description: {marginTop: 16, fontSize: 21, color: '#757575'},
});
export default WelcomeScreen;
