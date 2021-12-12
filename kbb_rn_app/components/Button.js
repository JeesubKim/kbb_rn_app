import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

function Button({title, onPress, hasMarginBottom}) {
  return (
    <View style={[style.overflow, hasMarginBottom && style.margin]}>
      <Pressable
        style={({pressed}) => [
          style.container,
          Platform.os === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{color: '#ffffff'}}
        onPress={onPress}>
        <Text style={style.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  overflow: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  container: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  margin: {marginBottom: 8},
});
export default Button;
