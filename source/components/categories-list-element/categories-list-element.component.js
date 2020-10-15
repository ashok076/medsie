import React, {Component} from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'

import styles from './categories-list-element.style';

const CategoriesListElement = ({item}) =>  (
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={[styles.image, {backgroundColor: item.item.color}]}/>
                </Card>
            </View>
    
)

export default CategoriesListElement