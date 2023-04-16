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

const sleepTips: String = "1. Stick to a sleep schedule. \n2. Exercise is great, but not too late in the";