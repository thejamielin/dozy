// @ts-ignore  
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import sendPet from "./convex/sendPet";
import { useMutation } from "./convex/_generated/react";
import SendButton from "./SendButton";
import SleepStartButton from "./SleepStartButton";
import SleepEndButton from "./SleepEndButton";

const url = "https://diligent-rook-229.convex.cloud"
const convex= new ConvexReactClient(url, {unsavedChangesWarning: false});

export default function App() {
  
  return (
    <ConvexProvider client={convex}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button title="Click me"></Button>
        <SendButton/>
        <SleepStartButton/>
        <SleepEndButton/>
      </View>
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
