import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
}

function InputBox({ value, onChange }: InputBoxProps): React.JSX.Element {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
      maxLength={2} // Accept only 2 characters
      placeholder="Password Length (8-16)"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
});

export default InputBox;