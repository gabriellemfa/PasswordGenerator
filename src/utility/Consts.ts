
// Define constant character sets for password generation
export const CHARACTERS = {
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    NUMBERS: '0123456789',
    SYMBOLS: '!@#$%^&*()_+[]{}|;:,.<>?'
  };

// Interface to define password requirements 
export interface PasswordRequirement {
    length: number;              // Desired password length
    includeUppercase: boolean;   // Include uppercase letters
    includeLowercase: boolean;   // Include lowercase letters
    includeSymbols: boolean;      // Include special characters
    includeNumbers: boolean;      // Include numeric digits
  }