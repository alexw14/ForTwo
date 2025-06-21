import SignOutButton from "@/src/components/sign-out-button";
import { Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ProfileScreen</Text>
      <SignOutButton />
    </View>
  )
}

export default ProfileScreen;
