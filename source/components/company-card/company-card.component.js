import React, {Component} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Title, Caption, Paragraph} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Color} from '../../assets/color/color.assets'

import styles from './company-card.style';

const width = Dimensions.get('window').width;

const CompanyCard  = ({item}) => (
                <View style={[styles.row, styles.container]}>
                    <Image style={item.Buss_Image_Path ? styles.imageView : {width: 100, height: 100, resizeMode: 'center'}} source={item.Buss_Image_Path ? {uri: item.Buss_Image_Path} : require('../../assets/png-images/placeholder.png')}/>
                    <View style={styles.info}>
                        <Title style={styles.title}>{ item.Buss_Name }</Title>
                        <View style={[styles.row]}>
                            <Icon name="place" color={Color.primaryColor} size={17} style={styles.icon}/>
                            <Caption style={styles.min}>{item.Distance} mi</Caption>
                            {icon(item.Buss_CatId)}
                        </View>
                        <Caption>{item.Cat_Name}</Caption>
                    </View> 
                </View>
        )

const icon = (id) => {
    if (id === 1) return <FontAwesome5 name="cannabis" color={"green"} size={17} style={styles.icon}/>
    else if (id === 2) return <Foundation name="plus" color={"green"} size={17} style={styles.icon}/>
}

export default CompanyCard;