import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Platform,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import {signOut} from '../lib/auth/auth';
import {createUser} from '../lib/db/users';
import Button from './Button';
import Input from './Input';
import useUserContext from '../hooks/useUserContext';
import {launchImageLibrary} from 'react-native-image-picker';

export default function SetupProfile() {
  const [displayName, setDisplayName] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {user, setUser} = useUserContext();
  const {params} = useRoute();
  const {uid} = params || {};

  const onSubmit = async () => {
    setLoading(true);
    let photoURL = null;
    if (image) {
      const asset = image.assets[0];
      const extension = asset.fileName.split('.').pop();
      const reference = storage().ref(`/profile/${uid}.${extension}`);

      if (Platform.OS === 'android') {
        //encoded by base64
        await reference.putString(asset.base64, 'base64', {
          contentType: asset.type,
        });
      } else {
        await reference.putFile(asset.uri); //upload uri directly with ios
      }

      photoURL = image ? await reference.getDownloadURL() : null;
    }
    const userInfo = {
      id: uid,
      displayName,
      photoURL,
    };
    createUser(userInfo);
    setUser(userInfo);
    setLoading(false);
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 512,
        maxWidth: 512,
        includeBase64: Platform.OS === 'android',
      },
      resp => {
        if (resp.didCancel) {
          return;
        }
        setImage(resp);
      },
    );
  };
  return (
    <View style={style.container}>
      <Pressable onPress={onSelectImage}>
        <Image
          style={style.circle}
          source={
            image
              ? {uri: image?.assets[0]?.uri}
              : require('../assets/icons/kbb/KBB3.png')
          }
        />
      </Pressable>

      <View style={style.form}>
        <Input
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />
        {loading ? (
          <ActivityIndicator size={32} color="#6200ee" style={style.spinner} />
        ) : (
          <View style={style.buttons}>
            <Button title="다음" onPress={onSubmit} hasMarginBottom />
            <Button title="취소" onPress={onCancel} />
          </View>
        )}
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
  spinner: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
});
