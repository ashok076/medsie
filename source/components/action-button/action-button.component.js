import React from 'react';
import {View, Text} from 'react-native';

import styles from './action-button.style';

const ActionButtons  = () => (
            <View style={styles.container}>
                <View style={styles.icon}/>
                <View style={styles.icon}/>
                <View style={styles.icon}/>
            </View>
        )

export default ActionButtons