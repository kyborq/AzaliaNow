import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {Icon} from './Icon';

type Props = {
  onPress?: () => void;
};

export const FloatButton: React.FC<Props> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
          <Icon icon="add" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222F3E',
    width: 56,
    height: 56,
    borderRadius: 28,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 40,
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
