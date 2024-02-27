import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';


const SearchBar = ({ term, onChangeTerm, onEndTerm }) => {

    return (

        <View style={styles.container}>
            <Feather name="search" style={styles.icon} />
            <TextInput
                placeholder='search'
                style={styles.inputContainer}
                onChangeText={newTerm => onChangeTerm(newTerm)}
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onEndTerm}
            />
        </View>

    )
}


export default SearchBar