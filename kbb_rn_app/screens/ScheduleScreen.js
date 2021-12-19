import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import useUserContext from '../hooks/useUserContext';

function ScheduleScreen({navigation}) {
  const {user, setUser} = useUserContext();

  return (
    <View>
      {user.photoURL && (
        <Image
          source={{uri: user.photoURL}}
          style={style.photo}
          resizeMode="cover"
        />
      )}
      <Text>ScheduleScreen</Text>
    </View>
  );
}
const style = StyleSheet.create({
  photo: {
    width: 128,
    height: 128,
    marginBottom: 16,
    borderRadius: 64,
  },
});
export default ScheduleScreen;
