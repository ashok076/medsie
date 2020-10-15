import React, {Component} from 'react'
import {View, FlatList} from 'react-native';

import CategoriesListElement from '../categories-list-element/categories-list-element.component'

import styles from './categories-list.style';

const CategoriesList = ({list}) =>  (
            <View style={styles.categoryList}>
                    <FlatList
                        data={list}
                        renderItem={(item, id) => <CategoriesListElement item={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        />
                </View>
    
)

export default CategoriesList