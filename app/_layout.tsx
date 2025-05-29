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
    </Stack>
  </>
}
