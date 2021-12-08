import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader() {
  const nagivation = useNavigation();
  const onGoBack = () => {
    nagivation.pop();
  };
  return (
    <View style={style.container}>
      <View>
        <TransparentCircleButton
          iconName="arrow-back"
          color="#424242"
          onPress={onGoBack}
        />
      </View>

      <View style={style.buttons}>
        <TransparentCircleButton
          iconName="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransparentCircleButton
          iconName="check"
          color="#009688"
          hasMarginRight
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default WriteHeader;
