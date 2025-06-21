import { SafeAreaView, Text } from 'react-native';
import AppleAuthenticationButton from '../components/apple-authentication';

const SignInScreen = () => {
  return (
    <SafeAreaView>
      <Text>Sign In Screen</Text>
      <AppleAuthenticationButton />
    </SafeAreaView>
  )
}

export default SignInScreen;