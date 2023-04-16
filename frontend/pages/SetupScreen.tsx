import { Button, Caption } from "react-native-paper";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput, Modal } from "react-native-paper";
import { useEffect, useState } from "react";

const SetupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const dimissKeyboardAndModal = () => {
    Keyboard.dismiss;
    hideModal;
  }

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <TouchableWithoutFeedback onPress={dimissKeyboardAndModal} accessible={false}>
      <View height={"100%"} style={{ alignContent: "center"}}>
      <Caption>
        Do you have an egregious sleep schedule and/or not getting enough sleep?
        Dozy is your sleeping friend who encourages healthier sleep habits by
        helping you visualize your sleep habits as you care for him!
      </Caption>

      <TextInput
      style={styles.input}
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
      style={styles.input}
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Button
        style={{
          position: "absolute",
          bottom: 100,
          justifyContent: "center",
          alignSelf: "center",
          width: 200,
        }}
        mode="contained"
        compact={false}
        onPress={showModal}
      >
        <Text style={{fontSize: 18}}>Submit</Text>
      </Button>
      <Modal visible={modalVisible}>
        <View style={{backgroundColor: "#FFFFFF", paddingVertical: 20}}>
          <TextInput
          style={styles.input}
            mode="outlined"
            label="How many hours would you like to sleep a night?"
            placeholder="Type something"
            right={<TextInput.Affix text="/100" />}
          />
          <Button
            mode="contained"
            compact={false}
            style={{marginHorizontal: 30}}
            onPress={() => navigation.navigate("Home")}
          >
            Create
          </Button>
        </View>
      </Modal>
    </View>
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: "#D8DBE2"
  },
});

export default SetupScreen;