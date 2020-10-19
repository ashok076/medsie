import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'

import styles from './search-text-input.style'

const SearchTextInput = ({navigation, location}) => (
    <TouchableOpacity style={styles.inputContainer}>
        <Text style={styles.searchText}>Search</Text>
        <Text style={styles.location}>{location ? location : "Location"}</Text>
    </TouchableOpacity>
)

export default SearchTextInput;