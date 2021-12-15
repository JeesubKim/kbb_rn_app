import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input({hasMarginBottom, ...props}, ref) {
  return (
    <TextInput
      style={[style.input, hasMarginBottom && style.margin]}
      ref={ref}
      {...props}
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
export default React.forwardRef(Input);
