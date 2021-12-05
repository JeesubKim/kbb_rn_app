import React, {useEffect} from 'react';

import {View, Text} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View>
      <Text>SplashScreen!</Text>
    </View>
  );
}

export default SplashScreen;
