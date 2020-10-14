import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchTextInput from '../search-text-input/search-text-input.component'

import styles from './home-content.style';

class HomeContent extends Component {
    constructor(){
        super()
        this.state = {
            state: 1
        }
    }

    render(){
        const {navigation} = this.props
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Find your store</Text>
                <View style={styles.searchView}>
                    <SearchTextInput navigation={navigation}/>
                    <TouchableOpacity style={styles.tune}><Icon name="tune" color="#000000" size={30} /></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default HomeContent