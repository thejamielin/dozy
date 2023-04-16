import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SetupScreen from './pages/SetupScreen';
import HomeScreen from './pages/HomeScreen';
import InfoScreen from './pages/InfoScreen';
const Stack = createNativeStackNavigator();



export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Setup"
          component={SetupScreen}
          options={{title: 'Welcome to Dozy!'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome to Dozy!'}}
        />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
