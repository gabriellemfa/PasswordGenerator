import Snackbar from 'react-native-snackbar';

export const showErrorSnackbar = (errorTxt: string): void => {
  if (Snackbar) {
    Snackbar.show({
      text: errorTxt,
      backgroundColor: 'red',
      duration: Snackbar.LENGTH_SHORT,
    });
  } else {
    console.error('Snackbar is not initialized');
  }
};

export const showSuccessSnackbar = (successTxt: string): void => {
  if (Snackbar) {
    Snackbar.show({
      text: successTxt,
      backgroundColor: 'green',
      duration: Snackbar.LENGTH_SHORT,
    });
  } else {
    console.error('Snackbar is not initialized');
  }
};

export const showInfoSnackbar = (infoTxt: string): void => {
  if (Snackbar) {
    Snackbar.show({
      text: infoTxt,
      backgroundColor: 'black',
      duration: Snackbar.LENGTH_SHORT,
    });
  } else {
    console.error('Snackbar is not initialized');
  }
};