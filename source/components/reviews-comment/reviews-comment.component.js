import React from "react";
import {View, FlatList, TextInput} from 'react-native';
import {Text, Title, Caption, Avatar, Card} from 'react-native-paper';
import StarRating from 'react-native-star-rating';

import ReadMore from '../../lib/read-more/read-more.lib';
import Reply from '../reply/reply.component'

import styles from './reviews-comment.style';

const ReviewsComment = ({list, navigation, show}) => (
    <View>
        <FlatList
            data={list}
            renderItem={(item) => renderReviews(item, navigation, show)}
            />
    </View>
)

renderReviews = (item, navigation, show) => (
    <Card style={styles.card} elevation={1}>
        <View style={styles.row}>
            <Avatar.Text size={30} label="U" />
            <View style={styles.usernameContainer}>
                <Text>User Name</Text>
            </View>
        </View>
        <View style={[styles.row, styles.ratingStarView]}>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={item.item.Rat_Rating}
                fullStar= {'star'}
                emptyStar= {'star-o'}
                fullStarColor={'orange'}
                emptyStarColor={'orange'}
                starSize={16}/>
            <Caption style={styles.ratinTxt}>{item.item.Rat_Rating}</Caption>
        </View>
        <View>
            <Text>{item.item.Rat_Title}</Text>
            <ReadMore
                    numberOfLines={5}
                    textStyle={styles.introduction}>
                    <Caption style={styles.introductions}>
                        {item.item.Rat_Description}
                    </Caption>
            </ReadMore>
            <Reply item={item.item} show={show} navigation={navigation}/>
        </View>
    </Card>
)

export default ReviewsComment