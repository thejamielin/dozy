import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <Button
      mode="contained"
      children="Tips and Tricks for Better Sleep"
      onPress={() =>
        navigation.navigate('Info', {name: 'Jane'})
      }
    />
  );
};

const InfoScreen = ({navigation, route}: any) => {
  return <Text>This is {route.params.name}'s info</Text>;
};

export default function App() {
  
  return (
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
  );
}