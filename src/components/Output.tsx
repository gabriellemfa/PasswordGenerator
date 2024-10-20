import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface OutputProps {
  generatedPassword: string;
  placeholder: string;
  handleCopy: (password: string) => void;
}

function Output({ generatedPassword, placeholder, handleCopy }: OutputProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.outputBox}>
        <Text style={styles.passwordText}>
          {generatedPassword || placeholder}
        </Text>
        {generatedPassword && (
          <TouchableOpacity onPress={() => handleCopy(generatedPassword)}>
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  outputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 45,
    
  },
  passwordText: {
    fontSize: 16,
    color: '#585858',
  },
  
  copyText: {
    color: '#007BFF',
    fontSize: 16,
    paddingLeft: 10,
  },
});

export default Output;