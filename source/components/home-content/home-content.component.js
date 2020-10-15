import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchTextInput from '../search-text-input/search-text-input.component'
import StoreList from '../store-list/store-list.component'
import Categories from '../categories/categories.component'

import styles from './home-content.style';

class HomeContent extends Component {
    constructor(){
        super()
        this.state = {
            list: [{color: 'pink'}, {color: 'purple'}, {color: 'pink'}, {color: 'purple'}, {color: 'pink'}, {color: 'purple'}, {color: 'pink'}, {color: 'purple'}]
        }
    }

    render(){
        const {navigation} = this.props;
        const {list} = this.state;
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Find your store</Text>
                <View style={styles.searchView}>
                    <SearchTextInput navigation={navigation}/>
                    <TouchableOpacity style={styles.tune}><Icon name="tune" color="#000000" size={30} /></TouchableOpacity>
                </View>
                <StoreList storeList={list}/>
                <Categories />
            </ScrollView>
        )
    }
}

export default HomeContent