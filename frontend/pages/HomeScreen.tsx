import { Button, Badge, Modal } from "react-native-paper";
import { View, Text } from "react-native";
import Pet from "../components/Pet";
import AwakeSwitch from "../components/AwakeSwitch";
import React, { useRef, useState, useEffect } from "react";
import { AppState } from "react-native";
import { useMutation, useQuery } from "../convex/_generated/react";
import { SafeAreaView } from "react-native";
import { useAuth } from "../contexts/AuthContext";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const { signOut, authData } = useAuth();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const LeaveConfirmation = () => {
    return (
      <View>
        <Modal visible={isModalVisible}>
          <Text>Hey! Are you sure you want to awaken Dozy?</Text>
          <View>
            <Button
              mode="contained"
              compact={false}
              onPress={() => {
                setIsModalVisible(!isModalVisible);
              }}
            >
              No, plase do not wake Dozy
            </Button>
            <Button
              mode="contained"
              compact={false}
              onPress={() => {
                setIsModalVisible(!isModalVisible);
              }}
            >
              Yes, please
            </Button>
          </View>
        </Modal>
      </View>
    );
  };

  const forceEndSleep = useMutation("modSleep");

  async function handleForceEndSleep() {
    if (authData != null) {
      await forceEndSleep({
        userId: authData._id,
        endTime: new Date().toISOString(),
      });
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      console.log("here");
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }
      if (appState.current.match("active") && nextAppState === "inactive") {
        console.log("We are leaving the app");
        // setIsModalVisible(true);
        handleForceEndSleep();
      }
      if (appState.current.match("inactive") && nextAppState === "inactive") {
        console.log("We are leaving the app");
        // setIsModalVisible(true);
        handleForceEndSleep();
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, []);

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
      <LeaveConfirmation />
    </SafeAreaView>
  );
};

export default HomeScreen;
