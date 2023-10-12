import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Country:</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Japan" value="option1" />
          <Picker.Item label="China" value="option2" />
          <Picker.Item label="Thailand" value="option3" />
          <Picker.Item label="Philippines" value="option4" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdown: {
    height: 40,
  },
});

export default Dropdown;