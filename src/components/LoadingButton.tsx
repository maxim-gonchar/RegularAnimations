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

export const LoadingButton = () => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const [loader, setLoader] = useState(false);
  const initialWidthValue = useState(new Animated.Value(0))[0];
  const initialRadiusValue = useState(new Animated.Value(0))[0];
  const initialMovingValue = useRef(new Animated.Value(0)).current;
  const buttonWidthInterpolation = initialWidthValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['70%', '15%'],
  });
  const buttonRadiusInterpolation = initialRadiusValue.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 16],
  });
  const animetedMovingStyle = {
    transform: [{translateX: initialMovingValue}],
  };
  const animatedStyle = {
    width: buttonWidthInterpolation,
    borderRadius: buttonRadiusInterpolation,
  };
  const distance = Dimensions.get('window').width - 32 - 40;
  const handleAnimation = () => {
    setLoader(true);
    Animated.parallel([
      Animated.spring(initialWidthValue, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.spring(initialRadiusValue, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(initialMovingValue, {
        toValue: distance,
        useNativeDriver: false,
        duration: 3000,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.spring(initialWidthValue, {
          toValue: 0,
          useNativeDriver: false,
        }),
        Animated.spring(initialRadiusValue, {
          toValue: 0,
          useNativeDriver: false,
        }),
      ]).start();
      setLoader(false);
    });
  };
  return (
    <>
      <Animated.View style={[styles.square, animetedMovingStyle]} />
      <AnimatedPressable
        style={[styles.button, animatedStyle]}
        onPress={handleAnimation}>
        {!loader ? (
          <Text style={styles.buttonText}>Press me</Text>
        ) : (
          <ActivityIndicator size={'small'} color="white" />
        )}
      </AnimatedPressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 10,
    backgroundColor: 'rgb(200, 162, 200)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  square: {
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: 'skyblue',
    marginBottom: 12,
  },
});
