import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Title, Caption, Paragraph} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Color} from '../../assets/color/color.assets'

import styles from './company-card.style';

const CompanyCard  = ({item}) => (
                <View style={[styles.row, styles.container]}>
                    <Image source = {{uri: item.Buss_Image_Path}} style = {styles.imageView}/>
                    <View style={styles.info}>
                        <Title style={styles.title}>{item.Buss_Name}</Title>
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