import { Text } from 'react-native';

const InfoScreen: React.FC = ({navigation, route}: any) => {
    return <Text>
      {sleepTips}
    </Text>;
  };

const sleepTips: String = "1. Stick to a sleep schedule. \n2. Exercise is great, but not too late in the";


export default InfoScreen;