import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {MainScreen} from './src/screens/MainScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;
