import { Button } from "react-native-paper";
import { View } from "react-native";
import { TextInput, Text, Modal } from "react-native-paper";
import React from "react";
import SetupForm from "../components/SetupForm";
import Pet from "../components/Pet";

const SetupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Text>
        Do you have find yourself having bad sleeping habits? Dozy is your
        sleeping friend who encourages healthier sleep habits by helping you
        visualize your sleep habits as you care for him!
      </Text>

      <SetupForm /> 

      <Modal visible={modalVisible}>
        <View>
          <TextInput
            mode="outlined"
            label="How long would you like to sleep a night?"
            placeholder="Type something"
            right={<TextInput.Affix text="/100" />}
          />
          <Button
            mode="contained"
            compact={false}
            onPress={() => navigation.navigate("Home")}
          >
            Create
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default SetupScreen;