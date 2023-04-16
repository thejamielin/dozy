import { Button, Badge } from 'react-native-paper';
import { View, Text } from 'react-native';

const HomeScreen: React.FC = ({ navigation }: any) => {
    const streak = 0; 
    const duration = 2; 
    return (
      <View>
        <Button
          mode="contained"
          children="Awake"
        />
        <Button
          mode="contained"
          children="Tips and Tricks for Better Sleep"
          onPress={() =>
            navigation.navigate('Info')
          }
        />
        <Badge > Streak: {streak} </Badge> 
        <Badge > Duration: {duration} </Badge> 
      </View>
    );
  };

export default HomeScreen;