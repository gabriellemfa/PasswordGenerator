import React from 'react';
import { 
  TouchableOpacity, 
  Text,
  StyleSheet } from 'react-native';

interface BtnProps {
  type: 1 | 2; // 1: Generate password, 2: Reset
  title: string;
  onPress: () => void;
}

function Btn({ type, title, onPress }: BtnProps): React.JSX.Element {
  
  return (
    <TouchableOpacity
      style={type === 1 ? styles.genPasswd : styles.resetBtn}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  genPasswd: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    width: '50%',
  },
  resetBtn: {
    backgroundColor: '#D14545',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    width: '35%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Btn;