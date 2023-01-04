import React, {useState} from 'react';

import {StyleSheet, TextInput} from 'react-native';

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const Input: React.FC<Props> = ({value, placeholder, onChange}) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#CBCDD0"
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FAFAFE',
    fontSize: 24,
    color: '#222F3E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
});
