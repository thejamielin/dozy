import { Button, Caption } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { TextInput, Modal } from "react-native-paper";
import React from "react";

const SetupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View height={"100%"} style={{ alignContent: "center" }}>
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
        onPress={() => setModalVisible(!modalVisible)}
      >
        Submit
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
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 30,
    marginVertical: 10
  },
});

export default SetupScreen;