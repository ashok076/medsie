import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView, Text, PermissionsAndroid, Platform, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

import BackHeader from '../../components/back-header/back-header.component'
import CompanyCard from '../../components/company-card/company-card.component'
import ActionButtons from '../../components/action-button/action-button.component'
import Introduction from '../../components/introduction/introduction.component'
import TimingStatus from '../../components/timing-status/timing-status.component'
import Reviews from '../../components/review/review.component'
import ReviewsComment from '../../components/reviews-comment/reviews-comment.component'
import Loader from '../../components/loader/loader.component'
import {getBusinessData} from '../../configure/api/api.configure'

import styles from './listing.style';

class Listing extends Component {
    constructor(){
        super();
        this.state = {
            item: {},
            currentLatitude: 0,
            currentLongitude: 0,
            access_token: ''
        }
    }

    componentDidMount() {
        const {navigation, route} = this.props;
        navigation.addListener('focus', () => {
            this.setState({ isLoader: true }, () => this.getAccessToken())
        });
  }

   getAccessToken = async () => {
      let access_token = ''
      try {
        access_token = await AsyncStorage.getItem('access_token')
        this.setState({ access_token }, () => this.getPermission())
    } catch (error) {
        console.log(error)
        this.setState({ isLoader: false })
    }
  }

  categoryData = async () => {
      const {route} = this.props;
      const { currentLatitude, currentLongitude, access_token } = this.state;
      this.setState({ isLoader: true })
      let data = JSON.stringify({
          Type: 3,
          Buss_PkId: route.params.id,
          Buss_Lat: currentLatitude, 
          Buss_Long: currentLongitude
      })
      await getBusinessData(data, JSON.parse(access_token))
      .then(response => {
          this.setState({ item: response[0][0], isLoader: false }, () => console.log("Res: ", JSON.stringify(response[0][0])))
      })
      .catch(error => {
        console.log("Error: ", error)
        this.setState({ isLoader: false })
      })
  }

    getPermission = async () => {
      if (Platform.OS === 'ios') {
        this.getOneTimeLocation();
        this.subscribeLocationLocation();
        this.categoryData();
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
            this.getOneTimeLocation();
            this.subscribeLocationLocation();
          } else {
            this.setState({locationStatus: 'Permission Denied'});
            alert('Location permission is required to run this application')
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
        this.setState({currentLatitude}, () => this.categoryData());
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

  submitReview = (navigation, item) => (
    <TouchableOpacity onPress={() => navigation.navigate('WriteReviews', {data: item, access_token: this.state.access_token})}>
      <Text style={styles.title}>Review Store</Text>
    </TouchableOpacity>
  )

    render(){
        const {item, isLoader} = this.state;
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                    <ScrollView> 
                    <View style={styles.innerContainer}>
                        <View style={styles.main}>
                            <BackHeader title="Back" navigation={navigation}/>
                            <CompanyCard style={styles.main} item={item}/>
                            <ActionButtons item={item} />
                            <Introduction item={item}/>
                            <View style={styles.border}/>
                            <TimingStatus item={item}/>
                            <View style={styles.border}/>
                            {this.submitReview(navigation, item)}
                            <Reviews />
                            <ReviewsComment list={[0,1,2,3]}/>
                            </View>
                            <Loader isLoader={isLoader}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Listing;