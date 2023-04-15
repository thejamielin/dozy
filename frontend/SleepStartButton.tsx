import { useState } from "react";
import { View, Button } from "react-native";
import { useMutation } from "./convex/_generated/react";

const SleepStartButton = () => {
  const sendSleep = useMutation("sendSleep");
  let dateTime = new Date()

  const [newStart, setNewStart] = useState({
    userId: "123",
    startTime: dateTime,
  });

  async function handleSendMessage(event: any) {
    event.preventDefault();
    await sendSleep(newStart);
  }

  return <Button title="click me" onPress={handleSendMessage} />;
};

export default SleepStartButton;
