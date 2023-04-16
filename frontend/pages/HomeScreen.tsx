import { Button, Badge } from 'react-native-paper';
import { View, Text } from 'react-native';
import Pet from '../components/Pet'; 
import AwakeSwitch from '../components/AwakeSwitch';
import { SafeAreaView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';


const HomeScreen: React.FC = ({ navigation }: any) => {
  const {signOut} = useAuth();

    const streak = 0; 
    const duration = 2; 
    return (
      <SafeAreaView style={{alignContent:'center'}}>
        <View >
        <AwakeSwitch /> 
        <Button onPress={signOut}>Sign Out</Button>
        </View>
        
        <Button
          mode="contained"
          children="Tips and Tricks for Better Sleep"
          onPress={() =>
            navigation.navigate('Info Screen')
          }
        />
        <Pet/>
        <Badge style={{alignSelf:'center'}} > Streak: {streak} </Badge> 
        <Badge style={{alignSelf:'center'}}> Duration: {duration} </Badge> 
      
      </SafeAreaView>
    );
  };


export default HomeScreen;
