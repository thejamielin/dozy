// CODE FROM: https://callstack.github.io/react-native-paper/docs/components/Switch/

import * as React from 'react';
import { Switch } from 'react-native-paper';
import {View, Text} from 'react-native'; 

const AwakeSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  var status = ""; 

  if (isSwitchOn){ 
    status = "Sleeping"; 
  }
  else { 
    status = "Awake"; 
  }

  return (
    <View style={{alignSelf:'center'}}>
        <Text> {status} </Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{size:20}}/>
    </View>
  );
};

export default AwakeSwitch;