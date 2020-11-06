import React from 'react';
import {View, FlatList} from 'react-native';
import {Title, Text} from 'react-native-paper';

import styles from './timing-status.style';

const list = [{
    days: 'Sunday',
    time: '10:00 AM - 10:00 PM'
}, {
    days: 'Monday',
    time: '10:00 AM - 10:00 PM'
},{
    days: 'Tuesday',
    time: '10:00 AM - 10:00 PM'
},{
    days: 'Wednesday',
    time: '10:00 AM - 10:00 PM'
},{
    days: 'Thursday',
    time: '10:00 AM - 10:00 PM'
},{
    days: 'Friday',
    time: '10:00 AM - 10:00 PM'
},{
    days: 'Saturday',
    time: '10:00 AM - 10:00 PM'
}]

const TimingStatus  = ({ item }) => (
            <View style={styles.container}>
            <Title style={styles.close}>CLOSED NOW </Title>
                <View>
                    <FlatList
                        data={item.businessHoursTransMaster_DTOs}
                        renderItem={(i) => renderTime(i)}
                        />
                </View>
            </View>
        )

const renderTime = (item) => (
    <View style={[styles.row, styles.viewMargin]}>
        <View style={styles.rowContainer}>
            <Text style={styles.days}>{item.item.BHT_Weekdays}</Text>
        </View>
        <View style={styles.rowContainer}>
            <Text style={styles.time}>{item.item.BHT_FromTime} - {item.item.BHT_ToTime}</Text>
        </View>
    </View>
)

export default TimingStatus