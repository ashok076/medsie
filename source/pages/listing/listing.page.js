import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';

import BackHeader from '../../components/back-header/back-header.component'
import CompanyCard from '../../components/company-card/company-card.component'
import ActionButtons from '../../components/action-button/action-button.component'
import Introduction from '../../components/introduction/introduction.component'
import TimingStatus from '../../components/timing-status/timing-status.component'
import Reviews from '../../components/review/review.component'
import ReviewsComment from '../../components/reviews-comment/reviews-comment.component.js'

import styles from './listing.style';

class Listing extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <BackHeader title=""/>
                    <ScrollView>
                    <View style={styles.innerContainer}>
                        <CompanyCard />
                        <ActionButtons/>
                        <Introduction />
                        <View style={styles.border}/>
                        <TimingStatus />
                        <View style={styles.border}/>
                        <Reviews />
                        <ReviewsComment list={[0,1,2,3]}/>
                        </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Listing;