import { useState } from "react";
import { View, Button } from "react-native";
import { useMutation } from "./convex/_generated/react";

const SendButton = () => {
  const sendPet = useMutation("sendPet");

  const [newPet, setNewPet] = useState({
    petname: "cat",
    imagename: "cat.jpg",
  });

  async function handleSendMessage(event: any) {
    event.preventDefault();
    await sendPet(newPet);
  }

  return <Button title="click me" onPress={handleSendMessage} />;
};

export default SendButton;
