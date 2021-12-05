import React from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MilestoneItem({id, text, done, onToggle, onRemove}) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          if (onToggle) onToggle(id);
        }}>
        <View style={[style.circle, done && style.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>

      <Text style={[style.text, done && style.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity
          onPress={() => {
            if (onRemove) {
              onRemove(id);
            }
          }}>
          <Icon name="delete" size={32} color="pink" />
        </TouchableOpacity>
      ) : (
        <View style={style.removePlaceholder} />
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 6,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default MilestoneItem;
