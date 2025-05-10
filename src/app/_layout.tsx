import "../../global.css";

import { Slot } from "expo-router";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function RootLayout() {
  console.log("Root Layout loaded");
  return (
    <ThemeProvider value={DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
