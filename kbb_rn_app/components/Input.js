import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input({hasMarginBottom, onChangeText, value, placeholder}) {
  return (
    <TextInput
      style={[style.input, hasMarginBottom && style.margin]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
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
