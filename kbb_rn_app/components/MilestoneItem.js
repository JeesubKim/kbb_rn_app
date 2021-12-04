import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MilestoneItem({ id, text, done }) {
  return (
    <View style={style.container}>
      <View style={style.circle} />
      <Text style={style.text}>{text}</Text>
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
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 6,
  },
});

export default MilestoneItem;
