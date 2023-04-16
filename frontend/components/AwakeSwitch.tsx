// CODE FROM: https://callstack.github.io/react-native-paper/docs/components/Switch/

import * as React from "react";
import { Switch } from "react-native-paper";
import { View, Text } from "react-native";
import { useMutation } from "../convex/_generated/react";

const AwakeSwitch = () => {
  const sendSleep = useMutation("sendSleep");
  const modSleep = useMutation("modSleep");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    handleStartOrEndSleep();
    setIsSwitchOn(!isSwitchOn);
  };

  var status = "";

  if (isSwitchOn) {
    status = "Sleeping";
  } else {
    status = "Awake";
  }

  const handleStartOrEndSleep = () => {
    let userId: string = "jJaN5qaFjxf0DNViGW9MBw"; // TODO this is hardcoded
    let now: Date = new Date();
    if (!isSwitchOn) {
      startSleep();
    } else {
      endSleep();
    }

    function endSleep() {
      let endTime: string = now.toISOString();
      modSleep({ userId, endTime });
    }

    function startSleep() {
      let startTime: string = now.toISOString();
      sendSleep({ userId, startTime });
    }
  };

  return (
    <View style={{ alignSelf: "center" }}>
      <Text> {status} </Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default AwakeSwitch;
