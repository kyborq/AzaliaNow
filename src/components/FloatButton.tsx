import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TIcon} from '../icons';
import {Icon} from './Icon';

type Props = {
  icon: TIcon;
  onPress?: () => void;
};

export const FloatButton: React.FC<Props> = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Icon icon={icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#222F3E',
    right: 0,
    margin: 40,
  },
});
