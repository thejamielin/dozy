import { useState } from "react";
import { View, Button } from "react-native";
import { Id } from "./convex/_generated/dataModel";
import { useMutation } from "./convex/_generated/react";

const SleepEndButton = () => {
  const modSleep = useMutation("modSleep");
  let dateTime = new Date()

  const [newEnd, setNewEnd] = useState({
    id: new Id("sleeps", "ijfc-VyErtMx6XH6YT5MBg"),
    endTime: dateTime.toString(),
  });

  async function handleSendMessage(event: any) {
    event.preventDefault();
    await modSleep(newEnd);
  }

  return <Button title="click me" onPress={handleSendMessage} />;
};

export default SleepEndButton;
