import React, {Component} from 'react'
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Stars from 'react-native-stars';

import {Color} from '../../assets/color/color.assets'
import Star from '../../assets/svg-files/starfilled.svg'
import StarOutline from '../../assets/svg-files/star-outline.svg'

import styles from './categories-list-element.style';

const CategoriesListElement = ({item, key, navigation}) =>  (
            <TouchableOpacity style={styles.cardView} key={key} onPress={() => navigation.navigate('Listing', {id: item.item.Buss_PkId})}>
                <Card style={styles.card}>
                    <Image style={styles.image} source={{uri: item.item.Buss_Image_Path}}/>
                    <View style={styles.body}> 
                        <Title style={styles.title}>{ ((item.item.Buss_Name).length > 15) ? (((item.item.Buss_Name).substring(0,15-3)) + '...') : item.item.Buss_Name }</Title>
                        <View style={styles.starView}>
                        <Stars
                            display={4}
                            spacing={1}
                            count={5}
                            starSize={12}
                            fullStar= {<Star width={12} height={12}/>}
                            emptyStar= {<StarOutline width={12} height={12}/>}/>
                        </View>
                        <Caption style={styles.caption}>{item.item.Buss_City}, {item.item.Buss_Country}</Caption>
                        <View style={styles.horizontalView}>
                            <Icon name="place" color={Color.primaryColor} size={17} />
                            <Text style={styles.place}>{item.item.Distance} mi</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
    
)

export default CategoriesListElement