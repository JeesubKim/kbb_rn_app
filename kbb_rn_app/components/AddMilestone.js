import React, { useState } from 'react';

import {
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function AddMilestone({ placeholder }) {
  const [value, setValue] = useState('');

  const onPress = () => {
    setValue('');
    Keyboard.dismiss();
  };
  return (
    <View style={style.block}>
      <TextInput
        placeholder={placeholder}
        style={style.input}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={style.buttonStyle}>
          <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
});
export default AddMilestone;
