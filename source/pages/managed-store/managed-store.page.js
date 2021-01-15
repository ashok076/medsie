import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';

import ManageStoreList from '../../components/manage-store-list/manage-store-list.component';
import BackHeader from '../../components/back-header/back-header.component';
import {managedStore} from '../../configure/api/api.configure';

import styles from './managed-store.style';

class ManagedStore extends Component {
  constructor() {
    super();
    this.state = {
      isLoader: false,
      list: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.addListener('focus', () => {
      this.manageData();
    });
  }

  manageData = async () => {
    const data = JSON.stringify({
      Type: 1,
    });
    await managedStore(data)
      .then((res) => {
        console.log('Manage: ', res);
        this.setState({list: res[0]});
      })
      .catch((error) => console.log('Error in data: ', error));
  };

  render() {
    const {list} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <BackHeader title="Back" navigation={navigation} />
          <ManageStoreList list={list} navigation={navigation}/>
        </View>
      </SafeAreaView>
    );
  }
}

export default ManagedStore;
