import {StyleSheet, Text, Pressable, Animated, Dimensions} from 'react-native';
import React, {useRef} from 'react';

export const ResizeButton = () => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const initialOpacityValue = useRef(new Animated.Value(1)).current;
  const initialScaleValue = useRef(new Animated.Value(1)).current;
  const animatedStyle = {
    opacity: initialOpacityValue,
    transform: [
      {
        scale: initialScaleValue,
      },
    ],
  };
  const onPressInAnimation = () => {
    Animated.parallel([
      Animated.spring(initialScaleValue, {
        toValue: 0.95,
        useNativeDriver: false,
      }),
      Animated.timing(initialOpacityValue, {
        toValue: 0.6,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const onPressOutAnimation = () => {
    Animated.parallel([
      Animated.spring(initialScaleValue, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(initialOpacityValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <AnimatedPressable
      style={[styles.buttonStyles, animatedStyle]}
      onPressIn={onPressInAnimation}
      onPressOut={onPressOutAnimation}>
      <Text style={styles.buttonText}>Press me</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(207, 32, 147)',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
