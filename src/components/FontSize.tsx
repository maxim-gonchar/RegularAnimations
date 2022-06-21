import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
  Animated,
  Pressable,
  View,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const FontSize = () => {
  const initialFontSizeValue = useRef(new Animated.Value(1)).current;
  const sizeState = useRef(1);
  const animatedStyle = {
    transform: [
      {
        scale: initialFontSizeValue,
      },
    ],
  };
  const handleAnimation = () => {
    sizeState.current = sizeState.current === 1 ? 1.6 : 1;
    Animated.spring(initialFontSizeValue, {
      toValue: sizeState.current,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Pressable style={styles.container} onPress={handleAnimation}>
      <Animated.Text style={[styles.mainText, animatedStyle]}>
        Press on text to change font size
      </Animated.Text>
    </Pressable>
  );
};

export default FontSize;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  mainText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
  },
});
