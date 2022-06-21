import {StyleSheet, Text, Pressable, Animated, Dimensions} from 'react-native';
import React, {useRef} from 'react';

export const ColoredButton = () => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const initialColorValue = useRef(new Animated.Value(1)).current;
  const initialScaleValue = useRef(new Animated.Value(1)).current;
  const buttonColorInterpolation = initialColorValue.interpolate({
    inputRange: [1, 2],
    outputRange: ['rgb(207, 32, 147)', 'rgb(224,82,99)'],
  });
  const animatedStyle = {
    backgroundColor: buttonColorInterpolation,
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
      Animated.timing(initialColorValue, {
        toValue: 2,
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
      Animated.timing(initialColorValue, {
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
