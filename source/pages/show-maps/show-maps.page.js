import React, { Component } from "react";
import {View, Text, SafeAreaView} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Card } from 'react-native-paper';

import BackHeader from '../../components/back-header/back-header.component';
import CompanyCard from '../../components/company-card/company-card.component';
import ActionButtons from '../../components/action-button/action-button.component';

import LogoMarker from '../../assets/svg-files/marker.svg'

import styles from './show-maps.style'

class ShowMaps extends Component{
    constructor(){
        super();
        this.state={
            data: '',
            show: false
        }
    }

    marker = () => {
        const {route} = this.props;
        return route.params.data.map(marker => (
            <Marker
              coordinate={{
                latitude: marker.Buss_Lat ? parseFloat(marker.Buss_Lat) : 0,
                longitude: marker.Buss_Long ? parseFloat(marker.Buss_Long) : 0,
              }}
              onPress={() => this.setState({ data: marker, show: true }, () => console.log("Data: ", marker))}>
              <LogoMarker height={45} width={45}/>
              </Marker>
        ))
    }

    render(){
        const {navigation, route} = this.props;
        const {data, show} = this.state;
        return(
            <SafeAreaView style={styles.container}>
            <View style={{marginLeft: 10}}>
                <BackHeader title="Back" navigation={navigation}/>
            </View>
                <MapView 
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: parseFloat(route.params.data[0].Buss_Lat),
                    longitude: parseFloat(route.params.data[0].Buss_Long),
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                }}
                style={styles.map}>
                    {this.marker()}
                </MapView>
                {show && (
                    <Card style={styles.card}>
                        <CompanyCard item={data}/>
                        <ActionButtons item={data}/>
                    </Card>
                )}
            </SafeAreaView>
        )
    }
}

export default ShowMaps;