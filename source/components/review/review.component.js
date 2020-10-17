import React from 'react';
import {View} from 'react-native';
import {Title, Text} from 'react-native-paper';

import RatingProgress from '../rating-progress/rating-progress.component'

import styles from './review.style';

const Reviews  = () => (
            <View style={styles.container}>
                <Title>Reviews</Title>
                <RatingProgress list={[0,1,2,3,4]}/>
            </View>
        )

export default Reviews