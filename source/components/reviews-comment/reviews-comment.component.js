import React from "react";
import {View, FlatList} from 'react-native';
import {Text, Title, Caption, Avatar, Card} from 'react-native-paper';

import styles from './reviews-comment.style';

const ReviewsComment = ({list}) => (
    <View>
        <FlatList
            data={list}
            renderItem={(item, id) => renderReviews(item)}
            />
    </View>
)

renderReviews = (item) => (
    <Card style={styles.card} elevation={1}>
        
    </Card>
)

export default ReviewsComment