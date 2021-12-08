import React, {useRef} from 'react';

import {View, StyleSheet, TextInput} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const inputBodyRef = useRef(null);
  return (
    <View style={style.container}>
      <TextInput
        placeholder="로두매푸 제목 입력하소"
        style={style.titleInput}
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          inputBodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="로두매푸 내용을 입력해보이소"
        style={style.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={inputBodyRef}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
