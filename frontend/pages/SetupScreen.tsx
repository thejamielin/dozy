import { Button, Caption } from "react-native-paper";
import { View } from "react-native";
import { TextInput, Modal } from "react-native-paper";
import React from "react";

const SetupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Caption>
        Do you have an egregious sleep schedule and/or not getting enough sleep?
        Dozy is your sleeping friend who encourages healthier sleep habits by
        helping you visualize your sleep habits as you care for him!
      </Caption>

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
      <View style={{flex:1, justifyContent:'flex-end', alignItems:'baseline'}}>
        <Button
          mode="contained"
          compact={false}
          onPress={() => setModalVisible(!modalVisible)}
        >
          Submit
        </Button>
      </View>
      <Modal visible={modalVisible}>
        <View>
          <TextInput
            mode="outlined"
            label="How many hours would you like to sleep a night?"
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

/*
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
*/
