import { supabase } from "@/src/utils/supabase";
import { Text, TouchableOpacity } from "react-native";

const SignOutButton = () => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
  }


  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
  )
}

export default SignOutButton;