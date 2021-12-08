import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function TransparentCircleButton({iconName, color, hasMarginRight, onPress}) {
  return (
    <View
      style={[style.iconButtonContainer, hasMarginRight && style.marginRight]}>
      <Pressable
        style={style.iconButton}
        onPress={onPress}
        android_ripple={{color: '#424242'}}>
        <Icon name={iconName} size={32} color={color} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  iconButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  marginRight: {
    marginRight: 8,
  },
});
export default TransparentCircleButton;
