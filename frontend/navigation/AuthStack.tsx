import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SetupScreen from "../pages/SetupScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setup Screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SetUp Screen"
        component={SetupScreen}
        options={{ title: "Meet Dozy!" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
