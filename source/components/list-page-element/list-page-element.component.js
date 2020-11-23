import React, {Component} from 'react'
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, Caption, Card, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Stars from 'react-native-stars';

import {Color} from '../../assets/color/color.assets'
import Star from '../../assets/svg-files/starfilled.svg'
import StarOutline from '../../assets/svg-files/star-outline.svg'

import styles from './list-page-element.style';

const ListPageElement = ({item, key, navigation}) =>  (
            <TouchableOpacity style={styles.cardView} key={key} onPress={() => navigation.navigate('Listing', {id: item.item.Buss_PkId})}>
                <Card style={styles.card}>
                    <Image style={styles.image} source={{uri: item.item.Buss_Image_Path}}/>
                    <View style={styles.body}> 
                        <Title style={styles.title}>{item.item.Buss_Name}</Title>
                        <View style={styles.starView}>
                        <Stars
                            display={4}
                            spacing={1}
                            count={5}
                            starSize={40}
                            fullStar= {<Star width={30} height={30}/>}
                            emptyStar= {<StarOutline width={30} height={30}/>}/>
                        </View>
                        <View style={styles.horizontalView}>
                            <Icon name="place" color={Color.primaryColor} size={24} />
                            <Text style={styles.place}>{item.item.Distance} mi</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
    
)

export default ListPageElement