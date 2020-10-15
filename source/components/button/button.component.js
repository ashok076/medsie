import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './button.style';

const Button = ({title, onPress, color}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, {backgroundColor: color ? color : 'purple'}]}>
      <Text style={styles.title}> {title} </Text>
    </View>
  </TouchableOpacity>
);

export default Button;
