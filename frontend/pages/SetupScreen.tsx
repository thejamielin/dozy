import { Button } from "react-native-paper";
import { View } from "react-native";
import { TextInput, Text } from "react-native-paper";
import React from "react";

const SetupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View>
      <Text>
        Do you have find yourself having bad sleeping habits? Dozy is the app
        that encourages healthier sleep habits by helping you visualize your
        sleep habits with the help of your sleep buddy, Dozy!
      </Text>
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Button
        mode="contained"
        compact={false}
        onPress={() => navigation.navigate("Home")}
      >
        Submit
      </Button>
    </View>
  );
};

export default SetupScreen;
