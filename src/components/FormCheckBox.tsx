import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface FormCheckBoxProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: () => void;
  checkboxColor: string;
}

function FormCheckBox({ id, label, isChecked, onChange, checkboxColor }: FormCheckBoxProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        id={id}
        isChecked={isChecked}
        fillColor={checkboxColor}
        onPress={onChange}
      />
      <Text style={[styles.label, styles.containerTxt]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  containerTxt:{
    fontWeight: 'bold',
    color: '#585858',
    fontSize: 16,
  },

  label: {
    marginLeft: 8,
  },
});

export default FormCheckBox;