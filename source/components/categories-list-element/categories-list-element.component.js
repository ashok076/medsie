import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Color} from '../../assets/color/color.assets'

import styles from './categories-list-element.style';

const CategoriesListElement = ({item}) =>  (
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={[styles.image, {backgroundColor: Color.purpleishBlue}]}/>
                    <View style={styles.body}> 
                        <Title style={styles.title}>Title</Title>
                        <Caption style={styles.caption}>Sub Title</Caption>
                        <View style={styles.horizontalView}>
                            <Icon name="place" color={Color.purpleishBlue} size={17} />
                            <Text style={styles.place}>Place</Text>
                        </View>
                    </View>
                </Card>
            </View>
    
)

export default CategoriesListElement