import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView, Text, PermissionsAndroid, Platform, TouchableOpacity} from 'react-native';
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
            this.setState({ isLoader: true }, () => this.getLatLong())
        });
  }

  getLatLong = async () => {
  const value = await AsyncStorage.multiGet(['latitude', 'longitude', 'access_token']);
  const currentLatitude = JSON.parse(value[0][1]);
  const currentLongitude = JSON.parse(value[1][1]);
  const access_token = JSON.parse(value[2][1]);
  this.setState({ currentLatitude: currentLatitude, currentLongitude: currentLongitude, access_token: access_token }, () => this.categoryData())
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
      console.log("Access: ", currentLatitude, currentLongitude, access_token)
      await getBusinessData(data, access_token)
      .then(response => {
          this.setState({ item: response[0][0], isLoader: false }, () => console.log("Res: ", JSON.stringify(response[0][0])))
      })
      .catch(error => {
        console.log("Error: ", error)
        this.setState({ isLoader: false })
      })
  }

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