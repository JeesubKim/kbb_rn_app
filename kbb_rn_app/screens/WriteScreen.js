import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
function WriteScreen({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.avoidingview}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader />
        <WriteEditor />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingview: {
    flex: 1,
  },
});
export default WriteScreen;
