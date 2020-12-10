import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchTextInput from '../search-text-input/search-text-input.component';
import StoreList from '../store-list/store-list.component';
import Categories from '../categories/categories.component';
import Filter from '../../assets/svg-files/filter.svg';
import {categories} from './home-content.list';

import styles from './home-content.style';

const HomeContent = ({navigation}) => (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View>
      <Text style={styles.title}>Find your store</Text>
      <View style={styles.searchView}>
        <SearchTextInput
          navigation={navigation}
          onPress={() => navigation.navigate('SearchAndFilter', {isFocus: true})}
        />
        <TouchableOpacity
          style={styles.tune}
          onPress={() => navigation.navigate('FilterModal')}>
          <Filter width={30} height={30} />
        </TouchableOpacity>
      </View>
      <StoreList storeList={categories} navigation={navigation} />
      <Categories navigation={navigation} />
    </View>
  </ScrollView>
);

export default HomeContent;
