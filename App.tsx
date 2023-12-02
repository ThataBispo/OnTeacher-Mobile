import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { AppStack } from "./src/routes/AppStack";

import {
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppStack />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    );
  }
}
