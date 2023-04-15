import { StatusBar } from 'expo-status-bar';
// import { Provider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'; 
import React from 'react';
// import Lottie from 'lottie-react-native';

export default function App() {
  return (
    <LottieView
      source={require('./assets/animations/guyinbed.json')}
      autoPlay
      loop
    />
  ); 

  // return (
  //   <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
  //     <LottieView 
  //       source={require('./assets/animations/sleepypanda.json')}
  //       style={{width:'80%', aspectRatio: 1}}
  //       autoPlay
  //       loop
  //     />
  //     <Text style={{fontSize: 25, fontWeight:'300' }}> Sleepy Panda</Text>
  //   </View>
  // ); 



  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
