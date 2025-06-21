import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6F61',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-box-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-search-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-box-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
