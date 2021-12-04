import React from 'react';

import { FlatList, View, StyleSheet } from 'react-native';
import MilestoneItem from './MilestoneItem';

function Milestones({ milestones }) {
  return (
    <FlatList
      style={style.list}
      data={milestones}
      ItemSeparatorComponent={() => <View style={style.separator} />}
      renderItem={({ item }) => {
        return <MilestoneItem id={item.id} text={item.text} done={item.done} />;
      }}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const style = StyleSheet.create({
  list: {
    // justifyContent: 'flex-start',
    // flex: 1,
  },
  text: {
    color: 'black',
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default Milestones;
