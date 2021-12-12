import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input({hasMarginBottom}) {
  return (
    <TextInput
      style={[style.input, hasMarginBottom && style.margin]}></TextInput>
  );
}

const style = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});
export default Input;
