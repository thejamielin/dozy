import { Image, Text, View } from "react-native";

const Pet: React.FC = () => {
  return (
    <View>
      <Image source={require("../assets/sleepybunny.gif")} style={{width:250, height:250, alignSelf:'center'}} />
    </View>
  ); 
};

export default Pet;