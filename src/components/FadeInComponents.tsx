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

export const FadeInComponents = () => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const firstComponentOpacity = useRef(new Animated.Value(0)).current;
  const secondComponentOpacity = useRef(new Animated.Value(0)).current;
  const thirdComponentOpacity = useRef(new Animated.Value(0)).current;
  const opacityState = useRef(0);
  const firstComponentStyles = firstComponentOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const secondComponentStyles = secondComponentOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const thirdComponentStyles = thirdComponentOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handleAnimation = () => {
    opacityState.current = opacityState.current === 0 ? 1 : 0;
    Animated.stagger(200, [
      Animated.timing(firstComponentOpacity, {
        toValue: opacityState.current,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(secondComponentOpacity, {
        toValue: opacityState.current,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(thirdComponentOpacity, {
        toValue: opacityState.current,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <View style={styles.componentsContainer}>
        <Animated.View
          style={[
            styles.fadeComponent,
            {backgroundColor: 'orange', opacity: firstComponentStyles},
          ]}
        />
        <Animated.View
          style={[
            styles.fadeComponent,
            {backgroundColor: 'pink', opacity: secondComponentStyles},
          ]}
        />
        <Animated.View
          style={[
            styles.fadeComponent,
            {backgroundColor: 'blue', opacity: thirdComponentStyles},
          ]}
        />
      </View>
      <AnimatedPressable style={styles.button} onPress={handleAnimation}>
        <Text style={styles.buttonText}>Press me</Text>
      </AnimatedPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  componentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  fadeComponent: {
    height: Dimensions.get('window').height / 20,
    width: Dimensions.get('window').width / 6,
    borderRadius: 4,
  },
  button: {
    height: Dimensions.get('window').height / 15,
    width: Dimensions.get('window').width / 3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
});
