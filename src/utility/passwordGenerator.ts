import { CHARACTERS, PasswordRequirement } from './Consts';

/**
 * Generates a random password based on the password requirements.
 **/


export const generatePasswordString = (requirements: PasswordRequirement): string => {
  const { length, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = requirements;
  
  // Initialize character set based on requirements
  let charset = '';
  if (includeLowercase) charset += CHARACTERS.LOWERCASE;
  if (includeUppercase) charset += CHARACTERS.UPPERCASE;
  if (includeNumbers) charset += CHARACTERS.NUMBERS;
  if (includeSymbols) charset += CHARACTERS.SYMBOLS;

  // Return empty string if no character types selected
  if (charset.length === 0) return '';

  let password = '';
  
  // Generate password by selecting random characters from the charset
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
  return password;
};