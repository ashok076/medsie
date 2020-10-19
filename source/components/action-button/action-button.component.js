import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Call from '../../assets/svg-files/call.svg';
import Car from '../../assets/svg-files/car.svg';
import Location from '../../assets/svg-files/location.svg';

import styles from './action-button.style';

const ActionButtons  = () => (
            <View style={styles.container}>
                <TouchableOpacity style={styles.icon}>
                    <Call height={45} width={45}/>
                    <Text style={styles.label}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Car height={45} width={45}/>
                    <Text style={styles.label}>Direction</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                    <Location height={45} width={45}/>
                    <Text style={styles.label}>Review</Text>
                </TouchableOpacity>
            </View>
        )

export default ActionButtons