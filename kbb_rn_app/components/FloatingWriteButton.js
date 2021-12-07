import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Platform, Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingWriteButton({target}) {
  const navigation = useNavigation();
  const onPress = () => {
    if (target) {
      navigation.navigate(target);
    }
  };
  return (
    <View style={style.container}>
      <Pressable
        style={({pressed}) => [
          style.button,
          Platform.OS === 'ios' ? opacity : pressed ? 0.6 : 1,
        ]}
        onPress={onPress}>
        <Icon name="add" size={24} style={style.icon} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 56,
    height: 56,
    borderRadius: 28,

    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f66',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWriteButton;
