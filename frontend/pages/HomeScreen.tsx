import { Button } from 'react-native-paper';
import { View } from 'react-native';

const HomeScreen: React.FC = ({ navigation }: any) => {
    return (
      <View>
        <Button
          mode="contained"
          children="Awake"
          onPress={() =>
            navigation.navigate('Info')
          }
        />
        <Button
          mode="contained"
          children="Tips and Tricks for Better Sleep"
          onPress={() =>
            navigation.navigate('Info')
          }
        />
      </View>
    );
  };

export default HomeScreen;