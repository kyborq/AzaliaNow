import React from 'react';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {Icon} from './Icon';

type Props = {
  checked?: boolean;
  onCheck?: () => void;
};

export const Check: React.FC<Props> = ({checked, onCheck}) => {
  const checkedStyle = {
    backgroundColor: checked ? '#222F3E' : '#FAFAFE',
  };

  return (
    <View style={[styles.box, checkedStyle]}>
      <TouchableNativeFeedback onPress={onCheck}>
        <View style={styles.container}>{checked && <Icon icon="check" />}</View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#222F3E',
    borderRadius: 4,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
