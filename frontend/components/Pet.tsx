// import { Text, View, Image } from 'react-native';

// const Pet: React.FC = () => {
//     return <Image
//           source={require('../assets/icon.png')}
//       />;
// }

// export default Pet;

import React from 'react'; 
import {
    StyleProp, 
    StyleSheet, 
    Text, 
    TextStyle, 
    View, 
    ViewStyle
} from 'react-native'; 
// import LottieView, {AnimatedLottieViewProps} from 'lottie-react-native'; 
import Lottie from 'react-lottie'; 

const Pet = () => { 
    return (
        <Lottie
            source={require('../assets/animations/sleepypolarbear.json')}
            style={[{ width: '80%', aspectRatio: 1 }]}
            autoPlay
            loop
        />
    ); 
}; 

export default Pet; 