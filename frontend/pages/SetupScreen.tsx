import { Button } from "react-native-paper";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { TextInput, Text, Modal } from "react-native-paper";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMutation } from "../convex/_generated/react";

const SetupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goalSleepTime, setGoalSleepTime] = useState(""); 
  const [modalVisible, setModalVisible] = useState(false);
  const {signUp, signIn} = useAuth();

  const sendUser = useMutation("sendUser");

  const signUpFunction = async () => {
    if (!Number.isNaN(new Number(goalSleepTime))) {
      signUp(name, email, Number(goalSleepTime));
    }
  }

  const signInFunction = async () => {
      const user = await signIn(name, email);
      if (user == null) {
        setModalVisible(!modalVisible)
      }
  }

  return (
    <SafeAreaView style={{height:"100%"}}>
      <Text style={{marginHorizontal:20, marginTop: 20, fontSize: 20, marginBottom: 20}}>
        Do you have find yourself having bad sleeping habits? Dozy is your
        sleeping friend who encourages healthier sleep habits by helping you
        visualize your sleep habits as you care for him!
      </Text>

      <TextInput
      style={styles.input}
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
      style={styles.input}
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={value => setEmail(value)}
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
        onPress={signInFunction}
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
            keyboardType='numeric'
            right={<TextInput.Affix text="/100" />}
            onChangeText={value => setGoalSleepTime(value)}
            value={goalSleepTime?.toString()}
          />
          <Button
            mode="contained"
            compact={false}
            onPress={signUpFunction}
          >
            Create
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
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