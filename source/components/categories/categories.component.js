import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native';
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

    recreationalShops = (navigation) => (
        <View>
            <ShowMapsTitle title="Recreational Shops" onPress={() => navigation.navigate('ShowMaps')}/>
            <CategoriesList list={this.state.array}/>
        </View>
    ) 

    medicalShops = (navigation) => (
        <View>
            <ShowMapsTitle title="Medical Shops" onPress={() => navigation.navigate('ShowMaps')}/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    deliveries = (navigation) => (
        <View>
            <ShowMapsTitle title="Deliveries" onPress={() => navigation.navigate('ShowMaps')}/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    doctors = (navigation) => (
        <View>
            <ShowMapsTitle title="Doctors" onPress={() => navigation.navigate('ShowMaps')}/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    events = (navigation) => (
        <View>
            <ShowMapsTitle title="Events" onPress={() => navigation.navigate('ShowMaps')}/>
            <CategoriesList list={this.state.array}/>
        </View>
    )

    render(){
        const {array} = this.state;
        const {navigation} = this.props;
        return (
            <View>
                <View style={styles.gap}/>
                {this.recreationalShops(navigation)}
                <View style={styles.gap}/>
                {/* {this.medicalShops(navigation)}
                <View style={styles.gap}/>
                {this.deliveries(navigation)}
                <View style={styles.gap}/>
                {this.doctors(navigation)}
                <View style={styles.gap}/>
                {this.events(navigation)} */}
            </View>
        )
    }
}

export default Categories;