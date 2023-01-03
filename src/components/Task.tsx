import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import {Check} from './Check';

type Props = {
  label: string;
  completed?: boolean;
  onComplete?: () => void;
};

export const Task: React.FC<Props> = ({label, completed, onComplete}) => {
  const completedStyle: TextStyle = {
    color: completed ? '#8E959E' : '#222F3E',
    textDecorationLine: completed ? 'line-through' : 'none',
  };

  return (
    <View style={style.task}>
      <Check checked={completed} onCheck={onComplete} />
      <Text style={[style.label, completedStyle]}>{label}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 24,
    margin: 0,
    padding: 0,
    marginLeft: 16,
  },
});
