import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet } from 'react-native';
import InputBox from './components/InputBox';
import FormCheckBox from './components/FormCheckBox'; 
import Output from './components/Output';
import Btn from './components/Btn'; 
import { generatePasswordString } from './utility/passwordGenerator'; 
import { showErrorSnackbar, showSuccessSnackbar, showInfoSnackbar } from './utility/utils'; 
import { PasswordRequirement } from './utility/Consts'; 


function Main(): React.JSX.Element {
  // hooks for managing input values and generated password
  const [inputValue, setInputValue] = useState<string>('');
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([false, false, false, false]);
  const [generatedPassword, setGeneratedPassword] = useState<string>('');

  // validate user inputs
  const validateInputs = () => {
    const length = parseInt(inputValue);

    if (!inputValue) {
      showErrorSnackbar('Password length is required.');
      return false;
    }
    if (isNaN(length)) {
      showErrorSnackbar('Please enter a valid number for password length.');
      return false;
    }
    if (length < 8 || length > 16) {
      showErrorSnackbar('Password length must be between 8 and 16 characters.');
      return false;
    }
    if (!checkboxStates.some(checked => checked)) {
      showErrorSnackbar('At least one complexity criteria must be selected.');
      return false;
    }
    
    // validations passed
    return true;
  };

  // generate password based on user inputs
  const generatePassword = () => {
    if (!validateInputs()) {
      setGeneratedPassword(''); // Clear the output on error
      return;
    }

    const length = parseInt(inputValue);
    const requirements: PasswordRequirement = {
      length,
      includeUppercase: checkboxStates[0],
      includeLowercase: checkboxStates[1],
      includeSymbols: checkboxStates[2],
      includeNumbers: checkboxStates[3],
    };

    const newPassword = generatePasswordString(requirements);
    setGeneratedPassword(newPassword);
  };

  // handle password copy
  const handleCopy = (password: string) => {
    console.log('Copied password:', password); // Replace with actual copy logic
    showSuccessSnackbar('Password copied successfully!');
  };

  // handle checkbox state change
  const handleCheckboxChange = (index: number) => {
    setCheckboxStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // handle reset button
  const handleReset = () => {
    setInputValue('');
    setCheckboxStates([
      false, 
      false, 
      false, 
      false]);
    setGeneratedPassword('');
    showInfoSnackbar('Inputs reset successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Generator</Text>

      <InputBox value={inputValue} onChange={setInputValue} />

      {[
        'Upper Case Letter', 
        'Lower Case Letter', 
        'Special Character', 
        'Numbers'].map((label, index) => (
          
        <FormCheckBox
          key={index}
          id={`checkbox-${index + 1}`}
          label={label}
          isChecked={checkboxStates[index]}
          onChange={() => handleCheckboxChange(index)}
          checkboxColor="#007BFF"
        />

      ))}
      
      <Output
        generatedPassword={generatedPassword}
        placeholder="Select Options..."
        handleCopy={handleCopy}
      />

      {/* Generate Password Button */}
      <Btn type={1} title="Generate Password" onPress={generatePassword} />

      {/* Reset Button */}
      <Btn type={2} title="Reset" onPress={handleReset} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Main;