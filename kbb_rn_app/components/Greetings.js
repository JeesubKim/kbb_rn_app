import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Greetings({color, height}) {
  const st = style({color});

  return (
    <View style={[st.container, {height}]}>
      <Image
        style={st.image}
        source={require('../assets/icons/kbb/KBB3.png')}
      />
      <Text style={st.text}>KBB Roadmap</Text>
    </View>
  );
}

const style = props =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.color,
    },
    image: {
      transform: [{rotate: '90deg'}],
    },
    text: {
      backgroundColor: props.color,

      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
export default Greetings;
