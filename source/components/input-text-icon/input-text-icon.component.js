import React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from "./input-text-icon.style"

const InputTextIcon = ({placeholder, icon, onChange, value, show, onPress}) => (
  <View>
  <Text style={styles.placeholder}>{placeholder}</Text>
    <View style={styles.inputContainer}>
    <TextInput 
      style={styles.input}
      underlineColorAndroid="transparent"
      secureTextEntry={show}
      onChange={onChange}
      value={value}
    />
    <TouchableOpacity onPress={onPress}>
      <Icon size={24} color="black" name={icon} style={styles.iconStyle}/>
    </TouchableOpacity>
  </View>
  </View>
);

export default InputTextIcon;
