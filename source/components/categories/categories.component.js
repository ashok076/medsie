import React, {Component} from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper'

import CategoriesList from '../categories-list/categories-list.component';
import ShowMapsTitle from '../show-maps-title/show-map-title.component';

import styles from './categories.style';

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            array: [{color: 'purple'}, {color: 'pink'}, {color: 'purple'}, {color: 'pink'}, {color: 'purple'}, {color: 'pink'}, {color: 'purple'}],
        }
    }

    recreationalShops = () => (
        <View>
            <ShowMapsTitle title="Recreational Shops"/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    medicalShops = () => (
        <View>
            <ShowMapsTitle title="Medical Shops"/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    deliveries = () => (
        <View>
            <ShowMapsTitle title="Deliveries"/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    doctors = () => (
        <View>
            <ShowMapsTitle title="Doctors"/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    events = () => (
        <View>
            <ShowMapsTitle title="Events"/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    render(){
        const {array} = this.state;
        return (
            <View>
                <View style={styles.gap}/>
                {this.recreationalShops()}
                <View style={styles.gap}/>
                {this.medicalShops()}
                <View style={styles.gap}/>
                {this.deliveries()}
                <View style={styles.gap}/>
                {this.doctors()}
                <View style={styles.gap}/>
                {this.events()}
            </View>
        )
    }
}

export default Categories;