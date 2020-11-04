import React from 'react';
import {View, FlatList, Text} from 'react-native';
import * as Progress from 'react-native-progress';

import {Color} from '../../assets/color/color.assets'

import styles from './rating-progress.style';

const RatingProgress = ({list}) => (
    <View style={styles.container}>
        <FlatList
            data={list}
            renderItem={(item) => renderRatingProgress(item)}
            />
    </View>
)

renderRatingProgress = (item) => (
    <View style={styles.row}>
        <Text style={styles.margin}>5 star</Text>
        <View style={[styles.center, styles.margin]}>
            <Progress.Bar progress={0.5} width={180} color={'green'}/>
        </View>
        <Text>26</Text>
    </View>
)

export default RatingProgress;