import React, { Component } from "react";
import {View, Text, SafeAreaView} from "react-native";
import { Modalize } from 'react-native-modalize';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'

import Header from '../../components/header/header.component';

import styles from './show-maps.style'

class ShowMaps extends Component{
    constructor(){
        super()
    }

    marker = () => {
        const {route} = this.props;
        return route.params.data.map(marker => (
            <Marker
              coordinate={{
                latitude: marker.Buss_Lat ? parseFloat(marker.Buss_Lat) : 0,
                longitude: marker.Buss_Long ? parseFloat(marker.Buss_Long) : 0,
              }}
            />
        ))
    }

    render(){
        const {navigation, route} = this.props;
        return(
            <SafeAreaView style={styles.container}>
                <MapView 
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 50,
                    longitudeDelta: 50,
                }}
                style={{height: '100%'}}>
                    {this.marker()}
                </MapView>
            </SafeAreaView>
        )
    }
}

export default ShowMaps;