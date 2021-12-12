import {useEffect, useState, useContext, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const GoogleSignInContext = createContext(null);
export const getGoogleSignInContext = () => useContext(GoogleSignInContext);
function useGoogleSignIn() {
  const [signInState, setSignInState] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '197135800839-gs1gnmu2fr3g0dq1f86gjhhv0rbrsln4.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignIn.signIn(); // login to google and acquire idToken
    const googleCredential = auth.GoogleAuthProvider.credential(idToken); //generate google credential using idToken
    return auth().signInWithCredential(googleCredential); //let user login using generated credential
  }

  auth().onAuthStateChanged(user => setSignInState(user ? true : false));
  return {
    GoogleSignInContext,
    signInState,
    onGoogleButtonPress,
  };
}

export default useGoogleSignIn;
