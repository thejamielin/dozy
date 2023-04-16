import { Button, Badge } from 'react-native-paper';
import { View, Text } from 'react-native';
import Pet from '../components/Pet'; 
import AwakeSwitch from '../components/AwakeSwitch';


const HomeScreen: React.FC = ({ navigation }: any) => {
    const streak = 0; 
    const duration = 2; 
    return (
      <View style={{alignContent:'center'}}>
        {/* <Button
          mode="contained"
          children="Awake"
        /> */}
        <AwakeSwitch /> 
        <Button
          mode="contained"
          children="Tips and Tricks for Better Sleep"
          onPress={() =>
            navigation.navigate('Info')
          }
        />
        <Pet/>
        <Badge style={{alignSelf:'center'}} > Streak: {streak} </Badge> 
        <Badge style={{alignSelf:'center'}}> Duration: {duration} </Badge> 
      
      </View>
    );
  };


export default HomeScreen;
