import React, {Component} from 'react';
import {View} from 'react-native';
import {Title, Caption, Paragraph, Image} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './company-card.style';

const CompanyCard  = ({title, location, time, image}) => (
                <View style={[styles.row, styles.container]}>
                    <View style={{height: '100%', width: '30%', backgroundColor: 'pink'}}/>
                    <View style={styles.info}>
                        <Title>Title</Title>
                        <View style={[styles.row, styles.spaceBetween]}>
                            <Caption>Location</Caption>
                            <View style={styles.row}>
                                <Icon name="place" color='purple' size={20} />
                                <Caption>Place</Caption>
                            </View>
                        </View>
                    </View>
                </View>
        )

export default CompanyCard