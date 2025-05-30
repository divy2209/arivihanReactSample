import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <>
    <Stack>
      <Stack.Screen
          name="(auth)/auth"
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="(home)/home"
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="(explore)/explore"
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="(profile)/profile"
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="(unnati)/unnati"
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="(reels)/reels"
          options={{headerShown: false}}
      />
    </Stack>
  </>
}
