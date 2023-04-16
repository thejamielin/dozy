import { useState } from "react";
import { View, Button } from "react-native";
import { Id } from "./convex/_generated/dataModel";
import { useMutation, useQuery } from "./convex/_generated/react";
import { query } from "./convex/_generated/server";

const SleepEndButton = () => {
  const modSleep = useMutation("modSleep");
  let dateTime = new Date();

  // const latest = useQuery("getLatestStartTime");
  
  const [newEnd, setNewEnd] = useState({
    id: new Id("sleeps", "123456789"),
    endTime: dateTime.toString(),
  });

  async function handleSendMessage(event: any) {
    event.preventDefault();
    await modSleep(newEnd);
  }

  return <Button title="click me" onPress={handleSendMessage} />;
};

export default SleepEndButton;
