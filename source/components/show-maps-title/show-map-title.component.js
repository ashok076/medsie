import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'

import NoBackgroundButton from '../no-background-button/no-background-button.component'

import styles from './show-map-title.style';

const ShowMapsTitle = ({title}) => (

            <View>
                <View style={styles.titleView}>
                    <Text>{title}</Text>
                    <NoBackgroundButton title="Show Maps" />
                </View>
            </View>
)

export default ShowMapsTitle;