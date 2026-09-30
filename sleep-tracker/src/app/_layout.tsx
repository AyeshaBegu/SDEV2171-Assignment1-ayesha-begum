import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="sleep-log" options={{ title: 'Sleep Log' }} />
      <Stack.Screen name="sleep-stats" options={{ title: 'Statistics' }} />
    </Stack>
  );
}
