import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetupScreen from "./pages/SetupScreen";
import HomeScreen from "./pages/HomeScreen";
import InfoScreen from "./pages/InfoScreen";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Router from "./navigation/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();

const url = "https://diligent-rook-229.convex.cloud";
const convex = new ConvexReactClient(url, { unsavedChangesWarning: false });

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <SafeAreaProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </SafeAreaProvider>
    </ConvexProvider>
  );
}
