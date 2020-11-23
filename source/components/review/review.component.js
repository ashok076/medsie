import React from 'react';
import {View} from 'react-native';
import {Title, Text} from 'react-native-paper';
import Stars from 'react-native-stars';

import RatingProgress from '../rating-progress/rating-progress.component'
import Star from '../../assets/svg-files/starfilled.svg'
import StarOutline from '../../assets/svg-files/star-outline.svg'

import styles from './review.style';

const Reviews  = () => (
            <View style={styles.container}>
                <Title style={styles.title}>Reviews</Title>
                <View style={styles.row}>
                <View style={styles.center}>
                    <Text style={styles.rating}>4.5</Text>
                    <Stars
                        display={3}
                        spacing={1}
                        count={5}
                        starSize={16}
                        fullStar= {<Star width={16} height={16}/>}
                        emptyStar= {<StarOutline width={16} height={16}/>}/>
                    <Text style={styles.totalRating}> 289 </Text>
                </View>
                <View style={styles.ratingContainer}>
                    <RatingProgress list={[0,1,2,3,4]}/>
                </View>
                </View>
            </View>
        )

export default Reviews