import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {TIcon} from '../icons';
import {Icon} from './Icon';

type Props = {
  icon: TIcon;
  onPress?: () => void;
};

export const IconButton: React.FC<Props> = ({icon, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.button}>
          <Icon icon={icon} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: 'hidden',
    margin: -20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    width: 54,
    height: 54,
  },
});
