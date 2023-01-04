import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from './IconButton';

type Props = {
  title?: string;
  onBack?: () => void;
};

export const Header: React.FC<Props> = ({title, onBack}) => {
  return (
    <View style={styles.header}>
      <IconButton icon="arrowLeft" onPress={onBack} />
      {!!title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 35,
  },
  title: {
    color: '#999999',
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 30,
  },
});
