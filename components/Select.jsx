import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picker } from '@react-native-picker/picker';

const SelectDropdown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedOption}
                style={styles.dropdown}
                onValueChange={(itemValue) => handleOptionSelect(itemValue)}
            >
                <Picker.Item label="Select an option" value="" />
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
    },
    dropdown: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default SelectDropdown;
