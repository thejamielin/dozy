import { Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

const SetupScreen: React.FC = ({ navigation }: any) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    return (
      <View>

        <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={name => setName(name)}
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Button 
        mode="contained" 
        compact={false}
        onPress={() =>
          navigation.navigate('Home')
        }>
        Submit
      </Button> 
      </View>
    );
  };

export default SetupScreen;