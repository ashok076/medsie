import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';

import BackHeader from '../../components/back-header/back-header.component';
import InputTextIcon from '../../components/input-text-icon/input-text-icon.component';

import styles from './search-and-filter.style';

class SearchAndFilter extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  render() {
    const {navigation, route} = this.props;
    const {isFocus, closeModal, filterModal} = route.params;
    const {search} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>
          <BackHeader title="Back" navigation={navigation} />
        </View>
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
        </View>
      </SafeAreaView>
    );
  }
}

export default SearchAndFilter;
