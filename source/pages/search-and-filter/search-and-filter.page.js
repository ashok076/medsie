import React, {Component} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, Title} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';

import BackHeader from '../../components/back-header/back-header.component';
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component';
import ResultCategory from '../../components/result-component/result-component.component';

import styles from './search-and-filter.style';

class SearchAndFilter extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  back = (navigation) => (
    <TouchableOpacity
      style={styles.titleView}
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        })
      }>
      <View style={styles.rowObject}>
        <View>
          <Icons name="arrowleft" color={'rgb(33, 47, 60)'} size={24} />
        </View>
        <Title
          style={[
            styles.title,
            {
              color: 'rgb(33, 47, 60)',
            },
          ]}>
          Back
        </Title>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {navigation, route} = this.props;
    const {isFocus, data} = route.params;
    const {search} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>{this.back(navigation)}</View>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <InputTextIcon
              placeholder="Search"
              icon={'search'}
              value={search}
              show={false}
              onChangeText={(search) => this.setState({search})}
              focus={isFocus}
            />
          </View>
          <View style={styles.resultContainer}>
            <Text>Results</Text>
            <ResultCategory list={data[0]} navigation={navigation} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SearchAndFilter;
