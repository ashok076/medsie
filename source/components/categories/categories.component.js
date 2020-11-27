import React, {Component} from 'react'
import {View, TouchableOpacity, FlatList } from 'react-native';
import {Text} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';
import { Toast } from 'native-base';

import CategoriesList from '../categories-list/categories-list.component';
import ShowMapsTitle from '../show-maps-title/show-map-title.component';
import Loader from '../../components/loader/loader.component';
import {getBusinessData, getHomeData} from '../../configure/api/api.configure';

import styles from './categories.style';

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            array: [],
            isLoader: false,
            currentLatitude: 0,
            currentLongitude: 0
        }
    }

      componentDidMount() {
        const {navigation, route} = this.props;
        navigation.addListener('focus', () => {
            this.setState({ isLoader: true }, () => this.getLatLong())
        });
  }

  showMessage = (message) => {
    Toast.show({
        text: message,
        style: styles.toasttxt
    })
}

getLatLong = async () => {
  const value = await AsyncStorage.multiGet(['latitude', 'longitude']);
  const currentLatitude = JSON.parse(value[0][1]);
  const currentLongitude = JSON.parse(value[1][1]);
  this.setState({ currentLatitude: currentLatitude, currentLongitude: currentLongitude }, () => this.homeData())
}

    homeData = async () => {
        const { currentLatitude, currentLongitude } = this.state;
        const data = JSON.stringify({ Type: 1, Cat_Lat: currentLatitude, Cat_Long: currentLongitude })
        await getHomeData(data)
        .then(response => {
            this.setState({ array: response[1], isLoader: false })
            })
        .catch(error => {
            console.log(error)
            this.setState({ isLoader: false })
        })
    }

    category = (navigation, item) => (
        <View>
            <ShowMapsTitle title={item.item.Cat_Name}/>
            <View style={styles.gap}/>
            <CategoriesList list={item.item.BusinessMaster_Home} navigation={navigation}/>
            <View style={styles.gap}/>
        </View>
    )

    render(){
        const {array, isLoader} = this.state;
        const {navigation} = this.props;
        return (
            <View>
                <FlatList
                    data={array}
                    renderItem={(item, index) => this.category(navigation, item)}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    />
                    <Loader isLoader={isLoader}/>
            </View>
        )
    }
}

export default Categories;