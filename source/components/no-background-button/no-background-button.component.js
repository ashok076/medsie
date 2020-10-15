import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'

import styles from './no-background-button.style';

const NoBackgroundButton = ({title}) => (

            <View>
                    <TouchableOpacity style={styles.showMap}>
                        <Text>{title}</Text>
                    </TouchableOpacity>
            </View>
)

export default NoBackgroundButton;