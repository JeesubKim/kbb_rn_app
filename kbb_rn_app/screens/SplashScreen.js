import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import Greetings from '../components/Greetings';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AppScreen');
    }, 2000);
  }, []);
  return (
    <View>
      <Greetings color="hotpink" height="100%" />
    </View>
  );
}

export default SplashScreen;
