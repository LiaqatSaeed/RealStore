import React from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import AuthButton from '../../interfaces/auth.interface';
import { withAuth } from './auth.hoc';
import { GroupButton } from '../../components';
import { AuthConsumer } from '../../boot/authProvider';

const url = require("../../assets/images/facebook.png")

const FacebookLogin: React.FC<AuthButton> = ({
  title = 'Facebook Sign-In',
  onSubmit,
  auth
}: AuthButton) => {
  const onFacebookButtonPress = async () => {

    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth["FacebookAuthProvider"].credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      return await auth().signInWithCredential(facebookCredential);
    } catch (error) {

    }
  };

  return (
    <AuthConsumer>
      {({ styles}) => (
      <GroupButton
        url={url}
        label={title}
        style={styles.boxShadow}
        onPress={() => onFacebookButtonPress().then(values => onSubmit(values))}
      />)}
    </AuthConsumer>

  );
};

export default withAuth(FacebookLogin)
