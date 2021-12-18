import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';
import {signOut} from '../lib/auth/auth';
import {createUser} from '../lib/db/users';
import Button from './Button';
import Input from './Input';
import useUserContext from '../hooks/useUserContext';

export default function SetupProfile() {
  const [displayName, setDisplayName] = useState();
  const navigation = useNavigation();
  const {user, setUser} = useUserContext();
  const {params} = useRoute();
  const {uid} = params || {};

  const onSubmit = () => {
    const userInfo = {
      id: uid,
      displayName,
      photoURL: null,
    };
    createUser(userInfo);
    setUser(userInfo);
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };
  return (
    <View style={style.container}>
      <View style={style.circle} />
      <View style={style.form}>
        <Input
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />

        <View style={style.buttons}>
          <Button title="다음" onPress={onSubmit} hasMarginBottom />
          <Button title="취소" onPress={onCancel} />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {
    marginTop: 16,
    width: '100%',
  },
  buttons: {
    marginTop: 48,
  },
});
