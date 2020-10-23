import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Stars from 'react-native-stars';

import {Color} from '../../assets/color/color.assets'
import Star from '../../assets/svg-files/starfilled.svg'
import StarOutline from '../../assets/svg-files/star-outline.svg'

import styles from './categories-list-element.style';

const CategoriesListElement = ({item}) =>  (
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={[styles.image, {backgroundColor: Color.purpleishBlue}]}/>
                    <View style={styles.body}> 
                        <Title style={styles.title}>Title</Title>
                        <View style={styles.starView}>
                        <Stars
                            display={4}
                            spacing={1}
                            count={5}
                            starSize={40}
                            fullStar= {<Star width={12} height={12}/>}
                            emptyStar= {<StarOutline width={12} height={12}/>}/>
                        </View>
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