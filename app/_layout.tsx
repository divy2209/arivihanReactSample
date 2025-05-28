import { Stack } from "expo-router";
import './global.css';
import {StatusBar} from "react-native";

export default function RootLayout() {
  return <>
    <StatusBar hidden={true} />
    <Stack>
      <Stack.Screen
          name="(auth)/auth"
          options={{headerShown: false}}
      />
    </Stack>
  </>
}
