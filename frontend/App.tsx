import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <View>
      <Button
        mode="contained"
        children="Awake"
        onPress={() =>
          navigation.navigate('Info')
        }
      />
      <Button
        mode="contained"
        children="Tips and Tricks for Better Sleep"
        onPress={() =>
          navigation.navigate('Info')
        }
      />
    </View>
  );
};

const InfoScreen: React.FC = ({navigation, route}: any) => {
  return <Text>
    {sleepTips}
  </Text>;
};

const url = "https://diligent-rook-229.convex.cloud"
const convex= new ConvexReactClient(url, {unsavedChangesWarning: false});

export default function App() {
  
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome to Dozy!'}}
        />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ConvexProvider>
  );
}

const sleepTips: String = "1. Stick to a sleep schedule. \n2. Exercise is great, but not too late in the";
