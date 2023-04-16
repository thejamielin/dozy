import { Button, Badge } from "react-native-paper";
import { View, Text } from "react-native";
import Pet from "../components/Pet";
import AwakeSwitch from "../components/AwakeSwitch";
import { SafeAreaView } from "react-native";
import { useAuth } from "../contexts/AuthContext";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const { signOut } = useAuth();

  const streak = 0;
  const duration = 2;
  return (
    <SafeAreaView style={{ alignContent: "center" }}>
      <View
        style={{
          alignContent: "center",
        }}
      >
        <AwakeSwitch />
        <Button onPress={signOut}>Sign Out</Button>
        <Pet />
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: "20%",
            }}
          >
            <Badge
              style={{ alignSelf: "center", backgroundColor: "#58A4B0" }}
              size={40}
            >
              {" "}
              Streak: {streak}{" "}
            </Badge>
            <Badge
              style={{ alignSelf: "center", backgroundColor: "#58A4B0" }}
              size={40}
            >
              {" "}
              Duration: {duration}{" "}
            </Badge>
          </View>
          <Button
            style={{ marginHorizontal: 30, marginTop: 30 }}
            icon=""
            mode="contained"
            children="Tips and Tricks for Better Sleep"
            onPress={() => navigation.navigate("Info")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
