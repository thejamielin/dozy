import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import InfoScreen from "../pages/InfoScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home Screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="Info Screen" component={InfoScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
