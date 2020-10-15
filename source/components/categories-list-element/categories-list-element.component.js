import React, {Component} from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './categories-list-element.style';

const CategoriesListElement = ({item}) =>  (
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={[styles.image, {backgroundColor: item.item.color}]}/>
                    <View style={styles.body}>
                        <Title>Title</Title>
                        <Caption>Sub Title</Caption>
                        <View style={styles.horizontalView}>
                            <Icon name="place" color={item.item.color} size={20} />
                            <Text>Place</Text>
                        </View>
                    </View>
                </Card>
            </View>
    
)

export default CategoriesListElement