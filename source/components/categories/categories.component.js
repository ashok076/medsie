import React, {Component} from 'react'
import {View, TouchableOpacity, FlatList} from 'react-native';
import {Text} from 'react-native-paper'

import CategoriesList from '../categories-list/categories-list.component';
import ShowMapsTitle from '../show-maps-title/show-map-title.component';
import {getBusinessData, getHomeData} from '../../configure/api/api.configure'

import styles from './categories.style';

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            array: []
        }
    }

      componentDidMount() {
        const {navigation, route} = this.props;
            navigation.addListener('focus', () => {
                this.homeData();
            });
  }

    homeData = async () => {
        const data = JSON.stringify({ Type: 1 })
        await getHomeData(data)
        .then(response => {
            this.setState({ array: response[1] })
        })
        .catch(error => console.log(error))
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
        const {array} = this.state;
        const {navigation} = this.props;
        return (
            <View>
                <FlatList
                    data={array}
                    renderItem={(item, index) => this.category(navigation, item)}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    />
            </View>
        )
    }
}

export default Categories;