import React, {Component} from 'react'
import {View, TouchableOpacity, FlatList, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Text} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';

import CategoriesList from '../categories-list/categories-list.component';
import ShowMapsTitle from '../show-maps-title/show-map-title.component';
import Loader from '../../components/loader/loader.component';
import {getBusinessData, getHomeData} from '../../configure/api/api.configure';
import * as db from '../../configure/realm/realm.configure';

import styles from './categories.style';

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            array: [],
            currentLatitude: 0,
            currentLongitude: 0,
            isLoader: false,
            access_token: "",
        }
    }

      componentDidMount() {
        const {navigation, route} = this.props;
            navigation.addListener('focus', () => {
                db.queryHomeDetails().then(response => {
                  this.setState({ array: response  })
                })
                .catch(error => console.log("Query error: ", error))
            this.setState({ isLoader: true }, () => this.getAccessToken())
            });
  }

   getAccessToken = async () => {
      let access_token = ''
      try {
        access_token = await AsyncStorage.getItem('access_token')
        this.setState({ access_token }, () => this.getPermission())
        console.log('access token')
    } catch (error) {
        console.log(error)
        this.setState({ isLoader: false })
    }
  }

    homeData = async () => {
        const { currentLatitude, currentLongitude, access_token } = this.state;
        const data = JSON.stringify({ Type: 1, Cat_Lat: currentLatitude, Cat_Long: currentLongitude })
        await getHomeData(data, JSON.parse(access_token))
        .then(response => {
            this.setState({ array: response[1], isLoader: false })
            db.InsertHomeDetails(response[1])
            .then(response => console.log("Res: ", response))
            .catch(error => console.log("Error: ", error))
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

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        this.setState({currentLongitude});
        

        //Setting Longitude state
        this.setState({currentLatitude}, () => this.homeData());
        console.log("Location one: ", currentLatitude, currentLongitude)
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
    let watchID = Geolocation.watchPosition(
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
        console.log("Location subs: ", currentLatitude, currentLongitude)
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