import React from 'react';
import {Button} from 'react-native';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import AuthButton from '../../interfaces/auth.interface';
import {withAuth} from './auth.hoc';

import {GOOGLE_WEB_CLIENT_ID} from "@env";


// GoogleSignin.configure({
//   webClientId: GOOGLE_WEB_CLIENT_ID,
// });

const GoogleLogin: React.FC<AuthButton> = ({
  title = 'Facebook Sign-In',
  onSubmit,
  auth,
}: AuthButton) => {
  async function onGoogleButtonPress() {
    try {
      // Get the users ID token
      //const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      //const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
    //  return await auth().signInWithCredential(googleCredential);
    } catch (error) {
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  }

  return (
    <Button
      title={title}
      onPress={() => onGoogleButtonPress().then(values => onSubmit(values))}
    />
  );
};

export default withAuth(GoogleLogin);
