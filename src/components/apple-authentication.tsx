import * as AppleAuthentication from 'expo-apple-authentication';
import { Platform } from 'react-native';
import { supabase } from '../utils/supabase';

const AppleAuthenticationButton = () => {
  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (!credential.identityToken) {
        throw new Error('No identityToken returned from Apple.');
      }

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'apple',
        token: credential.identityToken,
      });

      if (error) throw new Error(error.message);

      // user is signed in
      return {
        user: data.user,
        session: data.session,
      };
    } catch (e: any) {
      if (e.code === 'ERR_REQUEST_CANCELED') {
        // handle that the user canceled the sign in flow
        console.log('user cancelled sign in');
      } else {
        // handle other errors
        console.error(e.message);
      }
    }
  };

  if (Platform.OS === 'ios') {
    return (
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 64 }}
        onPress={handleAppleSignIn}
      ></AppleAuthentication.AppleAuthenticationButton>
    );
  }
  return <></>
};

export default AppleAuthenticationButton;
