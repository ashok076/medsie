import React from 'react';
import {View, FlatList, Text} from 'react-native';

import * as Progress from 'react-native-progress';

import styles from './rating-progress.style';

const RatingProgress = ({list}) => (
    <View>
        <FlatList
            data={list}
            renderItem={(item, id) => renderRatingProgress(item)}
            />
    </View>
)

renderRatingProgress = (item) => (
    <View style={styles.row}>
        <Text style={styles.margin}>5 star</Text>
        <View style={[styles.center, styles.margin]}>
            <Progress.Bar progress={0.5} width={200} color={'green'}/>
        </View>
        <Text>26</Text>
    </View>
)

export default RatingProgress;