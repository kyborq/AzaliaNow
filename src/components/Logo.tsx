import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Icon} from './Icon';

type Props = {
  style?: ViewStyle;
};

export const Logo: React.FC<Props> = ({style}) => {
  return (
    <View style={[styles.logo, style]}>
      <Icon icon="logo" />
      <Text style={styles.logoText}>AzaliaNow</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  logoText: {
    color: '#FF003C',
    fontSize: 36,
    marginLeft: 18,
  },
});
