import { Caption } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const InfoScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Caption>{sleepTips}</Caption>
    </SafeAreaView>
  );
};

const sleepTips: String =
  "1. Stick to a sleep schedule. \n2. Exercise is great, but not too late in the night.";

export default InfoScreen;
