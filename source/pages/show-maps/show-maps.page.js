import React, { Component } from "react";
import {View, SafeAreaView} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Card, Text, Caption } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import BackHeader from '../../components/back-header/back-header.component';
import CompanyCard from '../../components/company-card/company-card.component';
import ActionButtons from '../../components/action-button/action-button.component';
import {getBusinessListData} from '../../configure/api/api.configure';
import Loader from '../../components/loader/loader.component'

import LogoMarker from '../../assets/svg-files/marker.svg'

import styles from './show-maps.style'

class ShowMaps extends Component{
    initialState = {
        data: '',
        show: false,
        longitudeDelta: 0.5,
        latitudeDelta: 0.5,
        isLoader: false,
        array: []
    }
    constructor(){
        super();
        this.state={
            ...this.initialState
        }
    }
 
    componentDidMount(){
        const {navigation} = this.props;
        navigation.addListener('focus', () => {
            this.setState(this.initialState)
            this.setState({ isLoader: true }, () => this.getLatLong())
        });
    }

    getLatLong = async () => {
  const value = await AsyncStorage.multiGet(['latitude', 'longitude', 'access_token']);
  const currentLatitude = JSON.parse(value[0][1]);
  const currentLongitude = JSON.parse(value[1][1]);
  const access_token = JSON.parse(value[2][1]);
  this.setState({ currentLatitude: currentLatitude, currentLongitude: currentLongitude, access_token: access_token }, () => this.mapData())
}

    mapData = async () => {
        const { id, type } = this.props.route.params;
        const {currentLatitude, currentLongitude, locationStatus, access_token} = this.state;
        const data = JSON.stringify({
            "Type": 1,
            "Buss_CatId": id,
            "Buss_Lat": currentLatitude,
            "Buss_Long": currentLongitude
            })
        await getBusinessListData(data, access_token)
        .then(response => {
            this.setState({ array: response[0], isLoader: false })
        })
        .catch(error => {
            console.log("Error: ", error);
            this.setState({ isLoader: false })
        })
    }

    marker = () => {
        const {route} = this.props;
        const {array} = this.state;
        return array.map(marker => (
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
        const {data, show, longitudeDelta, latitudeDelta, isLoader} = this.state;
        return(
            <SafeAreaView style={styles.container}>
            <View style={{marginLeft: 10}}>
                <BackHeader title="Back" navigation={navigation}/>
            </View>
                <MapView 
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 19.0759837,
                    longitude: 72.8776559,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta,
                }}
                style={styles.map}>
                    {this.marker()}
                </MapView>
                {show && (
                    <Card style={styles.card}>
                        <CompanyCard item={data}/>
                        <ActionButtons item={data} show={true} navigation={navigation}/>
                    </Card>
                )}
                <Loader isLoader={isLoader}/>
            </SafeAreaView>
        )
    }
}

export default ShowMaps;