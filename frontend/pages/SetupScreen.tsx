import { Button } from "react-native-paper";
import { SafeAreaView, View } from "react-native";
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

  async function handleSendMessage(event: any) {
    event.preventDefault();
    console.log("got here")
    const user = await sendUser({name: name, email: email, goalSleepTime: Number(goalSleepTime), streakLength: 0, lastGoodSleep: "2" });
  }

  const signUpFunction = () => {
    console.log(name);
    console.log(email);
    console.log(goalSleepTime);
    if (!Number.isNaN(new Number(goalSleepTime))) {
      signUp(name, email, Number(goalSleepTime));
    }
  }

  const signInFunction = () => {
    try {
      signIn(name, email)
    } catch (error) {
      setModalVisible(!modalVisible)
    }
  }

  return (
    <SafeAreaView>
      <Text>
        Do you have find yourself having bad sleeping habits? Dozy is your
        sleeping friend who encourages healthier sleep habits by helping you
        visualize your sleep habits as you care for him!
      </Text>

      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Button
        mode="contained"
        compact={false}
        onPress={() => setModalVisible(!modalVisible)}
      >
        Submit
      </Button>
      <Modal visible={modalVisible}>
        <View>
          <TextInput
            mode="outlined"
            label="How long would you like to sleep a night?"
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
