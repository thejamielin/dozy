import { Caption } from 'react-native-paper';

const InfoScreen: React.FC = () => {
    return <Caption>
      {sleepTips}
    </Caption>;
  };

const sleepTips: String = "1. Stick to a sleep schedule. \n2. Exercise is great, but not too late in the";


export default InfoScreen;