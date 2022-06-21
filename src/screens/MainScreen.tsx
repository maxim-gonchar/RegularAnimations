import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ResizeButton} from '../components/ResizeButton';
import {ColoredButton} from '../components/ColoredButton';
import {LoadingButton} from '../components/LoadingButton';
import {FadeInComponents} from '../components/FadeInComponents';
import FontSize from '../components/FontSize';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topButtonSpacing}>
        <ResizeButton />
        <ColoredButton />
      </View>
      <LoadingButton />
      <FadeInComponents />
      <FontSize />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  topButtonSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
