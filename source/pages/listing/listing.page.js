import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';

import BackHeader from '../../components/back-header/back-header.component'
import CompanyCard from '../../components/company-card/company-card.component'
import ActionButtons from '../../components/action-button/action-button.component'
import Introduction from '../../components/introduction/introduction.component'
import TimingStatus from '../../components/timing-status/timing-status.component'
import Reviews from '../../components/review/review.component'
import ReviewsComment from '../../components/reviews-comment/reviews-comment.component'
import {getBusinessData} from '../../configure/api/api.configure'

import styles from './listing.style';

class Listing extends Component {
    constructor(){
        super();
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        const {navigation, route} = this.props;
        navigation.addListener('focus', () => {
            this.categoryData()
        });
  }

  categoryData = async () => {
      const {route} = this.props;
      console.log("Id: ", route.params.id)
      let data = JSON.stringify({
          Type: 3,
          Buss_PkId: route.params.id
      })
      await getBusinessData(data)
      .then(response => {
          console.log(response, data)
          this.setState({ item: response[0][0] })
      })
      .catch(error => console.log("Error: ", error))
  }

    render(){
        const {item} = this.state;
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                    <ScrollView>
                    <View style={styles.innerContainer}>
                        <View style={styles.main}>
                            <BackHeader title="Back" navigation={navigation}/>
                            <CompanyCard style={styles.main} item={item}/>
                            <ActionButtons/>
                            <Introduction item={item}/>
                            <View style={styles.border}/>
                            <TimingStatus item={item}/>
                            <View style={styles.border}/>
                            <Reviews />
                            <ReviewsComment list={[0,1,2,3]}/>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Listing;