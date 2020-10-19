import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchTextInput from '../search-text-input/search-text-input.component'
import StoreList from '../store-list/store-list.component'
import Categories from '../categories/categories.component'
import Filter from '../../assets/svg-files/filter.svg'
import {categories} from './home-content.list'

import styles from './home-content.style';

class HomeContent extends Component {
    constructor(){
        super()
    }

    render(){
        const {navigation} = this.props;
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>Find your store</Text>
                <View style={styles.searchView}>
                    <SearchTextInput navigation={navigation}/>
                    <TouchableOpacity style={styles.tune}><Filter width={30} height={30} /></TouchableOpacity>
                </View>
                    <StoreList storeList={categories}/>
                    <Categories />
                </View>
            </ScrollView>
        )
    }
}

export default HomeContent