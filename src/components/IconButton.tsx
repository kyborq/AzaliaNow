import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TIcon} from '../icons';
import {Icon} from './Icon';

type Props = {
  icon: TIcon;
  onPress?: () => void;
};

export const IconButton: React.FC<Props> = ({icon, onPress}) => {
  const hitSlop = {bottom: 20, left: 20, right: 20, top: 20};

  return (
    <TouchableOpacity onPress={onPress} hitSlop={hitSlop}>
      <View style={styles.button}>
        <Icon icon={icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
  },
});
