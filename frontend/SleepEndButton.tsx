import { useState } from "react";
import { View, Button } from "react-native";
import { useMutation } from "./convex/_generated/react";

const SleepEndButton = () => {
  const sendSleep = useMutation("sendSleep");
  let dateTime = new Date()

  const [newEnd, setNewEnd] = useState({
    id: "123",
    endTime: dateTime,
  });

  async function handleSendMessage(event: any) {
    event.preventDefault();
    await sendSleep(newEnd);
  }

  return <Button title="click me" onPress={handleSendMessage} />;
};

export default SleepEndButton;
