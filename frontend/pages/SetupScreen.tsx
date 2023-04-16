import { Button } from 'react-native-paper';
import { View } from 'react-native';
import React from 'react';

const SetupScreen: React.FC = ({ navigation }: any) => {
    return (
      <View>
        <Button
          mode="contained"
          children="WE ARE AT SETUP SCREEN"
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

export default SetupScreen;