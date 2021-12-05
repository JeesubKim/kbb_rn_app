import React, {useContext} from 'react';

import {FlatList, View, StyleSheet, Alert} from 'react-native';
import {Context} from '../App';
import MilestoneItem from './MilestoneItem';

function Milestones({milestones}) {
  const {setMilestones} = useContext(Context);
  const onToggleItem = id => {
    setMilestones(
      milestones.map(item =>
        item.id === id ? {...item, done: !item.done} : item,
      ),
    );
  };
  const onRemoveItem = id => {
    Alert.alert(
      '삭제',
      '정말로 삭제할꺼?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            setMilestones(milestones.filter(item => item.id != id));
          },
          style: 'destructive',
        },
      ],
      {cancelable: true, onDismiss: () => {}},
    );
  };
  return (
    <FlatList
      style={style.list}
      data={milestones}
      ItemSeparatorComponent={() => <View style={style.separator} />}
      renderItem={({item}) => {
        return (
          <MilestoneItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggleItem}
            onRemove={onRemoveItem}
          />
        );
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
