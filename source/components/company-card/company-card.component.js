import React, {Component} from 'react';
import {View} from 'react-native';
import {Title, Caption, Paragraph, Image} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Color} from '../../assets/color/color.assets'

import styles from './company-card.style';

const CompanyCard  = ({title, location, time, image}) => (
                <View style={[styles.row, styles.container]}>
                    <View style={{height: '100%', width: '25%', backgroundColor: Color.purpleishBlue}}/>
                    <View style={styles.info}>
                        <Title style={styles.title}>Title</Title>
                        <View style={[styles.row]}>
                            <Caption style={styles.caption}>Location</Caption>
                            <Icon name="place" color={Color.purpleishBlue} size={17} style={styles.icon}/>
                            <Caption style={styles.min}>Place</Caption>
                        </View>
                    </View> 
                </View>
        )

export default CompanyCard