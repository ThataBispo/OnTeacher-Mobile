import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Landing } from "./src/pages/Landing";

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}
