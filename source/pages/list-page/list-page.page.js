import React, {Component} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import ListPageComponent from '../../components/list-page-component/list-page-component.component'
import BackHeader from '../../components/back-header/back-header.component'
import {getBusinessListData} from '../../configure/api/api.configure'

import styles from './list-page.style'

class ListPage extends Component {
    constructor(){
        super();
        this.state = { 
            array: [],
            currentLatitude: '',
            currentLongitude: '',
            locationStatus: ''
        }
    }

      componentDidMount() {
        const {navigation, route} = this.props;
            navigation.addListener('focus', () => {
                this.homeData();
            });
  }

  getPermission = async () => {
      if (Platform.OS === 'ios') {
        this.getOneTimeLocation();
        this.subscribeLocationLocation();
        this.homeData();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            console.log("Check: ")
            this.getOneTimeLocation();
            this.subscribeLocationLocation();
            this.homeData();
          } else {
            this.setState({locationStatus: 'Permission Denied'});
          }
        } catch (err) {
          console.warn(err);
        }
      }
    }

   getOneTimeLocation = () => {
    this.setState({locationStatus:'Getting Location ...'});
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        this.setState({currentLongitude});
        

        //Setting Longitude state
        this.setState({currentLatitude});
      },
      (error) => {
        this.setState({ locationStatus: error.message });
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        this.setState({locationStatus: 'You are Here'});
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        this.setState({currentLongitude});

        //Setting Latitude state
        this.setState({currentLatitude});
      },
      (error) => {
        this.setState({ locationStatus: error.message });
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

    homeData = async () => {
        const { id } = this.props.route.params;
        const {currentLatitude, currentLongitude, locationStatus} = this.state;
        console.log("Loc: ", currentLatitude, currentLongitude, locationStatus)
        const data = JSON.stringify({ 
            "Type": 1,
            "Buss_CatId": id,
            "Buss_Lat": 19.1872294,
            "Buss_Long": 72.8407473
            })
        await getBusinessListData(data)
        .then(response => {
            this.setState({ array: response[0] }, () => console.log(JSON.stringify(this.state.array)))
        })
        .catch(error => console.log(error))
    }

    showMap = () => (
        <View>
                <TouchableOpacity style={styles.showMap} onPress={() => this.props.navigation.navigate('ShowMaps', {data: this.state.array}) }>
                    <Text style={styles.title}>Show Map</Text>
                </TouchableOpacity>
            </View>
    )

    title = (type) => (
        <View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{type}</Text>
                    {this.showMap()}
                </View>
            </View>
    )

    render(){
        const {navigation} = this.props
        const {array} = this.state;
        const { type } = this.props.route.params;
        return(
            <SafeAreaView style={styles.container}>
                <BackHeader title="Back" navigation={navigation}/>
                {this.title(type)}
                <ListPageComponent list={array} navigation={navigation}/>
            </SafeAreaView>
        )
    }
}

export default ListPage;