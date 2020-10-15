import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'

import styles from './show-map-title.style';

const ShowMapsTitle = ({title}) => (

            <View>
                <View style={styles.titleView}>
                    <Text>{title}</Text>
                    <TouchableOpacity style={styles.showMap}>
                        <Text>Show Maps</Text>
                    </TouchableOpacity>
                </View>
            </View>
)

export default ShowMapsTitle;