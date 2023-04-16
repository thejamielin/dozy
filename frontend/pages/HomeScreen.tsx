import { Button, Badge } from "react-native-paper";
import { View, Text } from "react-native";
import Pet from "../components/Pet";
import AwakeSwitch from "../components/AwakeSwitch";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const streak = 0;
  const duration = 2;
  return (
    <View
      style={{
        alignContent: "center",
      }}
    >
      <AwakeSwitch />
      <Pet />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Badge style={{ alignSelf: "center" }} size={50}> Streak: {streak} </Badge>
          <Badge style={{ alignSelf: "center" }} size={50}> Duration: {duration} </Badge>
        </View>
        <Button
          icon=""
          mode="contained"
          children="Tips and Tricks for Better Sleep"
          onPress={() => navigation.navigate("Info")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
