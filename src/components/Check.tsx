import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Icon} from './Icon';

type Props = {
  checked?: boolean;
  onCheck?: () => void;
};

export const Check: React.FC<Props> = ({checked, onCheck}) => {
  const checkedStyle = {
    backgroundColor: checked ? '#222F3E' : '#FAFAFE',
  };

  const hitSlop = {bottom: 20, left: 20, right: 20, top: 20};

  return (
    <TouchableOpacity onPress={onCheck} hitSlop={hitSlop}>
      <View style={[styles.container, checkedStyle]}>
        {checked && <Icon icon="check" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#222F3E',
    borderRadius: 4,
  },
});
