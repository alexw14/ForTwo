import { Session } from '@supabase/supabase-js';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

const RootLayout = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Stack>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(protected)" options={{ headerShown: false, animation: "none" }} />
      </Stack.Protected>
      <Stack.Protected guard={!session}>
        <Stack.Screen name="sign-in" options={{ headerShown: false, animation: "none" }} />
      </Stack.Protected>
    </Stack>
  );
};

export default RootLayout;
