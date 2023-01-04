import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

type Props = {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const Button: React.FC<Props> = ({label, disabled, onPress}) => {
  const buttonStyle = {
    backgroundColor: disabled ? '#676D75' : '#222F3E',
  };

  return (
    <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});
