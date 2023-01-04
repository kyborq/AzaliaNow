import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {Icon} from './Icon';

export const Spinner = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const interpolateRotation = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate: interpolateRotation}],
    width: 37,
    height: 37,
  };

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }),
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={animatedStyle}>
      <Icon icon="spinner" />
    </Animated.View>
  );
};
