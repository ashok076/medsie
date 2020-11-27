import React, {Component} from 'react'
import {View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';

import {Color} from '../../assets/color/color.assets'
import Star from '../../assets/svg-files/starfilled.svg'
import StarOutline from '../../assets/svg-files/star-outline.svg'

import styles from './categories-list-element.style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CategoriesListElement = ({item, key, navigation}) =>  (
            <TouchableOpacity style={styles.cardView} key={key} onPress={() => navigation.navigate('Listing', {id: item.item.Buss_PkId})}>
                <Card style={styles.card}>
                    <Image style={item.item.Buss_Image_Path ? styles.image : {width: width / 2.8, height: 120, resizeMode: 'center'}} source={item.item.Buss_Image_Path ? {uri: item.item.Buss_Image_Path} : require('../../assets/png-images/placeholder.png')}/>
                    <View style={styles.body}> 
                        <Title style={styles.title}>{ ((item.item.Buss_Name).length > 15) ? (((item.item.Buss_Name).substring(0,15-3)) + '...') : item.item.Buss_Name }</Title>
                        <View style={styles.starView}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={4}
                            fullStar= {'star'}
                            emptyStar= {'star-o'}
                            fullStarColor={'#FFBF00'}
                            emptyStarColor={'#FFBF00'}
                            starSize={12}/>
                        </View>
                        <View style={styles.horizontalView}>
                            <Icon name="place" color={Color.primaryColor} size={17} />
                            <Text style={styles.place}>{item.item.Distance} mi</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
    
)

export default CategoriesListElement